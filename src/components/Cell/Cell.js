import React, { useState, useEffect } from 'react'
import { Stack, DropdownButton, Dropdown, Card } from 'react-bootstrap'
import { deleteCell, editCell } from '../../api/crud'

const Cell = props => {
  const { id, column, setModalType, setElementID, setApiCall, handleShow, company } = props
  const [cellJSX, setCellJSX] = useState(null)

  useEffect(() => {
    setCellJSX(
      <Card
        id={id}
        className='bg-color-primary border border-dark cell'
        parent={column}
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
                setModalType('edit-cell')
                setElementID(id)
                setApiCall({ call: editCell })
                handleShow()
              }}
            >
              Edit Cell
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setModalType('delete-cell')
                setElementID(id)
                setApiCall({ call: deleteCell })
                handleShow()
              }}
            >
              Delete Cell
            </Dropdown.Item>
          </DropdownButton>
        </Stack>
      </Card>
    )
  }, [])
  return <>{cellJSX}</>
}

export default Cell
