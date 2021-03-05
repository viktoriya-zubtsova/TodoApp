import React, { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import PropTypes from 'prop-types';

const App = () => {
  const initialState = {
    items: [
      {
        value: 'написать новое приложение',
        isDone: true,
        id: 1
      },
      {
        value: 'прописать props-ы',
        isDone: false,
        id: 2
      },
      {
        value: 'сделать все дела',
        isDone: true,
        id: 3
      }
    ],
    idCount: 3
  };

  const [items, setItems] = useState(initialState.items);
  const [idCount, setIdCount] = useState(initialState.idCount);

  useEffect (() =>  {
     console.log('mount')
   }, []);
  useEffect (() =>  {
     console.log('update');
   });

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => {
      const newItem = { ...item };
      if (item.id !== id) {
        return newItem;
      }
    });
    setItems(newItemList);
  };

  const onClickAdd = value => {
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: idCount + 1
      }
    ];

    setItems(newItems);
    setIdCount(idCount => idCount + 1);
  };

    return (<div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList
        items={items}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
       />
      <Footer count={items.length} />
    </div>);
};

App.propTypes = {
  items: PropTypes.array,
  idCount: PropTypes.number
};

export default App;
