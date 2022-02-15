import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ErrorHelper } from '@helpers/errors';
import { UtilsHelper } from '@helpers/utils';
import { LearningModel } from '@app/models';
import { LearningsService } from '@app/services/learnings/learnings.service';

@Component({
  selector: 'app-delete-learning-dialog',
  templateUrl: './delete-learning-dialog.component.html',
  styleUrls: ['./delete-learning-dialog.styles.scss'],
})
export class DeleteLearningDialogComponent {
  public errorHelper = new ErrorHelper();
  public utilsHelper = new UtilsHelper();

  public loading: boolean;
  public error: string = null;
  private learningId: number;

  constructor(
    private learningsService: LearningsService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DeleteLearningDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public params: { action: string; data: LearningModel }
  ) {
    this.learningId = params.data.id;
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.loading = true;
    this.error = null;

    this.learningsService.delete(this.learningId).subscribe(
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
