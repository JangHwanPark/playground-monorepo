import {useState} from "react";

type Item = {
  id: number;
  text: string;
  isCompleted: boolean;
}

const isTrimmed = (text: string) => {
  return text.trim() !== "";
}

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [itemIdx, setItemIdx] = useState<number>(1);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isTrimmed(text)) {
      alert("공백 ㄴㄴ");
      return;
    } else {
      setItems([...items, {id: itemIdx, text, isCompleted: false}]);
      setItemIdx(() => itemIdx + 1);
      setText("");
    }
  }

  const handleUpdate = (item: Item) => {
    const updatedItems = items.map(i => i.id === item.id ? {...i, isCompleted: !i.isCompleted} : i);
    setItems(updatedItems);
  }

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div className='w-full'>
      <main className='flex flex-col gap-4 items-center'>
        <h1 className='text-center text-5xl'>Todo List</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='flex border-2'>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='w-full rounded-none'/>
              <button className='bg-blue-500 text-white px-4 py-2 cursor-pointer'>Submit</button>
            </div>
          </form>
          <ul>
            {/* 추가된 아이템 */}
            {items.map((item) => (
              <li key={item.id} className='flex items-center gap-2'>
                <input id={item.id.toString()} type="checkbox" checked={item.isCompleted} onChange={() => handleUpdate(item)}/>
                <label htmlFor={item.id.toString()}>
                  <span className={item.isCompleted ? 'line-through' : ''}>{item.text}</span>
                </label>
                <button onClick={() => handleDelete(item.id)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
