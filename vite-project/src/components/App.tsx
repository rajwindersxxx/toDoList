import { useState } from 'react';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { TaskList } from './TaskList';

interface Todo {
  title: string;
  note: string;
}
const testTodos: Todo[] = [
  {
    title: 'Buy groceries',
    note: 'Milk, eggs, bread, and cheese',
  },
  {
    title: 'Finish project report',
    note: 'Add tables and graphs',
  },
  {
    title: 'Call mom',
    note: 'Check in and see how shes doing',
  },
];

export default function App() {
  const [records, setRecords] = useState([...testTodos]);
  return (
    <>
      <Header />
      <Main records={records} />
    </>
  );
}

interface props {
  records: object;
}

function Main({ records }: props) {
  return (
    <>
      <InputForm />
      <div className='w-3/4 mx-auto'>
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </>
  );
}
