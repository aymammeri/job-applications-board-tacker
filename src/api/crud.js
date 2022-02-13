import apiUrl from '../apiConfig'
import axios from 'axios'

//  CREATE
export const createColumn = apiData => {
  return axios({
    method: 'POST',
    url: apiUrl + '/column/',
    headers: {
      Authorization: `Bearer ${apiData.token}`
    },
    data: {
      elementId: apiData.elementId,
      form: apiData.form
    }
  })
}

//  CREATE
export const createCell = apiData => {
  return axios({
    url: apiUrl + '/cell/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiData.token}`
    },
    data: {
      elementId: apiData.elementId,
      form: apiData.form
    }
  })
}

//  EDIT
export const editColumn = apiData => {
  return axios({
    url: apiUrl + '/column/' + apiData.elementId,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${apiData.token}`
    },
    data: {
      elementId: apiData.elementId,
      form: apiData.form
    }
  })
}

// EDIT
export const editCell = apiData => {
  return axios({
    url: apiUrl + '/cell/' + apiData.elementId,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${apiData.token}`
    },
    data: {
      elementId: apiData.elementId,
      form: apiData.form
    }
  })
}

// DELETE
export const deleteColumn = apiData => {
  return axios({
    url: apiUrl + '/column/' + apiData.elementId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${apiData.token}`
    }
  })
}

// DELETE
export const deleteCell = data => {
  return axios({
    url: apiUrl + '/cell/' + data.elementId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  })
}

// SHOW
export const getBoard = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/board/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// SHOW
export const getColumn = apiData => {
  return axios({
    method: 'GET',
    url: apiUrl + '/column/' + apiData.elementId,
    headers: {
      Authorization: `Bearer ${apiData.token}`
    }
  })
}
