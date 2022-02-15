import {LearningModel} from '@models/index';

export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  assignedLearnings?: LearningModel[];
  id: number;
  createdAt?: string;
  count?: number;
}
