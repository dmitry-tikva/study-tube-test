import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltersModel, UserModel } from '@models/index';
import { UtilsHelper } from '@helpers/utils';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public utilsHelper = new UtilsHelper();
  private usersApiUrl = 'api/users'; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET users from the server */
  getAll(
    opts: FiltersModel
  ): Observable<{ data: UserModel[]; totRecords: number }> {
    return this.http
      .get<{ data: UserModel[]; totRecords: number }>(
        `${this.usersApiUrl}?${this.utilsHelper.queryParams(
          this.utilsHelper.removeEmptyStrings(opts)
        )}`
      )
      .pipe(
        catchError(
          this.handleError<{ data: UserModel[]; totRecords: number }>(
            'getAll users',
            { data: [], totRecords: 0 }
          )
        )
      );
  }

  create(rawUser: UserModel): Observable<UserModel> {
    return this.http
      .post<UserModel>(`${this.usersApiUrl}`, rawUser)
      .pipe(
        catchError(
          this.handleError<UserModel>('Save new user', null)
        )
      );
  }

  getUserById(id: number): Observable<UserModel> {
    const url = `${this.usersApiUrl}/${id}`;
    return this.http
      .get<UserModel>(url)
      .pipe(catchError(this.handleError<UserModel>(`getUser id=${id}`, null)));
  }

  updateUser(rawUser: UserModel): Observable<UserModel> {
    return this.http
      .put<UserModel>(this.usersApiUrl, rawUser)
      .pipe(catchError(this.handleError<UserModel>('updateUser', null)));
  }

  delete(id: number): Observable<boolean> {
    const url = `${this.usersApiUrl}/${id}`;

    return this.http
      .delete<boolean>(url)
      .pipe(catchError(this.handleError<boolean>('deleteUser', null)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
