import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessagesComponent } from './validation-form';
export { UtilsHelper } from './utils';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ControlMessagesComponent],
  providers: [],
  exports: [ControlMessagesComponent],
})
export class HelpersModule {
  static forRoot(): ModuleWithProviders<HelpersModule> {
    return { ngModule: HelpersModule };
  }
}
