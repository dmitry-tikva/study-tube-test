import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageHelper } from '@helpers/image';
import { UsersService } from '@services/users/users.service';
import { ErrorHelper } from '@helpers/errors';
import { UtilsHelper } from '@helpers/utils';
import { UserModel } from '@app/models';
import * as moment from 'moment';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.styles.scss'],
})
export class CreateUserDialogComponent implements OnInit {
  public errorHelper = new ErrorHelper();
  public utilsHelper = new UtilsHelper();

  public formObj: FormGroup;
  public loading: boolean;
  public error: string = null;

  public file: NgxFileDropEntry;
  public imageHelper = new ImageHelper();
  public user: UserModel;
  public imageChangedEvent: any = '';
  public croppedImage: string;

  constructor(
    private usersService: UsersService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public params: { action: string; data: UserModel }
  ) {}

  ngOnInit(): void {
    this.formObj = this.formBuilder.group({
      firstName: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(90),
          Validators.pattern(this.utilsHelper.regex.name),
          Validators.required,
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(90),
          Validators.pattern(this.utilsHelper.regex.name),
          Validators.required,
        ]),
      ],
      image: ['', Validators.compose([Validators.required])],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.utilsHelper.regex.email),
        ]),
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
    rawForm.assignedLearnings = [];
    rawForm.createdAt = moment().toISOString();

    this.usersService.create(rawForm).subscribe(
      (res: UserModel) => {
        this.dialogRef.close(res);
      },
      (error) => {
        this.loading = false;
        this.error = this.errorHelper.displayError(error);
      }
    );
  }

  /**
   * Once user select new photo
   * @param files file after drop in input:file
   */
  dropped(files: NgxFileDropEntry[]) {
    this.file = files[0];

    // Is it a file?
    if (files[0].fileEntry.isFile) {
      const fileEntry = files[0].fileEntry as FileSystemFileEntry;

      fileEntry.file((file: File) => {
        // Emulate like it's input:file event
        this.imageChangedEvent = { target: { files: [file] } };
      });
    }
  }

  /**
   * Event once image was cropped
   * @param event image changed event
   */
  async imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = await this.imageHelper.resizeBase64Image(event.base64);
    this.formObj.get('image').setValue(this.croppedImage);
    this.formObj.updateValueAndValidity();
  }

  /**
   * Remove selected image
   */
  clearSelectedImage() {
    this.croppedImage = null;
    this.imageChangedEvent = null;
    this.formObj.get('image').setValue(this.croppedImage);
    this.formObj.updateValueAndValidity();
  }
}
