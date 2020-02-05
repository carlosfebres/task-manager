import React from 'react';
import {List} from "antd";
import {useSelector} from "react-redux";
import TaskListItem from "./TaskListItem";

export default () => {
  const tasks = useSelector(state => state.tasks.list);
  const loading = useSelector(state => state.tasks.loading);
  return (
    <List
      loading={loading}
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={task => <TaskListItem task={task}/>}
    />
  );
};
