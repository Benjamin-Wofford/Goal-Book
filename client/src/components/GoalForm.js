import React, { useState } from "react";
import { connect } from "react-redux";
import { addGoal } from "../actions/goal";
import { TextField, Button, makeStyles } from '@material-ui/core'

const GoalForm = ({ addGoal }) => {

  const [text, setText] = useState("");

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          addGoal({ text });
          setText("");
        }}
      >
        <TextField
          id="outlined-multiline-static"
          value={text}
          name="text"
          onChange={e => setText(e.target.value)}
          label="Create a goal"
          multiline
          fullWidth
          margin="normal"
          rowsMax="4"
          variant="outlined"
          autoFocus
        style={{backgroundColor: "white"}}
        />
        <Button fullWidth color="primary" type="submit" value="Submit" variant="contained">Create Goal</Button>
      </form>
    </>
  );
};

export default connect(null, { addGoal })(GoalForm);
