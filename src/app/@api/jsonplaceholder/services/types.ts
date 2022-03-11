export interface Posts {
  userId: number
  id: number;
  title: string;
  body:  string;
}
export interface Albums {
  userId: number
  id: number;
  title: string;
}
export interface Todos{
  userId: number
  id: number;
  title: string;
  completed:  boolean;
}