import React from "react";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {CREATE_NEW_TASK} from "../../actions/types";
import './FloatingButton.css';

export default () => {
  const dispatch = useDispatch();
  const openNewTaskModal = () => dispatch({type: CREATE_NEW_TASK, opened: true});
  return (
    <div className="fixed-action-btn">
      <Button onClick={openNewTaskModal} className={'button'}
              type="primary" shape="circle" icon="plus" size={'large'}/>
    </div>
  );
}
