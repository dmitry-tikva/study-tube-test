import { Injectable } from '@angular/core';
import { FiltersModel } from '@models/index';

@Injectable()
export class FiltersService {
  public defaultFilters(): FiltersModel {
    return {
      offset: 1,
      limit: 50,
      search: '',
    };
  }

  public usersFilters(): FiltersModel {
    return {
      offset: 1,
      limit: 20,
      search: '',
    };
  }

  public learningsFilters(): FiltersModel {
    return {
      offset: 1,
      limit: 10,
      search: '',
    };
  }
}
