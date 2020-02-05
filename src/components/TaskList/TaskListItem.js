import React, {useState} from 'react';
import {Button, Divider, Icon, List, Popconfirm, Timeline} from "antd";
import './TaskListItem.css';
import {useDispatch} from "react-redux";
import {removeTask, updateActivitiesForTask} from "../../actions";
import formatDate from "../../utils/formatDate";

const statusVsColors = {
  pending: 'gray',
  done: 'green',
  inProgress: 'yellow'
};

export default ({task}) => {
  const [showingStatusHistory, showStatusHistory] = useState(false);
  const dispatch = useDispatch();

  const addStatus = status => {
    const activities = [
      {
        status,
        date: formatDate(new Date())
      },
      ...task.activities
    ];
    dispatch(updateActivitiesForTask(task.id, activities));
  };

  const deleteTask = () => dispatch(removeTask(task.id));
  const addProgress = () => addStatus('inProgress');
  const setDone = () => addStatus('done');

  return (
    <List.Item
      onMouseEnter={() => showStatusHistory(true)}
      onMouseLeave={() => showStatusHistory(false)}
    >
      <Icon type="fire"/>
      <List.Item.Meta
        avatar={<Icon type="fire"/>}
        title={task.title}
        description={task.description}
      />
      {showingStatusHistory && (
        <div className={'flexRow'} style={{marginTop: 20}}>
          <Button.Group>

            <Popconfirm
              title="Are you sure delete this task?"
              onConfirm={deleteTask}
              okText="Delete"
              cancelText="No"
            >
              <Button type="danger">Delete</Button>
            </Popconfirm>
            <Button type="primary" onClick={addProgress}>In Progress</Button>
            <Button type="primary" onClick={setDone}>Done!</Button>
          </Button.Group>
          <Divider/>
          <Timeline>
            {task.activities.map((activity, index) => (
              <Timeline.Item key={index} pending={activity.status === 'pending'}
                             color={statusVsColors[activity.status]}>{activity.status} - {activity.date}</Timeline.Item>)
            )}
          </Timeline>
        </div>
      )}
    </List.Item>
  );
}
