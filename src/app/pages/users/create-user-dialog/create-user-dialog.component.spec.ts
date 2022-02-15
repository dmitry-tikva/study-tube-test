import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { LoaderModule } from '@app/components/loader/loader.module';
import { HelpersModule } from '@app/helpers/helpers.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CreateUserDialogComponent } from './create-user-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

describe('CreateUserDialogComponent', () => {
  let component: CreateUserDialogComponent;
  let fixture: ComponentFixture<CreateUserDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserDialogComponent],
      imports: [
        MatDialogModule,
        HelpersModule,
        MatButtonModule,
        NgxFileDropModule,
        ImageCropperModule,
        ReactiveFormsModule,
        FormsModule,
        LoaderModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        FormBuilder,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.formObj.valid).toBeFalsy();
  });

  it('first name field validity (empty)', () => {
    let firstName = component.formObj.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
  });

  it('first name field validity (required)', () => {
    let errors: any = {};
    let firstName = component.formObj.controls['firstName'];
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('first name field validity (min)', () => {
    let errors: any = {};
    let firstName = component.formObj.controls['firstName'];
    firstName.setValue('t');
    errors = firstName.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('Email field validity (empty)', () => {
    let email = component.formObj.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('Email field validity (required)', () => {
    let errors: any = {};
    let email = component.formObj.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Email field validity (pattern)', () => {
    let errors: any = {};
    let email = component.formObj.controls['email'];
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('Submitting a form emits a user', () => {
    expect(component.formObj.valid).toBeFalsy();
    component.formObj.controls['firstName'].setValue('Carma');
    component.formObj.controls['lastName'].setValue('Gerrish');
    component.formObj.controls['image'].setValue('data:image/some_test_base64_image');
    component.formObj.controls['email'].setValue('test@test.com');
    expect(component.formObj.valid).toBeTruthy();

    // Here we can compare what user API return
    // But our test API return null on creating user for now...
  });
});
