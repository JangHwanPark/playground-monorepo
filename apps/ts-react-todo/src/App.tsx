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

  // 동시에 여러 아이템 수정시 문제
  // editText가 한개라 A수정시 B수정모드로 접근시 텍스트 꼬임
  // 한번에 하나만 수정 가능하도록 설정
  const handleToggleEdit = (item: Todo) => {
    setTodoItem(prev => prev.map(todo => todo.id === item.id ? {...todo, isActive: !todo.isActive} : {...todo, isActive: false}));
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Todo</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input type="text" onChange={(e) => setText(e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="할 일을 입력하세요"/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">추가</button>
      </form>
      <div>
        {/* todo filter*/}
        <div id="todo-filter" className="flex justify-center mb-4">
          <ul className="flex gap-1 bg-gray-100 rounded-lg p-1">
            <li>
              <button onClick={() => handleFilter('all')} className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${todoFilter === 'all' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>전체</button>
            </li>
            <li>
              <button onClick={() => handleFilter('complete')} className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${todoFilter === 'complete' ? 'bg-white shadow text-green-600' : 'text-gray-500 hover:text-gray-700'}`}>완료</button>
            </li>
            <li>
              <button onClick={() => handleFilter('delete')} className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${todoFilter === 'delete' ? 'bg-white shadow text-red-600' : 'text-gray-500 hover:text-gray-700'}`}>삭제</button>
            </li>
          </ul>
        </div>
        {/* todo item */}
        <div className="space-y-2">
          {todoItem.length !== 0 ? filterItem.map(item => (
            <div key={item.id} className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${item.isDeleted ? 'opacity-50 bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-gray-300'}`}>
              {item.isActive && !item.isDeleted ? (
                <>
                  <input type="text" id={`todo_${item.id}`} onChange={(e) => setEditText(e.target.value)} value={editText} className="flex-1 border border-blue-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                  <button onClick={() => handleSaveEdit(item)} className="text-xs px-2 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors">수정 완료</button>
                  <button onClick={() => handleCloseEdit(item)} className="text-xs px-2 py-1 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-colors">닫기</button>
                </>
              ) : (
                <>
                  <input type="checkbox" id={`todo_${item.id}`} onChange={() => handleComplete(item)} checked={item.isCompleted} className="w-4 h-4 rounded accent-blue-500"/>
                  <label htmlFor={`todo_${item.id}`} className={`flex-1 text-sm ${item.isCompleted ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item.value}</label>
                  <button onClick={() => handleToggleEdit(item)} className="text-xs px-2 py-1 rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition-colors">수정</button>
                  <button onClick={() => handleDelete(item)} className="text-xs px-2 py-1 rounded-md bg-red-400 text-white hover:bg-red-500 transition-colors">삭제</button>
                </>
              )}
            </div>
          )) : (
            <div className="text-center py-8 text-gray-400 text-sm">
              <p>데이터가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;