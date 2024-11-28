import { Header } from './Header';
import { InputForm } from './InputForm';

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Main() {
  return (
    <>
      <InputForm />
    </>
  );
}
