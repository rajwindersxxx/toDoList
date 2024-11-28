import { useState } from 'react';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { TaskList } from './TaskList';

const testTodos: {
  title: string;
  note: string;
  isDone: boolean;
  id: string;
}[] = [
  {
    title: 'Buy groceries',
    note: 'Milk, eggs, bread, and cheese',
    isDone: false,
    id: '4564',
  },
  {
    title: 'Finish project report',
    note: 'Add tables and graphs',
    isDone: false,
    id: '465465',
  },
  {
    title: 'Call mom',
    note: 'Check in and see how shes doing',
    isDone: true,
    id: '46545',
  },
];

export default function App() {
  const [records, setRecords] = useState([...testTodos]);
  const taskCompleted = records.filter(item => item.isDone === true).length;

  function handleForm(newRecord: {
    title: string;
    note: string;
    isDone: boolean;
    id: string;
  }) {
    setRecords(records => [...records, newRecord]);
  }
  return (
    <>
      <Header totalTasks={records.length} taskCompleted={taskCompleted} />
      <InputForm onFormSubmit={handleForm} />
      <TaskList records={records} />
    </>
  );
}
