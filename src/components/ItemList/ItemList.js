import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';
import styles from './ItemList.module.css'
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

Item.defaultProps = {
  value: 'здесь должен быть текст задания',
  isDone: false,
  id: Math.floor(Math.random() * Math.floor(100))
};

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default ItemList;
