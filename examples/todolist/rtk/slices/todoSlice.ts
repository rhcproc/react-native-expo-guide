import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoState = Todo[];

const initialState: TodoState = [
    { id: 1, text: '타입스크립트 배우기', completed: true },
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', completed: true },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
        console.log('addTodo: ', state, action)
        const nextId = Math.max(...state.map(todo => todo.id)) + 1;
        state.push({
            id: nextId,
            text: action.payload,
            completed: false,
        });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
            todo.completed = !todo.completed;
        }
    },
    },
});

export const {addTodo, toggleTodo} = todosSlice.actions;

export default todosSlice;