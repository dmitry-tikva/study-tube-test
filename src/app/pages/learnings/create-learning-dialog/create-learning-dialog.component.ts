import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorHelper } from '@helpers/errors';
import { UtilsHelper } from '@helpers/utils';
import { LearningModel } from '@app/models';
import { LearningsService } from '@app/services/learnings/learnings.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-learning-dialog',
  templateUrl: './create-learning-dialog.component.html',
  styleUrls: ['./create-learning-dialog.styles.scss'],
})
export class CreateLearningDialogComponent implements OnInit {
  public errorHelper = new ErrorHelper();
  public utilsHelper = new UtilsHelper();

  public formObj: FormGroup;
  public loading: boolean;
  public error: string = null;

  public learning: LearningModel;

  constructor(
    private learningsService: LearningsService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateLearningDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public params: { action: string; data: LearningModel }
  ) {}

  ngOnInit(): void {
    this.formObj = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(90),
          Validators.pattern(this.utilsHelper.regex.name),
          Validators.required,
        ]),
      ],
      description: [
        '',
        Validators.compose([Validators.minLength(50), Validators.required]),
      ],
    });
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.loading = true;
    this.error = null;

    const rawForm = this.formObj.getRawValue();

    // Add default learnings (this is for fake API)
    rawForm.assignedUsers = [];
    rawForm.active = true;
    rawForm.createdAt = moment().toISOString();

    this.learningsService.create(rawForm).subscribe(
      (res: LearningModel) => {
        this.dialogRef.close(res);
      },
      (error: any) => {
        this.loading = false;
        this.error = this.errorHelper.displayError(error);
      }
    );
  }
}
