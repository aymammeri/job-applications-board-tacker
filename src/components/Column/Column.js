import React, { useState, useEffect } from 'react'
import { Col, Stack, DropdownButton, Dropdown } from 'react-bootstrap'
import { createCell, deleteColumn, editColumn } from '../../api/crud.js'
import Cell from '../Cell/Cell.js'

const Column = props => {
  const { id, name, cells, setModalType, setElementID, setApiCall, handleShow } = props
  const [cellsJSX, setCellsJSX] = useState(null)

  useEffect(() => {
    setCellsJSX(
      cells?.map(cell => (
        <Cell
          key={cells.indexOf(cell)}
          id={cell._id}
          setModalType={setModalType}
          setElementID={setElementID}
          setApiCall={setApiCall}
          handleShow={handleShow}
          {...cell}
        />
      ))
    )
  }, [])

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
              setModalType('edit-column')
              setElementID(id)
              setApiCall({ call: editColumn })
              handleShow()
            }}
          >
            Rename Column
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setModalType('delete-column')
              setElementID(id)
              setApiCall({ call: deleteColumn })
              handleShow()
            }}
          >
            Delete Column
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              setModalType('create-cell')
              setElementID(id)
              setApiCall({ call: createCell })
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
