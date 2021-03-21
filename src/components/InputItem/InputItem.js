import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state ={
    inputValue: '',
    helperText: '',
    error: false
  };
  onButtonClick = () => {
    if (this.state.inputValue === '') {
      this.setState({helperText: 'Сначала введи задание', error: true});
    } else if (this.props.items.every(item => item.value != this.state.inputValue)) {
      this.setState({inputValue: '', helperText: '', error: false});
      this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({ helperText: 'Такое задание уже есть, введи другое', error: true});
    }
  }
  render() {
    const { onClickAdd, items } = this.props;
    return (<div>
      <TextField
        id="filled-secondary"
        label="Новое задание"
        variant="filled"
        error={this.state.error}
        fullWidth
        color="primary"
        margin="dense"
        helperText={this.state.helperText}
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        size="small"
        onClick={this.onButtonClick}>
        добавить
      </Button>
    </div>);
  }
}

InputItem.propTypes = {
  inputValue: PropTypes.string,
  onClickAdd: PropTypes.func,
  onButtonClick: PropTypes.func
};

export default InputItem;
