import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import useReactRouter from 'use-react-router';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();
  const { history, location, match } = useReactRouter();

  return (
    <form
      onSubmit={event => {
        console.log(history);
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
