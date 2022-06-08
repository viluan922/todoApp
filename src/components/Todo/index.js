import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import todoListSlice from '../TodoList/todoSlice';

const priorityColorMapping = {
  Master:'yellow',
  High: 'red',
  Medium: 'blue',
  Low: ''
};

export default function Todo({ name, level,completed,id }) {
  const dispatch = useDispatch()

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[level]} style={{ margin: 0 }}>
        {level}
      </Tag>
    </Row>
  );
}
