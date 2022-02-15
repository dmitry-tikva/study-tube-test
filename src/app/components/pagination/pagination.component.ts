import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginationOptionsModel } from '@models/index';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['./pagination.styles.scss'],
})
export class PaginationComponent implements OnChanges {
  @Output() pageChange = new EventEmitter();
  @Input() options: PaginationOptionsModel;
  @Input() showFirstLastButtons: boolean = true;

  pageSizeOptions = [10, 25, 50, 100];

  /**
   * On Filters Changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['customFilters'] && changes['customFilters'].currentValue) {
      this.options = changes['customFilters'].currentValue;
    }
  }

  /**
   * handle change paginator
   * @param event paginator event
   */
  handlePageEvent(event: PageEvent) {
    this.pageChange.emit({
      limit: event.pageSize,
      offset: event.pageIndex + 1,
    });
  }
}
