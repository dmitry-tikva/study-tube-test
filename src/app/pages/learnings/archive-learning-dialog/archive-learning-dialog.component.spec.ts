import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ArchiveLearningDialogComponent } from './archive-learning-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TEST_MOCK_DATA } from '@assets/mock/test-mock-data';
import { LoaderModule } from '@app/components/loader/loader.module';
import { MatButtonModule } from '@angular/material/button';

describe('ArchiveLearningDialogComponent', () => {
  let component: ArchiveLearningDialogComponent;
  let fixture: ComponentFixture<ArchiveLearningDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveLearningDialogComponent],
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
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            data: TEST_MOCK_DATA.learning,
          },
        },
        {
          provide: MatDialogRef,
          useValue: {
            data: TEST_MOCK_DATA.learning,
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchiveLearningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
