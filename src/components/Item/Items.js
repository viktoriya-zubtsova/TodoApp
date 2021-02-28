import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import styles from './Items.module.css';
import PropTypes from 'prop-types';

class Item extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => console.log('interval'), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  };

  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
    return (<ListItem>
      <Checkbox
        checked={isDone}
        tabIndex={-1}
        onClick={() => onClickDone(id)}
      />
      <ListItemText primary={value} className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })}
         />
      <ListItemSecondaryAction>
        <IconButton onClick={() => onClickDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
  </ListItem>);
  }
};

Item.defaultProps = {
  value: 'здесь должен быть текст задания',
  isDone: false,
  id: Math.floor(Math.random() * Math.floor(100))
};

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default Item;
