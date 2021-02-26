import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count, onClickFooter }) =>(<div>
  <p onClick={onClickFooter}>Осталось выполнить вот столько дел: {count}</p>
  <ButtonGroup size="small" color="secondary">
    <Button>Все</Button>
    <Button>Активные</Button>
    <Button>Выполнено</Button>
  </ButtonGroup>
  <ButtonGroup size="small">
    <Button>Удалить выполненные</Button>
  </ButtonGroup>
</div>);

export default Footer;
