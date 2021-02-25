import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem = 'написать новое приложение';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'написать новое приложение',
        isDone: true
      },
      {
        value: 'прописать props-ы',
        isDone: false
      },
      {
        value: 'сделать все дела',
        isDone: true
      }
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render() {
    return (<div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem />
      <ItemList items={this.state.items} onClickDone={this.onClickDone} />
      <Footer count={1} />
    </div>);
  }
};

export default App;
