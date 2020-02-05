import React, {useState} from 'react';
import {Input, Modal, notification} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEW_TASK} from "../../actions/types";
import {addTask} from "../../actions";

export default () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.tasks.isNewTaskModalOpen);

  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');

  const closeModal = () => dispatch({type: CREATE_NEW_TASK, opened: false});
  const handleCreateNewTask = () => {
    if (todo.length && description.length) {
      // Create Task
      dispatch(addTask({title: todo, description}));

      closeModal();

      // Display Notification
      notification.success({
        message: 'Task Created',
        description: `${todo} - ${description}`,
      });

      // Clear Fields
      setTodo('');
      setDescription('');
    } else {
      notification.error({
        message: 'Complete fields',
        description: `Add a title and a description to create a task.`,
      });
    }
  };

  return (
    <Modal
      title="New Task"
      visible={visible}
      onOk={handleCreateNewTask}
      onCancel={closeModal}
    >
      <h3>Title</h3>
      <Input
        value={todo}
        onChange={event => setTodo(event.target.value)}
        placeholder={'Buy more milk...'}
      />
      <h3 style={{marginTop: 15}}>Description</h3>
      <Input.TextArea
        value={description}
        onChange={event => setDescription(event.target.value)}
        placeholder={'Buy milk in the super market next to the super mall...'}
      />
    </Modal>
  );
};
