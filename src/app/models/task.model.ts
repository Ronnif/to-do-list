export interface Task {
  _id?: string;      // MongoDB usa _id
  title: string;
  description?: string;
  completed: boolean;
}