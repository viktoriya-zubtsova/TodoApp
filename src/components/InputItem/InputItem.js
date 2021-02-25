import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () =>(<div>
  <TextField
    id="filled-secondary"
    label="Добавить новое дело"
    variant="filled"
    fullWidth
    color="secondary"
    margin="dense"
  />
</div>);

export default InputItem;
