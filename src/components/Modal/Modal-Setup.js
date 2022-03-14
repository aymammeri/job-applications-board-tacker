import * as apiCrud from '../../api/crud'

import ModalBodyCreateEditColumn from './Modal-Body-Column-EditCreate'
import ModalBodyCreateEditCell from './Modal-Body-Cell-EditCreate'
import ModalBodyDelete from './Modal-Body-Delete'

const setupModal = modalType => {
  let modalTitle, modalBody, apiCall, buttonText, danger

  switch (modalType) {
  case 'create-column':
    modalTitle = 'New Column'
    buttonText = 'Create Column'
    modalBody = ModalBodyCreateEditColumn('Enter Name')
    apiCall = apiCrud.createColumn
    break
  case 'create-cell':
    modalTitle = 'New Cell'
    buttonText = 'Create Cell'
    modalBody = ModalBodyCreateEditCell('*')
    apiCall = apiCrud.createCell
    break
  case 'edit-column':
    modalTitle = 'Rename Column'
    buttonText = 'Submit'
    modalBody = ModalBodyCreateEditColumn('Enter New Name')
    apiCall = apiCrud.editColumn
    break
  case 'edit-cell':
    modalTitle = 'Edit Cell'
    buttonText = 'Submit'
    modalBody = ModalBodyCreateEditCell('')
    apiCall = apiCrud.editCell
    break
  case 'delete-column':
    modalTitle = 'Delete Column'
    buttonText = 'Confirm'
    modalBody = ModalBodyDelete(modalTitle)
    apiCall = apiCrud.deleteColumn
    danger = true
    break
  case 'delete-cell':
    modalTitle = 'Delete Cell'
    buttonText = 'Confirm'
    modalBody = ModalBodyDelete(modalTitle)
    apiCall = apiCrud.deleteCell
    danger = true
    break
  }
  return { modalTitle, modalBody, apiCall, buttonText, danger }
}

export default setupModal
