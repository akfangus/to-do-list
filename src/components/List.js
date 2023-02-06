import styles from "./List.module.css";

function List(props) {
  return (
    <div key={props.item.id} className={styles.card}>
      <header>
        <h3>{props.date.toLocaleDateString()}</h3>
        <h2>{props.item.title}</h2>
      </header>
      <main>
        <h3>{props.item.body}</h3>
        <button value={props.item.id} onClick={props.deleteDone}>
          delete
        </button>
        <button value={props.item.id} onClick={props.changeDone}>
          confirm
        </button>
      </main>
    </div>
  );
}

export default List;
