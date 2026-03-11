import {useState} from "react";

interface Todo {
  id: number;
  value: string;
  isActive: boolean;
  isCompleted: boolean;
  isDeleted: boolean;
}

type FilterType = 'all' | 'complete' | 'delete';

const App = () => {
  const [text, setText] = useState("");
  const [todoItem, setTodoItem] = useState<Todo[]>([]);
  const [todoFilter, setTodoFilter] = useState<FilterType>('all');
  const [editText, setEditText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  // 추가 클릭시 텍스트를 todoItem text로 추가해야함.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | SubmitEvent) => {
    e.preventDefault();
    setTodoItem([...todoItem, {
      id: todoItem.length + 1,
      value: text,
      isActive: false,
      isCompleted: false,
      isDeleted: false,
    },]);
  }
  console.log(editText, todoItem, todoFilter, open,)
  const handleComplete = (item: Todo) => {
    setTodoItem(todoItem.map(todo => todo.id !== item.id ? todo : {...todo, isCompleted: !todo.isCompleted}))
  }

  const handleDelete = (item: Todo) => {
    // item.isDeleted상태를 true로 변경해야함
    setTodoItem(todoItem.map(todo => todo.id !== item.id ? todo : {...todo, isDeleted: true}))
  }

  const handleFilter = (filterType: string) => {
    setTodoFilter(filterType as FilterType);
  }

  const handleToggleEdit = (item: Todo) => {
    setTodoItem(prev => prev.map(todo => todo.id === item.id ? {...todo, isActive: !todo.isActive} : todo));
    setEditText(item.value);
  }

  const handleSaveEdit = (item: Todo) => {
    setTodoItem(prev => prev.map(todo => todo.id === item.id ? {...todo, value: editText, isActive: false} : todo));
  }

  const handleCloseEdit = (item: Todo) => {
    setTodoItem(prev => prev.map(todo => todo.id === item.id ? {...todo, isActive: false} : todo));
  }

  const handleOpen = () => {
    setOpen(prev => !prev);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const filterItem = todoItem.filter(item => {
    const completeStatus = item.isCompleted && !item.isDeleted;
    const deleteStatus = !item.isCompleted && item.isDeleted;
    return todoFilter === 'all'
      ? true
      : todoFilter === 'complete'
        ? completeStatus
        : deleteStatus;
  })

  return (
    <div>
      <h1>todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
        <button>추가</button>
      </form>
      <div>
        {/* todo filter*/}
        <div id="todo-filter" className="flex justify-center">
          <ul className="flex gap-2">
            <li>
              <button onClick={() => handleFilter('all')}>전체</button>
            </li>
            <li>
              <button onClick={() => handleFilter('complete')}>완료</button>
            </li>
            <li>
              <button onClick={() => handleFilter('delete')}>삭제</button>
            </li>
          </ul>
        </div>
        {/* todo item */}
        <div>
          {todoItem.length !== 0 ? filterItem.map(item => (
            <div key={item.id} className={`flex items-center gap-2 ${item.isDeleted ? 'opacity-50' : ''}`}>
              {item.isActive && !item.isDeleted ? (
                <>
                  <input type="text" id={`todo_${item.id}`} onChange={(e) => setEditText(e.target.value)} value={editText}/>
                  <button onClick={() => handleSaveEdit(item)}>수정 완료</button>
                  <button onClick={() => handleCloseEdit(item)}>닫기</button>
                </>
              ) : (
                <>
                  <input type="checkbox" id={`todo_${item.id}`} onChange={() => handleComplete(item)} checked={item.isCompleted}/>
                  <label htmlFor={`todo_${item.id}`}>{item.value}</label>
                  <button onClick={() => handleToggleEdit(item)}>수정</button>
                  <button onClick={() => handleDelete(item)}>삭제</button>
                </>
              )}
            </div>
          )) : (
            <div>
              <p>데이터가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;