import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FiltersModel,
  LearningModel,
  PaginationOptionsModel,
} from '@app/models';
import { FiltersService } from '@app/services/filters/filters.service';
import { LearningsService } from '@app/services/learnings/learnings.service';
import { ArchiveLearningDialogComponent } from '../archive-learning-dialog/archive-learning-dialog.component';
import { CreateLearningDialogComponent } from '../create-learning-dialog/create-learning-dialog.component';
import { DeleteLearningDialogComponent } from '../delete-learning-dialog/delete-learning-dialog.component';
import { SetUsersDialogComponent } from '../set-users-dialog/set-users-dialog.component';

@Component({
  selector: 'app-learnings-list',
  templateUrl: './learnings-list.component.html',
  styleUrls: ['./learnings-list.styles.scss'],
})
export class LearningsListComponent implements OnInit {
  public loading: boolean;
  public learnings: Array<LearningModel> = [];
  public customFilters: FiltersModel = {};
  public paginationOptions: PaginationOptionsModel = {};

  constructor(
    private learningsService: LearningsService,
    private filterService: FiltersService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    // Get default filters first
    this.getFilters();
  }

  /**
   * Get Filters
   */
  async getFilters() {
    this.customFilters = await this.filterService.learningsFilters();

    this.getAllWithPagination();
  }

  getAllWithPagination() {
    // Clear users
    this.learnings = [];

    // Show loader
    this.loading = true;

    // Get with new filters
    this.learningsService
      .getAll(this.customFilters)
      .subscribe((res: { data: LearningModel[]; totRecords: number }) => {
        // Hide loader
        this.loading = false;

        // Set pagination options
        this.paginationOptions.limit = this.customFilters.limit;
        this.paginationOptions.offset = this.customFilters.offset;
        this.paginationOptions.totRecords = res.totRecords;

        this.learnings = res.data;
      });
  }

  addNewLearning() {
    this.dialog
      .open(CreateLearningDialogComponent, {
        width: '480px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          // Move user to first page and clear search
          // This is not necessary, just to show create item to user
          this.customFilters.search = '';
          this.customFilters.offset = 1;

          // Ask get all users
          this.getAllWithPagination();

          // Show success message
          this.snackBar.open('New learning has been saved!', null, {
            duration: 3000,
          });
        }
      });
  }

  deleteLearning(l: LearningModel) {
    this.dialog
      .open(DeleteLearningDialogComponent, {
        data: { data: l },
        width: '480px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          // Ask get all users
          this.getAllWithPagination();

          // Show success message
          this.snackBar.open('User has been deleted!', null, {
            duration: 3000,
          });
        }
      });
  }

  toggleArchive(l: LearningModel, index: number) {
    this.dialog
      .open(ArchiveLearningDialogComponent, {
        data: { data: l },
        width: '480px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          // Don't need to ask API to get all learning again
          // We can set it in our local list (by index) if API says that it was updated successfully
          console.log(result);
          this.learnings[index] = result;

          // Show success message
          this.snackBar.open('Learning has been updated!', null, {
            duration: 3000,
          });
        }
      });
  }

  setUsers(l: LearningModel, index: number) {
    this.dialog
      .open(SetUsersDialogComponent, {
        data: { data: l },
        width: '480px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          // Don't need to ask API to get all learning again
          // We can set it in our local list (by index) if API says that it was updated successfully
          this.learnings[index] = result;

          // Show success message
          this.snackBar.open('Learning has been updated!', null, {
            duration: 3000,
          });
        }
      });
  }

  /**
   * Change Search
   */
  changeSearch(search: string) {
    this.customFilters.offset = 1;
    this.customFilters.search = search;
    this.getAllWithPagination();
  }

  /**
   * handle blur event
   * @param search text from input search
   */
  searchBlur(search: string) {
    if (this.customFilters.search !== search && search === '') {
      this.customFilters.offset = 1;
      this.customFilters.search = search;
      this.getAllWithPagination();
    }
  }

  handlePageEvent(e: { limit: number; offset: number }) {
    // Show loader
    this.loading = true;

    this.customFilters.limit = e.limit;
    this.customFilters.offset = e.offset;

    this.getAllWithPagination();
  }
}
