import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state ={
    inputValue: ''
  };
  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    this.props.onClickAdd(this.state.inputValue)
  }
  render() {
    const { onClickAdd } = this.props;
    return (<div>
      <TextField
        id="filled-secondary"
        label="Новое задание"
        variant="filled"
        fullWidth
        color="secondary"
        margin="dense"
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      />
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        size="small"
        onClick={() => {
          if (this.state.inputValue !== '') { this.onButtonClick();
          } else { alert('Сначала введи задание в поле'); }
        }}>>
        добавить
      </Button>
    </div>);
  }
}

export default InputItem;
