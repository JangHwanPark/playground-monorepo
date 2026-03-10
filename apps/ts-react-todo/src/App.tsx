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
  console.log(todoItem)

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
    console.log(item)
    // item.isDeleted상태를 true로 변경해야함
    setTodoItem(todoItem.map(todo => todo.id !== item.id ? todo : {...todo, isDeleted: true}))
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
        <div>
          <ul className="flex gap-2">
            <li><button>전체</button></li>
            <li><button>완료</button></li>
            <li><button>삭제</button></li>
          </ul>
        </div>
        {todoItem ? todoItem.map(item => (
          <div key={item.id} className="flex items-center gap-2">
            <input type="checkbox"/>
            <p>{item.value}</p>
            <button onClick={() => handleDelete(item)}>삭제</button>
          </div>
        )) : (
          <div>
            <p>데이터가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;