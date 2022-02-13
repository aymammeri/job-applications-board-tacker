import React, { useState, useEffect } from 'react'
import { Col, Stack, DropdownButton, Dropdown } from 'react-bootstrap'
// import { createCell } from '../../api/crud.js'
import Cell from '../Cell/Cell.js'

const Column = props => {
  const { id, cells, setModalType, setElementID, handleShow } = props
  const [cellsJSX, setCellsJSX] = useState(null)

  useEffect(() => {
    setCellsJSX(
      cells.map(cell => (
        <Cell
          key={cells.indexOf(cell)}
          id={cell._id}
          column={id}
          setModalType={setModalType}
          setElementID={setElementID}
          handleShow={handleShow}
        />
      ))
    )
  }, [])

  return (
    <Col id={id} className='column border border-dark fluid m-3 pb-3'>
      <Stack className='d-flex'>
        <div className='text-center pt-2'>Title</div>
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
              setModalType('edit-column')
              setElementID({ id })
              handleShow()
            }}
          >
            Rename
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setModalType('delete-column')
              setElementID({ id })
              handleShow()
            }}
          >
            Delete
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              setModalType('create-cell')
              setElementID({ id })
              handleShow()
            }}
          >
            New Cell
          </Dropdown.Item>
        </DropdownButton>
      </Stack>
      {cellsJSX}
    </Col>
  )
}

export default Column
