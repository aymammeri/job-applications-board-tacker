/* eslint-disable no-unused-vars */
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'
import { moveCells } from '../../Store/boardSlice/boardActions'

import { Button, Container, Row, Stack } from 'react-bootstrap'
import Column from '../Column/Column'

import { DragDropContext } from 'react-beautiful-dnd'

const Board = () => {
  const dispatch = useDispatch()
  const setupModal = modalActions.setupModal

  const board = useSelector(state => state.board.board)
  const id = board._id

  const onDragEnd = result => {
    if (!result.destination) {
      return
    }

    const { source, destination } = result
    dispatch(moveCells({ source, destination }))
  }

  return (
    <Container id='board' className='border border-dark'>
      <Stack className='d-flex'>
        <div className='text-center pt-2'>Board Job Tracker</div>
        <Button
          variant='outline-link'
          className='ms-auto p-2'
          onClick={() => {
            dispatch(setupModal({ modalType: 'create-column', elementID: id }))
          }}
        >
          New Column
          <img
            className='ms-2'
            src='https://icongr.am/clarity/add.svg?size=20&color=currentColor'
          />
        </Button>
      </Stack>
      <DragDropContext onDragEnd={onDragEnd}>
        <Row>
          {board.columns.map((col, index) => (
            <Column key={index} id={col._id} {...col} />
          ))}
        </Row>
      </DragDropContext>
    </Container>
  )
}

export default Board
