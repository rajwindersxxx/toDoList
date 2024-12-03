interface props {
  taskDate: string;
}

export function TaskDateAgo({ taskDate }: props) {
  const d1 = new Date();
  const d2 = new Date(taskDate);
  const differenceInMilliseconds: number = d1.getTime() - d2.getTime();
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  const days = ['today', 'yesterday', 'day Before yesterday'];
  return (
    <p className="text-purple-800">
      Added{' '}
      {differenceInDays < 3
        ? days[differenceInDays]
        : `${differenceInDays} days ago`}
    </p>
  );
}
