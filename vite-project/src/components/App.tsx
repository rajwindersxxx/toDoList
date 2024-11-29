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
    id: '45dfds64dfsdf',
  },
  {
    title: 'Finish project report',
    note: 'Add tables and graphs',
    isDone: false,
    id: '465465sfsdfsdf',
  },
  {
    title: 'Call mom',
    note: 'Check in and see how shes doing',
    isDone: true,
    id: '46545sfsdf433',
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
    setRecords(records => [newRecord, ...records]);
  }

  function handleTaskStatus(id: string) {
    const updatedRecords = records.map(item =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setRecords(() => updatedRecords);
  }
  function handleDelete(id: string) {
    const updatedRecords = records.filter(item => item.id !== id);
    setRecords(() => updatedRecords);
  }
  function handleEditTask(id: string, newTitle: string, newNote: string) {
    const updatedRecords = records.map(item =>
      item.id === id ? { ...item, title: newTitle, note: newNote } : item
    );
    setRecords(() => updatedRecords);
  }
  return (
    <>
      <Header totalTasks={records.length} taskCompleted={taskCompleted} />
      <InputForm onFormSubmit={handleForm} />
      <TaskList
        records={records}
        onTaskStatusChange={handleTaskStatus}
        onTaskDelete={handleDelete}
        onTaskUpdate={handleEditTask}
      />
    </>
  );
}
