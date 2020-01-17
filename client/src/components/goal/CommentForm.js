import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/goal";
import { Button, TextField } from "@material-ui/core"

const CommentForm = ({ goalId, addComment }) => {

    const [text, setText] = useState("")

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          addComment( goalId, { text } );
          setText("");
        }}
      >
        <TextField
          id="outlined-multiline-static"
          value={text}
          name="text"
          onChange={e =>setText(e.target.value)}
          label="Leave a comment"
          multiline
          fullWidth
          margin="normal"
          rowsMax="4"
          variant="outlined"
          autoFocus
        />
        <Button
          fullWidth
          color="primary"
          type="submit"
          value="Submit"
          variant="contained"
        >
          Leave Comment
        </Button>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
