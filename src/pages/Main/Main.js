import React from 'react';
import TaskList from '../../components/TaskList/TaskList'
import './Main.css';
import {useDispatch} from 'react-redux'
import {fetchTasks} from "../../actions";
import {Card, PageHeader} from "antd";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import NewTaskModal from "../../components/NewTaskModal/NewTaskModal";


export default () => {
  const dispatch = useDispatch();
  dispatch(fetchTasks());
  return (
    <>
      <PageHeader
        ghost={false}
        title="Task Manager"
        subTitle="Prueba tecnica"
      />
      <div className={'alignCenter'} style={{marginTop: 20}}>
        <Card title="Tasks List" className={'mainContainer'}>
          <TaskList/>
        </Card>
      </div>
      <NewTaskModal />
      <FloatingButton />
    </>
  );
}
