import { HttpClient, HttpHandler } from '@angular/common/http';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TEST_MOCK_DATA } from '@assets/mock/test-mock-data';
import { DeleteUserDialogComponent } from './delete-user-dialog.component';

describe('DeleteUserDialogComponent', () => {
  let component: DeleteUserDialogComponent;
  let fixture: ComponentFixture<DeleteUserDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserDialogComponent],
      imports: [MatDialogModule, MatButtonModule],
      providers: [
        HttpClient,
        HttpHandler,
        FormBuilder,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            data: TEST_MOCK_DATA.user,
          },
        },
        {
          provide: MatDialogRef,
          useValue: {
            data: TEST_MOCK_DATA.user,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
