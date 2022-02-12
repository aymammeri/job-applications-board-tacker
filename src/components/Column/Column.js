import React from 'react'
import { Col, Stack, DropdownButton, Dropdown } from 'react-bootstrap'
import Cell from '../Cell/Cell.js'

const Checkpoint = props => {
  return (
    <Col className='column border border-dark fluid m-3 pb-3'>
      <Stack className='d-flex'>
        <div className='text-center pt-2'>Title</div>
        <DropdownButton className='ms-auto' variant='link' id='dropdown-basic-button' title={<img src='https://icongr.am/entypo/dots-three-horizontal.svg?size=14&color=currentColor'/>}>
          <Dropdown.Item href='#/action-1'>Add</Dropdown.Item>
          <Dropdown.Item href='#/action-1'>Rename</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Delete</Dropdown.Item>
        </DropdownButton>
      </Stack>
      <Cell />
      <Cell />
      <Cell />
    </Col>
  )
}

export default Checkpoint
