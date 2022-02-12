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

export const getColumn = (user, data) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/column/' + data.id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const createColumn = (user, data) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/column/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data
  })
}

export const createCell = (user, data) => {
  return axios({
    url: apiUrl + '/cell/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data
  })
}

export const editColumn = (user, data) => {
  return axios({
    url: apiUrl + '/column/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data
  })
}

export const editCell = (user, data) => {
  return axios({
    url: apiUrl + '/cell/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data
  })
}

export const deleteColumn = (user, data) => {
  return axios({
    url: apiUrl + '/column/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteCell = (user, data) => {
  return axios({
    url: apiUrl + '/cell/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
