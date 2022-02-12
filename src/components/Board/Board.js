import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Stack } from 'react-bootstrap'
import Column from '../Column/Column'
// import { createColumn } from '../../api/crud'

const Board = props => {
  const { board, setModalType, setModalProps, handleShow } = props
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
              setModalType('create-column')
              handleShow()
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
            <Column
              id={col._id}
              key={board.columns.indexOf(col)}
              cells={col.cells}
              setModalType={setModalType}
              setModalProps={setModalProps}
              handleShow={handleShow}
            />
          ))}
        </Row>
      </Container>
    )
  }, [])

  return <>{boardJSX}</>
}

export default Board

// const handleAddColumn = () => {
//   createColumn({
//     token: user.token,
//     column: {
//       board: board._id,
//       owner: user._id
//     }
//   })
// }
