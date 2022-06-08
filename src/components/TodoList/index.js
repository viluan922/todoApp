import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import { todoRemainingSelector } from '../../redux/selectors';
import todoListSlice from './todoSlice';

export default function TodoList() {
  const [todoName,setTodoName] = useState('')
  
  const[levels,setLevels] = useState('Low')

  const todoList = useSelector(todoRemainingSelector)

  const dispatch = useDispatch();

  const handleLevelChange=(value) => {
    setLevels(value);
  }

  const handleAddBtnonClick = ()=> {
    dispatch(todoListSlice.actions.addTodo
    ({
      id: uuidv4(),
      name:todoName
      ,level:levels,
      completed: false
    }));
    setTodoName('')
    setLevels('Low');
  }

  const handleInputChange=(i)=> {
    setTodoName(i.target.value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => 
          <Todo key={todo.id} id={todo.id} name={todo.name} level={todo.level} completed={todo.completed} 
          />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />{/*Nhập dô cái cần làm */}
          <Select defaultValue="Medium" onChange={handleLevelChange} value={levels} >
            <Select.Option value='Master' label='Master'>
              <Tag color='purple'>Master</Tag>
            </Select.Option>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color=''>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddBtnonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
