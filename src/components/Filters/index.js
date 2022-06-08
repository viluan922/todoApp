import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import {useDispatch } from 'react-redux'
import {searchFilterChange} from '../../redux/actions'
import {statusFilterChange} from '../../redux/actions'
import {levelFilterChange} from '../../redux/actions'

const { Search } = Input;

export default function Filters() {
  const dispatch= useDispatch()


  const [searchText, setSearchText] =useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterLevels, setFilterLevels] = useState([])
  
  const handleSearchText = (t) => {
    setSearchText(t.target.value);
    dispatch(searchFilterChange(t.target.value))
  } 
  
  const handleStatusChange = (s) => {
    setFilterStatus(s.target.value);
    dispatch(statusFilterChange(s.target.value))
  }
  
  const handleLevelChange=(value)=>{
    setFilterLevels(value)
    dispatch(levelFilterChange(value))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='Find something ?' value={searchText} onChange={handleSearchText}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Todo'>To do</Radio>
          <Radio value='Completed'>Completed</Radio> 
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Required Level
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Select Level'
          style={{ width: '100%' }}
          value={filterLevels}
          onChange={handleLevelChange}
        >
          <Select.Option value='Master' label='Master'>
            <Tag color='purple'>Master</Tag>
          </Select.Option>
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          {/* <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option> */}
        </Select>
      </Col>
    </Row>
  );
}
