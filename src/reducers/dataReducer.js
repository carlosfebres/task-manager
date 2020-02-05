import {CREATE_NEW_TASK, FETCH_TASKS} from '../actions/types';

const defaultState = {
  list: [],
  loading: true,
  isNewTaskModalOpen: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      state.list = action.tasks;
      state.loading = false;
      break;
    case CREATE_NEW_TASK:
      state.isNewTaskModalOpen = action.opened;
      break;
  }
  return state;
};
