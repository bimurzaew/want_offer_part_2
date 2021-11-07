import React, { useState } from "react";
import styles from "./todo.module.css";
import { deleteTodo, makeNote, saveTodo } from "../../redux/features/todos";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import Input from "../ui/Input";

function Todo({ item, index }) {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const [text, setText] = useState(item.text);

  const handleChangeTodo = () => {
    setChange(true);
  };
  const handleRemove = (index) => {
    dispatch(deleteTodo(index));
  };
  const handleMakeNote = (index) => {
    dispatch(makeNote(index));
  };
  const handleSave = (index) => {
    dispatch(saveTodo(index, text));
    setChange(false);
  };

  return (
    <div
      className={`${styles.todos} ${item.completed ? styles.select : ""}`}
      key={index}
    >
      <div className="favorite">
        <Button
          type={`${item.completed ? "complete" : "select"}`}
          onClick={() => handleMakeNote(index)}
        >
          ★
        </Button>
      </div>
      {change ? (
        <Input
          type="inp"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div className={styles.text}>
          <div>{item.text}</div>
          <span>Добавлено {item.date}</span>
        </div>
      )}
      {change ? (
        <Button type="change" onClick={() => handleSave(index)}>
          Сохранить
        </Button>
      ) : (
        <Button type="change" onClick={handleChangeTodo}>
          Изменить
        </Button>
      )}
      <Button type="delete" onClick={() => handleRemove(index)}>
        x
      </Button>
    </div>
  );
}

export default Todo;
