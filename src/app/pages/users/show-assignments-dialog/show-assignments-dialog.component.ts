import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from '@app/models';

@Component({
  selector: 'app-show-assignments-dialog',
  templateUrl: './show-assignments-dialog.component.html',
  styleUrls: ['./show-assignments-dialog.styles.scss'],
})
export class ShowAssignmentsDialogComponent {
  public loading: boolean;
  public error: string = null;
  public user: UserModel;

  constructor(
    public dialogRef: MatDialogRef<ShowAssignmentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public params: { action: string; data: UserModel }
  ) {
    this.user = params.data;
  }

  close() {
    this.dialogRef.close();
  }
}
