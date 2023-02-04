import React, { useState } from "react";
import styles from "./App.module.css";

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
    event.preventDefault();
    if (toDo === "") {
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
    console.log(typeof event.target.value);
    const newtoDos = toDos.filter(
      (item) => item.id !== Number(event.target.value)
    );
    setTodos(newtoDos);
  };

  console.log(toDos);
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>My toDo List ({toDos.length})</h1>
      </div>
      <form onSubmit={onSubmit} className={styles.forms}>
        <div className={styles.content}>
          <label>제목 </label>
          <input
            onChange={onChangeTitle}
            value={toDo.title || ""}
            type="text"
            placeholder="Write your to do..."
          />
        </div>
        <div className={styles.content}>
          <label>내용 </label>
          <input
            onChange={onChangeBody}
            value={toDo.body || ""}
            type="text"
            size={50}
            placeholder="Write your to do..."
          />
        </div>
        <div className={styles.content}>
          <button>Add To Do</button>
        </div>
      </form>
      {/* card */}
      <div name="working">
        <h1>Working...!</h1>

        <section className={styles.cardlist}>
          {toDos
            .filter((obj) => !obj.isDone)
            .map((item, index) => {
              let date = new Date();
              return (
                <div key={item.id} className={styles.card}>
                  <header>
                    <h3>{date.toLocaleDateString()}</h3>
                    <h2>{item.title}</h2>
                  </header>
                  <main>
                    <h3>{item.body}</h3>
                    <button value={item.id} onClick={deleteDone}>
                      delete
                    </button>
                    <button value={item.id} onClick={changeDone}>
                      confirm
                    </button>
                  </main>
                </div>
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
                <div key={item.id} className={styles.card}>
                  <header>
                    <h3>{date.toLocaleDateString()}</h3>
                    <h2>{item.title}</h2>
                  </header>
                  <main>
                    <h3>{item.body}</h3>
                    <button value={item.id} onClick={deleteDone}>
                      delete
                    </button>
                    <button value={item.id} onClick={changeDone}>
                      cancel
                    </button>
                  </main>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
}

export default App;
