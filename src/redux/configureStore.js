import { createStore } from "redux";
import { todos } from "./features/todos";

export const store = createStore(todos);
