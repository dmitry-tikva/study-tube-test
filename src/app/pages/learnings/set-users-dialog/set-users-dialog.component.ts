import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ErrorHelper } from '@helpers/errors';
import { UtilsHelper } from '@helpers/utils';
import { LearningModel, UserModel } from '@app/models';
import { LearningsService } from '@app/services/learnings/learnings.service';
import { UsersService } from '@app/services/users/users.service';

@Component({
  selector: 'app-set-users-dialog',
  templateUrl: './set-users-dialog.component.html',
  styleUrls: ['./set-users-dialog.styles.scss'],
})
export class SetUsersDialogComponent implements OnInit {
  public errorHelper = new ErrorHelper();
  public utilsHelper = new UtilsHelper();

  public formObj: FormGroup;
  public loading: boolean;
  public error: string = null;

  public learning: LearningModel;
  public allUsers: UserModel[] = [];
  public assignedUsers: number[] = [];

  private selectedBefore: number[] = [];

  constructor(
    private learningsService: LearningsService,
    private usersService: UsersService,
    public dialogRef: MatDialogRef<SetUsersDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public params: { data: LearningModel }
  ) {
    this.learning = params.data;
  }

  ngOnInit(): void {
    // Get all users we have
    this.loadUsers();
  }

  loadUsers() {
    this.usersService
      .getAll({ limit: 200, offset: 1 })
      .subscribe((res: { data: UserModel[]; totRecords: number }) => {
        // Set value
        this.assignedUsers = this.learning.assignedUsers.reduce((acc, k) => {
          acc.push(k.id);
          return acc;
        }, []);

        // Let's save selected before users
        this.selectedBefore = [...this.assignedUsers]; // to avoid linking

        this.allUsers = res.data;
      });
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.loading = true;
    this.error = null;

    // Need to update all selected and deselected users
    // This logic should be done in API, but to make this app more real let's make it on front-end side
    const currentLearning = Object.assign({}, this.learning);
    delete currentLearning.assignedUsers;

    const assignedUsers: UserModel[] = [];

    const needUpdateUsers = this.allUsers.filter((u: UserModel) => {
      // Make not linked user just to remove learnings
      if (this.assignedUsers.indexOf(u.id) > -1) {
        const tempUser = JSON.parse(JSON.stringify(u));
        delete tempUser.assignedLearnings;
        assignedUsers.push(tempUser);
      }

      if (
        this.assignedUsers.indexOf(u.id) > -1 &&
        this.selectedBefore.indexOf(u.id) === -1
      ) {
        // It wasn't set before, need to add
        const tempLearning = JSON.parse(JSON.stringify(this.learning));
        delete tempLearning.assignedUsers;

        u.assignedLearnings.push(tempLearning);

        return u;
      } else if (
        this.assignedUsers.indexOf(u.id) === -1 &&
        this.selectedBefore.indexOf(u.id) > -1
      ) {
        u.assignedLearnings = u.assignedLearnings.filter(
          (l: LearningModel) => l.id !== this.learning.id
        );

        return u;
      }

      return false;
    });

    this.learning.assignedUsers = assignedUsers;

    if (needUpdateUsers.length) {
      const listOfObservables: Observable<UserModel | LearningModel>[] = [this.learningsService.update(this.learning)];
      needUpdateUsers.forEach((u: UserModel) => {
        listOfObservables.push(this.usersService.updateUser(u));
      });

      forkJoin(listOfObservables).subscribe(() => {
        this.dialogRef.close(this.learning);
      });
    }
  }

  getUserFullName(id: number) {
    if (!this.allUsers) {
      return '';
    }

    const user: UserModel = this.allUsers.filter(
      (u: UserModel) => u.id === id
    )[0];

    return `${user.firstName} ${user.lastName}`;
  }
}
