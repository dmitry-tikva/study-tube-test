import {UserModel} from '@models/index';

export interface LearningModel {
  id: number;
  createdAt?: string;
  name: string;
  description: string;
  active: boolean;
  assignedUsers?: UserModel[];
}
