import React from 'react'

import { useDispatch } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'

import { Stack, DropdownButton, Dropdown, Card } from 'react-bootstrap'

const Cell = props => {
  const dispatch = useDispatch()
  const setupModal = modalActions.setupModal

  const { id, company } = props

  return (
    <Card id={id} className='bg-color-primary border border-dark cell'>
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
              dispatch(setupModal({ modalType: 'edit-cell', elementID: id }))
            }}
          >
            Edit Cell
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(setupModal({ modalType: 'delete-cell', elementID: id }))
            }}
          >
            Delete Cell
          </Dropdown.Item>
        </DropdownButton>
      </Stack>
    </Card>
  )
}

export default Cell
