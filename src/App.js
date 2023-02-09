import React, { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
// import List from "./components/List";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [toDo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  const [toDos, setTodos] = useState([]);

  const toDoNotDone = toDos.filter((v) => !v.isDone);
  const toDoisDone = toDos.filter((v) => v.isDone);

  console.log(toDoNotDone);

  const onChangeTitle = (event) => {
    // console.log(event.target.value);
    setTodo({
      ...toDo,
      title: event.target.value,
    });
  };
  // console.log(toDo);
  const onChangeBody = (event) => {
    setTodo({
      ...toDo,
      body: event.target.value,
    });
  };

  // console.log(toDo);
  const onSubmit = (event) => {
    // console.log(toDo);
    event.preventDefault();
    if (!toDo.title || !toDo.body) {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo({
      ...toDo,
      id: toDo.id + 1,
      title: "",
      body: "",
      isDone: false,
    });
  };

  const changeDone = (id) => {
    setTodos(
      toDos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteDone = (id) => {
    const newtoDos = toDos.filter((item) => item.id !== id);
    console.log(newtoDos);
    setTodos(newtoDos);
  };

  return (
    <div className={styles.body}>
      {/*  Title */}
      <Header />
      {/* Input Form*/}
      <Form
        handleSubmit={onSubmit}
        onChangeTitle={onChangeTitle}
        onChangeBody={onChangeBody}
        toDo={toDo}
      />
      <Card
        toDos={toDoNotDone}
        title="Working,.,,!"
        deleteDone={deleteDone}
        changeDone={changeDone}
      />
      <Card
        toDos={toDoisDone}
        title="Done....!!!"
        deleteDone={deleteDone}
        changeDone={changeDone}
      />
    </div>
  );
}

export default App;
