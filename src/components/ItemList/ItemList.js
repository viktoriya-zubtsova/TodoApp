import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';
import styles from './ItemList.module.css'

const ItemList = ({ items, onClickDone }) =>(<List>
    {items.map(item => (
      <div key={item.value} className={styles.item}>
        <Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
      </div>))}
  </List>);

export default ItemList;
