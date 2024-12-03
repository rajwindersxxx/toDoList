import { Task } from './Task';
import { motion, AnimatePresence } from 'framer-motion';

interface props {
  records: {
    title: string;
    note: string;
    isDone: boolean;
    date: string;
    id: string;
  }[];
  onTaskStatusChange: (id: string) => void;
  onTaskDelete: (id: string) => void;
  onTaskUpdate: (id: string, title: string, note: string) => void;
}
const variants = {
  hidden: { opacity: 0, y: '-100%', scale: 0.3 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
};
export function TaskList({
  records,
  onTaskStatusChange,
  onTaskDelete,
  onTaskUpdate,
}: props) {
  return (
    <>
      <AnimatePresence initial={true} mode="popLayout">
        {records.map((item) => (
          <motion.div
            className="inline-block text-left"
            key={item.id}
            layout
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Task
              title={item.title}
              note={item.note}
              isDone={item.isDone}
              taskDate={item.date}
              id={item.id}
              onTaskStatusChange={onTaskStatusChange}
              onTaskDelete={onTaskDelete}
              onTaskUpdate={onTaskUpdate}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}

//temp using title as key
