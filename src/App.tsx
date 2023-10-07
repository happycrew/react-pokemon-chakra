import { FC } from 'react';
import './App.scss';
import { Header } from './components/Header';

export const App: FC = () => {
  return (
    <>
      <Header />
      <h1>Hello world</h1>
    </>
  );
};
