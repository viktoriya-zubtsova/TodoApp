import React from 'react';
import Item from '../Item/Items';

const ItemList = ({ todoItem }) =>(<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'прописать props-ы'} /></li>
  <li><Item todoItem={'сделать все дела'} /></li>
</ul>);

export default ItemList;
