import { useState } from "react";
import type { Todo } from "../types/Tab";
import styles from "./Todo.module.css";

interface TodoListProps {
  value: string;
}

const TodoList = ({ value }: TodoListProps) => {
  const [todoName, setTodoName] = useState(""); // 「今入力欄に入っている文字」の管理
  const [todos, setTodos] = useState<Todo[]>([]); // 追加されたTodoの一覧の管理
  const [editingId, setEditingId] = useState<string | null>(null); //「今どのTodoを編集しているか」idで管理する
  const [editName, setEditName] = useState(""); // 「編集欄に入力されている文字」の管理

  const handleAddTodo = () => {
    if (todoName.trim() === "") return;

    // 入力欄に記入した新しいTodoのオブジェクトを記述する
    const newTodo = {
      id: crypto.randomUUID(),
      name: todoName,
      isDone: false,
    };

    // todosは配列で管理しているので[]で囲む
    setTodos([...todos, newTodo]);
    setTodoName("");
  };

  const handleDeleteTodo = (id: string) => {
    if (!confirm("本当に削除しますか？")) return;
    const newTodos = todos.filter((todo) => todo.id !== id);
    // todo.idは一つ一つ展開した時のid
    // idはクリックしたときに渡ってくるid
    // filter関数：条件に合う（true）ものだけを残して、新しい配列を作る
    setTodos(newTodos);
  };

  const handleToggleTodo = (id: string) => {
    // 新しい配列を作成する
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    // 必ず{...todo, }をつけること。一つひとつのtodoは{id, name, isDone}を持ったオブジェクトだから。
    setTodos(newTodos);
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingId(todo.id);
    setEditName(todo.name);
  };

  const handleEditSave = () => {
    const newTodos = todos.map((todo) =>
      todo.id === editingId ? { ...todo, name: editName } : todo,
    );
    setTodos(newTodos);
    setEditingId(null);
    setEditName("");
  };

  const filteredTodos = todos.filter((todo) => (
    todo.name.includes(value) // trueを残す
  ))

  return (
    <>
      <div className={styles.inputArea}>
        <input
          className={styles.input}
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="Todoを入力してください"
        />

        <button className={styles.addButton} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div>
        <ul className={styles.todoList}>
          {filteredTodos.map((todo) => (
            <li className={styles.todoItem} key={todo.id}>
              <div className={styles.todoContent}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={() => handleToggleTodo(todo.id)}
                />

                {editingId === todo.id ?
                  <>
                    <input
                      className={styles.input}
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                    <button
                      className={styles.saveButton}
                      onClick={handleEditSave}
                    >
                      保存
                    </button>
                  </>
                : <>
                    <span
                      className={`${styles.todoName} ${todo.isDone ? styles.done : ""}`}
                    >
                      {todo.name}
                    </span>

                    <button
                      className={styles.editButton}
                      onClick={() => handleEditTodo(todo)}
                    >
                      編集
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className={styles.deleteButton}
                    >
                      削除
                    </button>
                  </>
                }
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
