import React from 'react'
import { Button, Container, Row, Stack } from 'react-bootstrap'
import Column from '../Column/Column'

const Board = () => {
  return (
    <Container id='board' fluid className='border border-dark'>
      <Stack className='d-flex'>
        <div className='text-center pt-2'>Board Job Tracker</div>
        <Button variant='outline-link' className='ms-auto p-2'>
          Add Column
          <img className='ms-2' src='https://icongr.am/clarity/add.svg?size=20&color=currentColor' />
        </Button>
      </Stack>
      <Row>
        <Column />
        <Column />
        <Column />
      </Row>
    </Container>
  )
}

export default Board
