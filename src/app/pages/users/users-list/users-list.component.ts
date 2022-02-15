import { Component, OnInit } from '@angular/core';
import { FiltersModel, PaginationOptionsModel, UserModel } from '@models/index';
import { FiltersService } from '@app/services/filters/filters.service';
import { UsersService } from '@app/services/users/users.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { ShowAssignmentsDialogComponent } from '../show-assignments-dialog/show-assignments-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.styles.scss'],
})

export class UsersListComponent implements OnInit {
  public loading: boolean;
  public users: Array<UserModel> = [];
  public customFilters: FiltersModel = {};
  public paginationOptions: PaginationOptionsModel = {};

  constructor(
    private usersService: UsersService,
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
    this.customFilters = await this.filterService.usersFilters();

    this.getAllWithPagination();
  }

  getAllWithPagination() {
    // Clear users
    this.users = [];

    // Show loader
    this.loading = true;

    // Get with new filters
    this.usersService.getAll(this.customFilters).subscribe((res: {data: UserModel[], totRecords: number}) => {
      // Hide loader
      this.loading = false;

      // Set pagination options
      this.paginationOptions.limit = this.customFilters.limit;
      this.paginationOptions.offset = this.customFilters.offset;
      this.paginationOptions.totRecords = res.totRecords;

      this.users = res.data;
    });
  }

  addNewUser() {
    this.dialog
      .open(CreateUserDialogComponent, {
        width: '480px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((result: UserModel) => {
        if (result) {
          // Move user to first page and clear search
          // This is not necessary, just to show create item to user
          this.customFilters.search = '';
          this.customFilters.offset = 1;

          // Ask get all users
          this.getAllWithPagination();

          // Show success message
          this.snackBar.open('New user has been saved!', null, {
            duration: 3000,
          });
        }
      });
  }

  deleteUser(u: UserModel) {
    this.dialog
      .open(DeleteUserDialogComponent, {
        data: { data: u },
        width: '480px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((result: boolean) => {
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

  showAssignments(u: UserModel) {
    this.dialog.open(ShowAssignmentsDialogComponent, {
      data: { data: u },
      width: '480px',
      height: 'auto',
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
