import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      paddingBottom: "10px",
      width: 700,
    },
  },
}));

function BasicTextFields({ onHandleSubmit }) {
  const classes = useStyles();
  return (
    <div >
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onHandleSubmit}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
}

export default BasicTextFields