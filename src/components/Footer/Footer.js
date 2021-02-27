import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';

const Footer = ({ count }) =>(<div>
  <p>Осталось выполнить вот столько дел: {count}</p>
  <ButtonGroup size="small" color="secondary">
    <Button>Все</Button>
    <Button>Активные</Button>
    <Button>Выполнено</Button>
  </ButtonGroup>
  <Button size="small" variant="outlined">Удалить выполненные</Button>
</div>);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};
export default Footer;
