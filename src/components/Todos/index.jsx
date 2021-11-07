import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/features/todos";
import Todo from "./Todo";
import Button from "../ui/Button";
import Input from "../ui/Input";
import styles from "./todo.module.css";

function Todos() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const [text, setText] = useState("");
  const same = todo.find((item) => text === item.text);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text && same?.text !== text) {
      dispatch(addTodo(text));
    }
    setText("");
  };

  return (
    <div className={styles.main}>
      <h3>Список Дел</h3>
      <form className={styles.form}>
        <Input value={text} type="main-inp" onChange={handleChangeText} />
        <Button type="add" onClick={handleAddTodo}>
          Добавить
        </Button>
      </form>
      <div className={styles.content}>
        {todo?.map((item, index) => {
          return <Todo key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default Todos;
