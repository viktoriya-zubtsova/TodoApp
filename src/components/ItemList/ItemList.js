import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({ items, onClickDone, onClickDelete }) =>(<List>
    {items.map(item => (
      <div key={item.id} className={styles.item}>
        <Item value={item.value}
        isDone={item.isDone}
        id={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        />
      </div>))}
  </List>);

ItemList.propTypes = {
  items: PropTypes.array,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default ItemList;
