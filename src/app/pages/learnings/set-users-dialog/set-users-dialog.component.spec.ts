import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  fakeAsync,
  ComponentFixture,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SetUsersDialogComponent } from './set-users-dialog.component';
import { TEST_MOCK_DATA } from '@assets/mock/test-mock-data';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UsersService } from '@app/services/users/users.service';
import { UserModel } from '@app/models';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

describe('SetUsersDialogComponent', () => {
  let component: SetUsersDialogComponent;
  let fixture: ComponentFixture<SetUsersDialogComponent>;

  let userElements: NodeList;

  beforeEach(fakeAsync(() => {
    // Create a fake UsersService
    const usersService = jasmine.createSpyObj('UsersService', ['getAll']);

    // Make the spy return a synchronous Observable with the test data
    usersService.getAll.and.returnValue(
      of({
        data: TEST_MOCK_DATA.allUsers,
        totRecords: TEST_MOCK_DATA.allUsers.length,
      })
    );

    TestBed.configureTestingModule({
      declarations: [SetUsersDialogComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        MatSelectModule,
        HttpClientTestingModule,
        MatButtonModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        FormBuilder,
        HttpTestingController,
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
        { provide: UsersService, useValue: usersService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUsersDialogComponent);
    component = fixture.componentInstance;
  });

  it('Should compile', () => {
    expect(component).toBeTruthy();
  });

  it('Should load users list', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    userElements = fixture.nativeElement.querySelectorAll('.item-card');

    expect(component.allUsers.length).toBe(TEST_MOCK_DATA.allUsers.length);
  }));
});
