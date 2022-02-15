import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CreateLearningDialogComponent } from './create-learning-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoaderModule } from '@app/components/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';

describe('CreateLearningDialogComponent', () => {
  let component: CreateLearningDialogComponent;
  let fixture: ComponentFixture<CreateLearningDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLearningDialogComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
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

    fixture = TestBed.createComponent(CreateLearningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
