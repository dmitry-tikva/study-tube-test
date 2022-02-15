import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LearningsRoutes } from './learnings.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpersModule } from '@app/helpers/helpers.module';
import { PaginationModule } from '@app/components/pagination/pagination.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { LoaderModule } from '@app/components/loader/loader.module';

import { LearningsListComponent } from './learnings-list/learnings-list.component';
import { DeleteLearningDialogComponent } from './delete-learning-dialog/delete-learning-dialog.component';
import { CreateLearningDialogComponent } from './create-learning-dialog/create-learning-dialog.component';
import { SetUsersDialogComponent } from './set-users-dialog/set-users-dialog.component';
import { ArchiveLearningDialogComponent } from './archive-learning-dialog/archive-learning-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HelpersModule,
    PaginationModule,
    RouterModule.forChild(LearningsRoutes),

    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,

    LoaderModule,
  ],
  declarations: [
    LearningsListComponent,
    DeleteLearningDialogComponent,
    CreateLearningDialogComponent,
    ArchiveLearningDialogComponent,
    SetUsersDialogComponent,
  ],
})
export class LearningsModule {}
