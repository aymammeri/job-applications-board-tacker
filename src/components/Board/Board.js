import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'

import { Button, Container, Row, Stack } from 'react-bootstrap'
import Column from '../Column/Column'

import { DragDropContext } from 'react-beautiful-dnd'

const Board = props => {
  const dispatch = useDispatch()
  const setupModal = modalActions.setupModal

  const board = useSelector(state => state.board.board)
  const columns = board.columns
  console.log(columns)
  const id = board._id

  const onDragEnd = result => {

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container id='board' className='border border-dark'>
        <Stack className='d-flex'>
          <div className='text-center pt-2'>Board Job Tracker</div>
          <Button
            variant='outline-link'
            className='ms-auto p-2'
            onClick={() => {
              dispatch(
                setupModal({ modalType: 'create-column', elementID: id })
              )
            }}
          >
            New Column
            <img
              className='ms-2'
              src='https://icongr.am/clarity/add.svg?size=20&color=currentColor'
            />
          </Button>
        </Stack>
        <Row>
          {board.columns.map((col, index) => (
            <Column key={index} id={col._id} {...col} />
          ))}
        </Row>
      </Container>
    </DragDropContext>
  )
}

export default Board
