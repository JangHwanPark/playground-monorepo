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

  const handleComplete = (item: Todo) => {
    setTodoItem(todoItem.map(todo => todo.id !== item.id ? todo : {...todo, isCompleted: !todo.isCompleted}))
  }

  const handleDelete = (item: Todo) => {
    // item.isDeleted상태를 true로 변경해야함
    setTodoItem(todoItem.map(todo => todo.id !== item.id ? todo : {...todo, isDeleted: true}))
  }

  const handleFilter = (filterType: string) => {
    console.log(filterType)
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
            <li><button onClick={() => handleFilter('all')}>전체</button></li>
            <li><button onClick={() => handleFilter('complete')}>완료</button></li>
            <li><button onClick={() => handleFilter('delete')}>삭제</button></li>
          </ul>
        </div>

        {todoItem ? todoItem.map(item => (
          <div key={item.id} className="flex items-center gap-2">
            <input type="checkbox" id={`todo_${item.id}`} onChange={() => handleComplete(item)} checked={item.isCompleted}/>
            <label htmlFor={`todo_${item.id}`}>{item.value}</label>
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