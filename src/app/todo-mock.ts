export interface ITodo {
  id: number;
  value: string;
  done: boolean;
}

export const ToDoMocks: ITodo[] = [
  { id: 1, value: 'Wyprowadzić psa', done: false },
  { id: 2, value: 'Pogłaskać kota', done: false },
  { id: 3, value: 'Pozbierać jajka', done: false },
  { id: 4, value: 'Posprzątać pokój', done: false },
  { id: 5, value: 'Wlać żonie', done: false },
  { id: 6, value: 'Pozmywać naczynia', done: false }
];
