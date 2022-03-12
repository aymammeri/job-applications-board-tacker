<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'
import { moveCells } from '../../Store/boardSlice/boardActions'
=======
import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../../Store/modalSlice/modalReducer'
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)

import { Button, Container, Row, Stack } from 'react-bootstrap'
import Column from '../Column/Column'

<<<<<<< HEAD
import { DragDropContext } from 'react-beautiful-dnd'

const Board = () => {
  const dispatch = useDispatch()
  const { modalSwitch } = modalActions
=======
const Board = props => {
  const dispatch = useDispatch()
  const setupModal = modalActions.setupModal
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)

  const board = useSelector(state => state.board.board)
  const id = board._id

<<<<<<< HEAD
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
            dispatch(modalSwitch({ modalType: 'create-column', parentId: id }))
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
=======
  const [boardJSX, setBoardJSX] = useState(null)

  useEffect(() => {
    setBoardJSX(
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
          {board.columns.map(col => (
            <Column key={board.columns.indexOf(col)} id={col._id} {...col} />
>>>>>>> cbfbd32 (Integrate Redux/toolkit and refactor codebase)
          ))}
        </Row>
      </DragDropContext>
    </Container>
  )
}

export default Board
