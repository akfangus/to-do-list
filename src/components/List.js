import styles from "./List.module.css";

function List(props) {
  // console.log(props);
  return (
    <div key={props.item.id} className={styles.card}>
      <header>
        <h3>{props.date.toLocaleDateString()}</h3>
        <h2>{props.item.title}</h2>
      </header>
      <main>
        <h3>{props.item.body}</h3>
        <div className={styles.buttonss}>
          <button onClick={() => props.deleteDone(props.item.id)}>
            delete
          </button>
          <button onClick={() => props.changeDone(props.item.id)}>
            {props.item.isDone ? "cancel" : "confirm"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default List;
