import {useState} from "react";

interface Todo {
  id: number;
  value: string;
  isCompleted: boolean;
  isDeleted: boolean;
}

const App = () => {
  const [text, setText] = useState("");
  const [todoItem, setTodoItem] = useState<Todo[]>([]);

  // 추가 클릭시 텍스트를 todoItem text로 추가해야함.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | SubmitEvent) => {
    e.preventDefault();
    setTodoItem([...todoItem, {
      id: todoItem.length + 1,
      value: text,
      isCompleted: false,
      isDeleted: false,
    },]);
  }

  const handleDelete = (item: Todo) => {
    console.log(item.id, "삭제")
  }

  return (
    <div>
      <h1>todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <button>추가</button>
      </form>
      <div>
        <h2>TodoList Item</h2>
        {todoItem.map(item => (
          <div key={item.id} className="flex items-center gap-2">
            <input type="checkbox"/>
            <p>{item.value}</p>
            <button onClick={() => handleDelete(item)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;