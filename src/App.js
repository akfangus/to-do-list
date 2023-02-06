import React, { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [toDo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  const [toDos, setTodos] = useState([]);
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
    console.log(toDo);
    event.preventDefault();
    if (toDo.title === "" || toDo.body === "") {
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

  const changeDone = (event) => {
    setTodos(
      toDos.map((item) => {
        return item.id === Number(event.target.value)
          ? { ...item, isDone: !item.isDone }
          : item;
      })
    );
  };

  const deleteDone = (event) => {
    // console.log(typeof event.target.value);
    const newtoDos = toDos.filter(
      (item) => item.id !== Number(event.target.value)
    );
    setTodos(newtoDos);
  };

  return (
    <div className={styles.body}>
      {/*  Title */}
      <div className={styles.title}>
        <h1>My toDo List ({toDos.length})</h1>
      </div>

      {/* Input Form*/}
      <Form
        handleSubmit={onSubmit}
        onChangeTitle={onChangeTitle}
        onChangeBody={onChangeBody}
        toDo={toDo}
      />

      {/* card */}
      <div name="working">
        <h1>Working...!</h1>
        <section className={styles.cardlist}>
          {toDos
            .filter((obj) => !obj.isDone)
            .map((item, index) => {
              let date = new Date();
              return (
                <List
                  key={index}
                  deleteDone={deleteDone}
                  changeDone={changeDone}
                  item={item}
                  date={date}
                />
              );
            })}
        </section>
      </div>

      <div name="done">
        <h1>Done!</h1>
        <section className={styles.cardlist}>
          {toDos
            .filter((obj) => obj.isDone)
            .map((item, index) => {
              let date = new Date();
              return (
                <List
                  key={index}
                  deleteDone={deleteDone}
                  changeDone={changeDone}
                  item={item}
                  date={date}
                />
              );
            })}
        </section>
      </div>
    </div>
  );
}

export default App;
