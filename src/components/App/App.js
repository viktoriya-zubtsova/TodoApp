import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
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

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => {
      const newItem = { ...item };
      if (item.id !== id) {
        return newItem;
      }
    });
    this.setState({ items: newItemList });
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.idCount + 1
      }
    ],
    idCount: state.idCount + 1
  }));

  render() {
    return (<div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem onClickAdd={this.onClickAdd} />
      <ItemList
        items={this.state.items}
        onClickDone={this.onClickDone}
        onClickDelete={this.onClickDelete}
       />
      <Footer count={this.state.items.length} />
    </div>);
  }
};

App.propTypes = {
  items: PropTypes.array,
  idCount: PropTypes.number
};

export default App;
