import { Task } from './Task';
import { motion, AnimatePresence } from 'framer-motion';

interface props {
  records: {
    title: string;
    note: string;
    isDone: boolean;
    id: string;
  }[];
  onTaskStatusChange: (id: string) => void;
  onTaskDelete: (id: string) => void;
  onTaskUpdate: (id: string, title: string, note: string) => void;
}
export function TaskList({
  records,
  onTaskStatusChange,
  onTaskDelete,
  onTaskUpdate,
}: props) {
  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        <div className="inline-block">
          {records.map(item => (
            <motion.div
              className="inline-block text-left"
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <Task
                title={item.title}
                note={item.note}
                isDone={item.isDone}
                id={item.id}
                key={item.id}
                onTaskStatusChange={onTaskStatusChange}
                onTaskDelete={onTaskDelete}
                onTaskUpdate={onTaskUpdate}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
}

//temp using title as key
