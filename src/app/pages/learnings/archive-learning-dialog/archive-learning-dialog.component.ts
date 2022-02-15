import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ErrorHelper } from '@helpers/errors';
import { UtilsHelper } from '@helpers/utils';
import { LearningModel } from '@app/models';
import { LearningsService } from '@app/services/learnings/learnings.service';

@Component({
  selector: 'app-archive-learning-dialog',
  templateUrl: './archive-learning-dialog.component.html',
  styleUrls: ['./archive-learning-dialog.styles.scss'],
})

export class ArchiveLearningDialogComponent {
  public errorHelper = new ErrorHelper();
  public utilsHelper = new UtilsHelper();

  public loading: boolean;
  public error: string = null;
  public learning: LearningModel;

  constructor(
    private learningsService: LearningsService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ArchiveLearningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public params: { data: LearningModel }
  ) {
    this.learning = params.data;
  }

  close() {
    this.dialogRef.close();
  }

  update() {
    this.loading = true;
    this.error = null;

    // Toggle
    const rawData = JSON.parse(JSON.stringify(this.learning));
    rawData.active = !rawData.active;

    this.learningsService.update(rawData).subscribe(
      () => {
        this.dialogRef.close(rawData);
      },
      (error: any) => {
        this.loading = false;
        this.error = this.errorHelper.displayError(error);
      }
    );
  }
}
