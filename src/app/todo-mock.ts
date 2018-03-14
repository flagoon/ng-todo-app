export interface ITodo {
  value: string;
  done: boolean;
}

export const ToDoMocks: ITodo[] = [
  { value: 'Wyprowadzić psa', done: false },
  { value: 'Pogłaskać kota', done: false },
  { value: 'Pozbierać jajka', done: false },
  { value: 'Posprzątać pokój', done: false },
  { value: 'Wlać żonie', done: false },
  { value: 'Pozmywać naczynia', done: false }
];
