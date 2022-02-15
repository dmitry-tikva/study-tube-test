import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationService } from '@services/validations/validations.service';

@Component({
  selector: 'app-control-messages',
  template: ` <div *ngIf="getErrorMessage() !== null">
    {{ getErrorMessage() }}
  </div>`,
})
export class ControlMessagesComponent {
  // showMessage: string;
  @Input() control: AbstractControl;

  getErrorMessage() {
    if (this.control && this.control.errors && this.control.touched) {
      for (const propertyName in this.control.errors) {
        if (
          (this.control.errors.hasOwnProperty(propertyName) ||
            propertyName === 'pattern') &&
          this.control.touched
        ) {
          return ValidationService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }
    return null;
  }
}
