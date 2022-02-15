import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  entryComponents: [PaginationComponent],
})
export class PaginationModule {}
