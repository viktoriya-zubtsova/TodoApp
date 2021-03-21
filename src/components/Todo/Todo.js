import React, { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import PropTypes from 'prop-types';

const Todo = () => {
  const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
    idCount: 0,
    filterItems: []
  };

  const [items, setItems] = useState(initialState.items);
  const [idCount, setIdCount] = useState(initialState.idCount);
  const [filter, setFilter] = useState(initialState.filter);
  const [filterItems, setFilterItems] = useState(initialState.filterItems);

  useEffect(() => {
	    localStorage.setItem('items', JSON.stringify(items));
	  });

  useEffect(() => {
    setFilterItems(items);
  }, []);

  useEffect(() => {
    onClickFilter(filter);
  }, [items]);

  const countActive = items.filter((item) => item.isDone === false);
  const countDone = items.filter((item) => item.isDone === true);

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

  const onClickFilter = filter => {
    let newItemList = [];
      switch (filter) {
      case 'all':
  				newItemList = items;
  				break;
			case 'done':
					newItemList = items.filter(item => item.isDone);
					break;
			case 'active':
					newItemList = items.filter(item => !item.isDone);
					break;
			default:
					newItemList = items;
	       }
    setFilterItems(newItemList);
    setFilter(filter);
    };

  const onClickDeleteDone = isDone => {
    const newItemList = items.filter(item => {
      const newItem = { ...item };
      if (item.isDone !== true) {
        return newItem;
      }
    });
    setItems(newItemList);
  }

  const onClickDeleteAll = () => {
    const newItemList = [];
    setItems(newItemList);
    setIdCount(count => 0);
  };

    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem onClickAdd={onClickAdd} items={initialState.items}/>
        <ItemList
          filterItems={filterItems}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
        <Footer
          countAll={items.length}
          countActive={countActive.length}
          countDone={countDone.length}
          onClickDeleteAll={onClickDeleteAll}
          onClickDeleteDone={onClickDeleteDone}
          onClickFilter={onClickFilter}
        />
      </div>);
};

Todo.propTypes = {
  items: PropTypes.array,
  idCount: PropTypes.number
};

export default Todo;
