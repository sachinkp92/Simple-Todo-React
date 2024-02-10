import "./index.css";

function SimpleTodo(props) {
  let { todoList, onTodo } = props;
  let { title, id } = todoList;
  let onDelete = () => {
    onTodo(id);
  };
  return (
    <>
      <li className="list-container">
        <div className="list-wrap">
          <p>{title}</p>
          <button className="delete-btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    </>
  );
}

export default SimpleTodo;
