import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'написать новое приложение';

const App = () => {
  const items = [
    {
      value: 'написать новое приложение'
    },
    {
      value: 'прописать props-ы'
    },
    {
      value: 'сделать все дела'
    }
  ];

  return (<div className="wrap">
    <h1 className="wrap__title">Важные дела:</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>);
}
export default App;
