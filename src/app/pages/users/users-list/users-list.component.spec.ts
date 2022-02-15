import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  fakeAsync,
  ComponentFixture,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderModule } from '@app/components/loader/loader.module';
import { FiltersService } from '@app/services/filters/filters.service';
import { UsersListComponent } from './users-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from '@app/services/users/users.service';
import { TEST_MOCK_DATA } from '@assets/mock/test-mock-data';
import { of } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

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
      declarations: [UsersListComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        LoaderModule,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        FiltersService,
        MatSnackBar,
        Overlay,
        MatDialog,
        { provide: UsersService, useValue: usersService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
  });

  it('Should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Users list'
    );
  });

  it('should show input search', () => {
    expect(
      fixture.nativeElement.querySelector('mat-form-field input[type="search"]')
    ).toBeDefined();
  });

  it('Should load users list', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()
    expect(component.loading).toBe(true);

    tick();
    fixture.detectChanges();

    userElements = fixture.nativeElement.querySelectorAll('.item-card');

    expect(userElements.length).toBe(TEST_MOCK_DATA.allUsers.length);
    expect(component.users.length).toBe(TEST_MOCK_DATA.allUsers.length);
  }));

  it('should show item title', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    const firstItemTitle = fixture.nativeElement.querySelectorAll(
      '.item-card mat-card-title'
    )[0].textContent;
    const firstMockItemTitle = `${TEST_MOCK_DATA.allUsers[0].firstName} ${TEST_MOCK_DATA.allUsers[0].lastName}`;

    expect(firstItemTitle).toEqual(firstMockItemTitle);
  }));

  it('Should show delete button', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelectorAll('.item-card .delete-user')[0]
    ).toBeDefined();
  }));

  it('Should show assignments button', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    expect(
      fixture.nativeElement
        .querySelectorAll('.item-card')[0]
        .querySelector('.show-assignments')
    ).toBeDefined();
  }));

  it('Should hide assignments button', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    expect(
      fixture.nativeElement
        .querySelectorAll('.item-card')[1]
        .querySelector('.show-assignments')
    ).toBeDefined();
  }));
});
