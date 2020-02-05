import {taskRef} from '../config/firebase';
import {FETCH_TASKS} from './types';
import formatDate from "../utils/formatDate";

const defaultTaskBody = {
  title: 'Task',
  description: 'Description',
  activities: [
    {
      status: 'pending',
      date: formatDate(new Date())
    }
  ]
};

export const addTask = task => async dispatch => {
  taskRef.push().set({
    ...defaultTaskBody,
    ...task
  });
};

export const removeTask = taskId => async dispatch => {
  taskRef.child(taskId).remove();
};

export const updateActivitiesForTask = (taskId, status) => async dispatch => {
  const task = taskRef.child(taskId);
  await task.child('activities').update(status);
};

export const fetchTasks = () => async dispatch => {
  taskRef.on("value", response => {
    const taskObject = response.val() || [];
    const tasks = Object.keys(taskObject).map(id => ({id, ...taskObject[id]}));
    dispatch({
      type: FETCH_TASKS,
      tasks
    });
  });
};
