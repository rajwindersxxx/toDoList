import { Button } from './Button';

export function TaskList() {
  return (
    <div className="inline-block">
      <div className="bg-purple-400 p-4 m-4 w-[400px]  rounded hover:-translate-y-1 transition-all flex flex-col gap-y-4">
        <h2 className="text-xl font-semibold text-white">Task name </h2>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora est
          ad consequatur esse magnam nostrum, numquam, voluptatem perferendis
          qui mollitia veritati
        </p>
        <div className="buttons flex justify-end gap-4">
          <Button>E</Button>
          <Button>D</Button>
        </div>
      </div>
    </div>
  );
}
