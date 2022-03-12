import React from 'react'

import { useDispatch } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'

import { Stack, DropdownButton, Dropdown, Card } from 'react-bootstrap'

import { Draggable } from 'react-beautiful-dnd'

const Cell = props => {
  const dispatch = useDispatch()
  const { modalSwitch } = modalActions

  const { id, index, company } = props

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={id}
          className='bg-color-primary border border-dark cell'
        >
          <Stack className='d-flex'>
            <img src='https://icongr.am/devicon/google-original.svg?size=14&color=currentColor' />
            <div className='mx-auto text-center pt-2'>{company}</div>
            <DropdownButton
              variant='link'
              id='dropdown-basic-button'
              title={
                <img src='https://icongr.am/entypo/dots-three-vertical.svg?size=14&color=currentColor' />
              }
            >
              <Dropdown.Item
                onClick={() => {
                  dispatch(
                    modalSwitch({ modalType: 'edit-cell', elementId: id })
                  )
                }}
              >
                Edit Cell
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  dispatch(
                    modalSwitch({ modalType: 'delete-cell', elementId: id })
                  )
                }}
              >
                Delete Cell
              </Dropdown.Item>
            </DropdownButton>
          </Stack>
        </Card>
      )}
    </Draggable>
  )
}

export default Cell
