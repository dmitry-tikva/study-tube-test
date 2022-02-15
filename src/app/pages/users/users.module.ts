import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersRoutes } from './users.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpersModule } from '@helpers/helpers.module';

import { LoaderModule } from '@components/loader/loader.module';
import { PaginationModule } from '@components/pagination/pagination.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { NgxFileDropModule } from 'ngx-file-drop';
import { ImageCropperModule } from 'ngx-image-cropper';

import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { ShowAssignmentsDialogComponent } from './show-assignments-dialog/show-assignments-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HelpersModule,
    PaginationModule,
    RouterModule.forChild(UsersRoutes),

    NgxFileDropModule,
    ImageCropperModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    MatListModule,
    MatDividerModule,

    LoaderModule,
  ],
  declarations: [
    UsersListComponent,
    CreateUserDialogComponent,
    DeleteUserDialogComponent,
    ShowAssignmentsDialogComponent,
  ],
})
export class UsersModule {}
