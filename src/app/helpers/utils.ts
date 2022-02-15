import { Injectable } from '@angular/core';
import { FiltersModel } from '@app/models';

@Injectable()
export class UtilsHelper {
  regex = {
    name: '^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\\s]*',
    email: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$',
  };

  queryParams(params: FiltersModel) {
    return Object.keys(params)
      .map((key) => {
        return key + '=' + params[key as keyof FiltersModel];
      })
      .join('&');
  }

  removeEmptyStrings(data: FiltersModel) {
    return Object.keys(data).reduce((acc, prop) => {
      // check if it's not empty or null ot undefined
      if (
        data[prop as keyof FiltersModel] !== '' &&
        data[prop as keyof FiltersModel] !== undefined &&
        data[prop as keyof FiltersModel] !== null
      ) {
        return Object.assign(acc, { [prop]: data[prop as keyof FiltersModel] });
      }

      return acc;
    }, {});
  }

  async wait(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }
}
