import apiUrl from '../apiConfig'
import axios from 'axios'

export const getBoard = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/board/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const getColumn = (data) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/column/' + data.id,
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  })
}

export const createColumn = (data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/column/',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data
  })
}

export const createCell = (data) => {
  return axios({
    url: apiUrl + '/cell/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data
  })
}

export const editColumn = (data) => {
  return axios({
    url: apiUrl + '/column/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data
  })
}

export const editCell = (data) => {
  return axios({
    url: apiUrl + '/cell/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${data.token}`
    },
    data
  })
}

export const deleteColumn = (data) => {
  return axios({
    url: apiUrl + '/column/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  })
}

export const deleteCell = (data) => {
  return axios({
    url: apiUrl + '/cell/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  })
}
