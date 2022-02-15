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
import { LearningsListComponent } from './learnings-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TEST_MOCK_DATA } from '@assets/mock/test-mock-data';
import { of } from 'rxjs';
import { LearningsService } from '@services/learnings/learnings.service';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

describe('LearningsListComponent', () => {
  let component: LearningsListComponent;
  let fixture: ComponentFixture<LearningsListComponent>;

  let learningsElements: NodeList;

  beforeEach(fakeAsync(() => {
    // Create a fake UsersService
    const learningsService = jasmine.createSpyObj('LearningsService', [
      'getAll',
    ]);

    // Make the spy return a synchronous Observable with the test data
    learningsService.getAll.and.returnValue(
      of({
        data: TEST_MOCK_DATA.allLearnings,
        totRecords: TEST_MOCK_DATA.allLearnings.length,
      })
    );

    TestBed.configureTestingModule({
      declarations: [LearningsListComponent],
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
        { provide: LearningsService, useValue: learningsService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningsListComponent);
    component = fixture.componentInstance;
  });

  it('Should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'Learnings list'
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

    learningsElements = fixture.nativeElement.querySelectorAll('.item-card');

    expect(learningsElements.length).toBe(TEST_MOCK_DATA.allLearnings.length);
    expect(component.learnings.length).toBe(TEST_MOCK_DATA.allLearnings.length);
  }));

  it('should show item title', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    const firstItemTitle = fixture.nativeElement.querySelectorAll(
      '.item-card mat-card-title'
    )[0].textContent;
    const firstMockItemTitle = `${TEST_MOCK_DATA.allLearnings[0].name}`;

    expect(firstItemTitle).toEqual(firstMockItemTitle);
  }));

  it('Should show delete button', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelectorAll('.item-card .delete-learning')[0]
    ).toBeDefined();
  }));

  it('Should show archive button', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    expect(
      fixture.nativeElement
        .querySelectorAll('.item-card')[0]
        .querySelector('.archive-learning')
    ).toBeDefined();
  }));

  it('Should show "set users" button', fakeAsync(() => {
    fixture.detectChanges(); // ngOnInit()

    tick();
    fixture.detectChanges();

    expect(
      fixture.nativeElement
        .querySelectorAll('.item-card')[0]
        .querySelector('.set-users-learning')
    ).toBeDefined();
  }));
});
