import React from 'react'
import { Stack, DropdownButton, Dropdown, Card } from 'react-bootstrap'

const Cell = props => {
  return (
    <Card className='bg-color-primary border border-dark cell'>
      <Stack className='d-flex'>
        <img src='https://icongr.am/devicon/google-original.svg?size=14&color=currentColor' />
        <div className='mx-auto text-center pt-2'>Title</div>
        <DropdownButton variant='link' id='dropdown-basic-button' title={<img src='https://icongr.am/entypo/dots-three-vertical.svg?size=14&color=currentColor'/>}>
          <Dropdown.Item href='#/action-1'>Edit</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Delete</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </Card>
  )
}

export default Cell
