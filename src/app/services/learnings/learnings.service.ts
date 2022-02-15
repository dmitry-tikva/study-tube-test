import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiltersModel, LearningModel } from '@models/index';
import { UtilsHelper } from '@helpers/utils';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LearningsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public utilsHelper = new UtilsHelper();
  private learningsApiUrl = 'api/learnings'; // URL to web api

  constructor(private http: HttpClient) {}

  getAll(
    opts: FiltersModel
  ): Observable<{ data: LearningModel[]; totRecords: number }> {
    return this.http
      .get<{ data: LearningModel[]; totRecords: number }>(
        `${this.learningsApiUrl}?${this.utilsHelper.queryParams(
          this.utilsHelper.removeEmptyStrings(opts)
        )}`
      )
      .pipe(
        catchError(
          this.handleError<{ data: LearningModel[]; totRecords: number }>(
            'getAll learnings',
            { data: [], totRecords: 0 }
          )
        )
      );
  }

  create(rawLearning: LearningModel): Observable<LearningModel> {
    return this.http
      .post<LearningModel>(`${this.learningsApiUrl}`, rawLearning)
      .pipe(
        catchError(
          this.handleError<LearningModel>('Save new learning', null)
        )
      );
  }

  update(rawLearning: LearningModel): Observable<LearningModel> {
    return this.http
      .put<LearningModel>(
        `${this.learningsApiUrl}`,
        rawLearning,
        this.httpOptions
      )
      .pipe(
        catchError(
          this.handleError<LearningModel>('Update learning', null)
        )
      );
  }

  delete(id: number): Observable<boolean> {
    const url = `${this.learningsApiUrl}/${id}`;

    return this.http
      .delete<boolean>(url)
      .pipe(catchError(this.handleError<boolean>('Delete learning')));
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
