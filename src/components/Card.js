import List from "./List";
import styles from "./Card.module.css";

function Card({ toDos, title, deleteDone, changeDone }) {
  return (
    <>
      <h1>{title}</h1>
      <section className={styles.cardlist}>
        {toDos.map((item, index) => {
          console.log(item);
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
    </>
  );
}

export default Card;
