import {UtilsHelper} from '@helpers/utils';
import { ValidatorsModel } from '@models/index';

export class ValidationService {
  private static utilsHelper = new UtilsHelper();

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    const getPattern = (): string => {

      switch (validatorValue.requiredPattern) {

        case ValidationService.utilsHelper.regex.email:
          return 'Email is not valid';

        case ValidationService.utilsHelper.regex.name:
          return 'Name is not valid';

        default:
          return 'Invalid Pattern';
      }
    };

    const config: ValidatorsModel = {
      required: 'Required',
      minlength: (validatorValue) ? 'Min ' + validatorValue.requiredLength + ' characters' : 'too short',
      email: 'Email not valid!',
      pattern: getPattern(),
      min: 'Should be more than 0',
    };

    return config[validatorName as keyof ValidatorsModel];

  }

}
