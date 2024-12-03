import { useEffect, useState } from 'react';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { TaskList } from './TaskList';

export default function App() {
  const [records, setRecords] = useState(() => {
    const data = localStorage.getItem('records');
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const taskCompleted = records.filter(
    (item: { isDone: boolean }) => item.isDone === true
  ).length;
  interface props {
    title: string;
    note: string;
    isDone: boolean;
    id: string;
    date: string;
  }
  function handleForm(newRecord: props) {
    setRecords((records: props[]) => [newRecord, ...records]);
  }

  function handleTaskStatus(id: string) {
    const updatedRecords = records.map(
      (item: { isDone: boolean; id: string }) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setRecords(() => updatedRecords);
  }
  function handleDelete(id: string) {
    const updatedRecords = records.filter(
      (item: { id: string }) => item.id !== id
    );
    setRecords(() => updatedRecords);
  }
  function handleEditTask(id: string, newTitle: string, newNote: string) {
    const updatedRecords = records.map((item: { id: string }) =>
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
