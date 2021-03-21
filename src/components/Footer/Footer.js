import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ countAll, countActive, countDone, onClickDeleteAll, onClickDeleteDone, onClickFilter }) =>(<div>
  <ButtonGroup size="small" color="primary" className={styles.buttonGroup}>
    <Button onClick={() => onClickFilter('all')}>Все {countAll}</Button>
    <Button onClick={() => onClickFilter('active')}>Активные {countActive}</Button>
    <Button onClick={() => onClickFilter('done')}>Выполнено {countDone}</Button>
  </ButtonGroup>
  <div className={styles.buttonGroupDelete}>
    <ButtonGroup size="small">
      <Button onClick={onClickDeleteDone}>Удалить выполненные</Button>
      <Button onClick={onClickDeleteAll}>Удалить все дела</Button>
    </ButtonGroup>
  </div>
</div>);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};
export default Footer;
