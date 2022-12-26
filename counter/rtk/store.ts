import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';
// import {todoAPISlice} from './TodoList/api/TodoAPISlice';
// import todoSlice from './TodoList/redux/TodoSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // todoList: todoSlice.reducer,
    // [todoAPISlice.reducerPath]: todoAPISlice.reducer,
  },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(todoAPISlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
