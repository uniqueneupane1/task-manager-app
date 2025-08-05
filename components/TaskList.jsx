"use client";

import { toggleTask, deleteTask } from "@/redux/taskSlice";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function TaskList({ searchTerm }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTask = tasks.filter((task) => 
    task.text.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  if (filteredTask.length === 0) {
    return (
      <Paper sx={{ p: 2, textAlign: "center", color: "gray" }}>
        No tasks yet, add one above!
      </Paper>
    );
  }

  return (
    <List>
      {filteredTask.map((task) => (
        <ListItem
            key={task.id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-level="delete"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <ListItemText
            primary={task.text}
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "inherit",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
