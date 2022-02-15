import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ShowAssignmentsDialogComponent } from './show-assignments-dialog.component';
import { TEST_MOCK_DATA } from '@assets/mock/test-mock-data';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

describe('ShowAssignmentsDialogComponent', () => {
  let component: ShowAssignmentsDialogComponent;
  let fixture: ComponentFixture<ShowAssignmentsDialogComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAssignmentsDialogComponent],
      imports: [MatDialogModule, MatListModule, MatButtonModule],
      providers: [
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

    fixture = TestBed.createComponent(ShowAssignmentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
