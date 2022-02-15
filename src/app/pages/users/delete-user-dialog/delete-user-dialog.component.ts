import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '@services/users/users.service';
import { ErrorHelper } from '@helpers/errors';
import { UtilsHelper } from '@helpers/utils';
import { UserModel } from '@app/models';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.styles.scss'],
})
export class DeleteUserDialogComponent implements OnInit {
  public errorHelper = new ErrorHelper();
  public utilsHelper = new UtilsHelper();

  public loading: boolean;
  public error: string = null;
  private userId: number;

  constructor(
    private usersService: UsersService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public params: { action: string; data: UserModel }
  ) {
    this.userId = params.data ? params.data.id : null;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.loading = true;
    this.error = null;

    this.usersService.delete(this.userId).subscribe(
      () => {
        this.dialogRef.close(true);
      },
      (error) => {
        this.loading = false;
        this.error = this.errorHelper.displayError(error);
      }
    );
  }
}
