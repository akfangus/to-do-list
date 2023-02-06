import styles from "./Form.module.css";

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className={styles.forms}>
      <div className={styles.content}>
        <label>제목 </label>
        <input
          onChange={props.onChangeTitle}
          value={props.toDo.title || ""}
          type="text"
          placeholder="Write your to do..."
        />
      </div>
      <div className={styles.content}>
        <label>내용 </label>
        <input
          onChange={props.onChangeBody}
          value={props.toDo.body || ""}
          type="text"
          size={80}
          placeholder="Write your to do..."
        />
      </div>
      <div className={styles.content}>
        <button className={styles.btnSubmit}>Add</button>
      </div>
    </form>
  );
}

export default Form;
