import React from 'react'
import { Stack, DropdownButton, Dropdown, Card } from 'react-bootstrap'

const Cell = props => {
  const { id, column, setModalType, setElementID, handleShow } = props
  return (
    <Card
      id={id}
      className='bg-color-primary border border-dark cell'
      parent={column}
    >
      <Stack className='d-flex'>
        <img src='https://icongr.am/devicon/google-original.svg?size=14&color=currentColor' />
        <div className='mx-auto text-center pt-2'>Title</div>
        <DropdownButton
          variant='link'
          id='dropdown-basic-button'
          title={
            <img src='https://icongr.am/entypo/dots-three-vertical.svg?size=14&color=currentColor' />
          }
        >
          <Dropdown.Item
            onClick={() => {
              setModalType('edit-cell')
              setElementID({ id })
              handleShow()
            }}
          >
            Edit
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setModalType('delete-cell')
              setElementID({ id })
              handleShow()
            }}
          >
            Delete
          </Dropdown.Item>
        </DropdownButton>
      </Stack>
    </Card>
  )
}

export default Cell
