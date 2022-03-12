<<<<<<< HEAD
import React from 'react'
=======
import React, { useState, useEffect } from 'react'
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)

import { useDispatch } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'

import { Col, Stack, DropdownButton, Dropdown } from 'react-bootstrap'
import Cell from '../Cell/Cell.js'

<<<<<<< HEAD
import { Droppable } from 'react-beautiful-dnd'

const Column = props => {
  const dispatch = useDispatch()
  const setupModal = modalActions.setupModal

  const { id, name, cells } = props

  return (
    <Col className='column border border-dark fluid m-3 pb-3'>
      <Droppable droppableId={id}>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef} id={id}>
            <Stack className='d-flex'>
              <h6 className='text-center pt-2'>{name}</h6>
              <DropdownButton
                className='ms-auto'
                variant='link'
                id='dropdown-basic-button'
                title={
                  <img src='https://icongr.am/entypo/dots-three-horizontal.svg?size=14&color=currentColor' />
                }
              >
                <Dropdown.Item
                  onClick={() => {
                    dispatch(
                      setupModal({ modalType: 'edit-column', parentId: id })
                    )
                  }}
                >
                  Rename Column
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    dispatch(
                      setupModal({ modalType: 'delete-column', parentId: id })
                    )
                  }}
                >
                  Delete Column
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    dispatch(
                      setupModal({ modalType: 'create-cell', parentId: id })
                    )
                  }}
                >
                  New Cell
                </Dropdown.Item>
              </DropdownButton>
            </Stack>
            {cells?.map((cell, index) => (
              <Cell key={cell._id} id={cell._id} {...cell} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
=======
const Column = props => {
  const dispatch = useDispatch()
  const setupModal = modalActions.setupModal

  const { id, name, cells } = props

  const [cellsJSX, setCellsJSX] = useState(null)

  useEffect(() => {
    setCellsJSX(
      cells?.map(cell => (
        <Cell key={cells.indexOf(cell)} id={cell._id} {...cell} />
      ))
    )
  }, [cells])

  return (
    <Col id={id} className='column border border-dark fluid m-3 pb-3'>
      <Stack className='d-flex'>
        <h6 className='text-center pt-2'>{name}</h6>
        <DropdownButton
          className='ms-auto'
          variant='link'
          id='dropdown-basic-button'
          title={
            <img src='https://icongr.am/entypo/dots-three-horizontal.svg?size=14&color=currentColor' />
          }
        >
          <Dropdown.Item
            onClick={() => {
              dispatch(setupModal({ modalType: 'edit-column', elementID: id }))
            }}
          >
            Rename Column
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(setupModal({ modalType: 'delete-column', elementID: id }))
            }}
          >
            Delete Column
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              dispatch(setupModal({ modalType: 'create-cell', elementID: id }))
            }}
          >
            New Cell
          </Dropdown.Item>
        </DropdownButton>
      </Stack>
      {cellsJSX}
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)
    </Col>
  )
}

export default Column
