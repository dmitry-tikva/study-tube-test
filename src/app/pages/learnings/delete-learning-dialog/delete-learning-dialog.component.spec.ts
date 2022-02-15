import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DeleteLearningDialogComponent } from './delete-learning-dialog.component';
import { TEST_MOCK_DATA } from '@assets/mock/test-mock-data';
import { MatButtonModule } from '@angular/material/button';

describe('DeleteLearningDialogComponent', () => {
  let component: DeleteLearningDialogComponent;
  let fixture: ComponentFixture<DeleteLearningDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLearningDialogComponent],
      imports: [MatDialogModule, MatButtonModule],
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
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteLearningDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
