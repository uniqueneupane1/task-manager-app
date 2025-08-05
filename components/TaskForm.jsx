"use client";

import { addTask } from "@/redux/taskSlice";
import { TextField, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function TaskForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField label="New Task" variant="outlined" fullWidth value={text} onChange={(e) => setText(e.target.value)}/>
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Stack>
    </form>
  );
}

export default TaskForm;
