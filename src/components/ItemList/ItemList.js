import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './ItemList.module.css'

const ItemList = ({ items }) =>(<div>
  <List>
    {items.map(item => (
      <ListItem key={item.value} className={styles.item} dense button>
        <ListItemIcon>
          <Checkbox
            disableRipple
          />
        </ListItemIcon>
        <ListItemText><Item value={item.value} isDone={item.isDone} /></ListItemText>
        <ListItemSecondaryAction className={styles.delete}>
          <IconButton aria-label="очистить">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
</div>);

export default ItemList;
