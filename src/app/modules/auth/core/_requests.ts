import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return {
    data: {
      id: 2,
      first_name: 'Amani',
      last_name: 'Jakubowski',
      email: 'admin@demo.com',
      email_verified_at: '2023-01-25T12:13:02.000000Z',
      created_at: '2023-01-25T12:13:02.000000Z',
      updated_at: '2023-01-25T12:13:02.000000Z',
      api_token: '$2y$10$dtYPv.E0zua15DAvvvUQve0XdB77yo.4r.vMaiDOezKZrG7TugG9G',
    },
  };
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return {
    data: {
      id: 2,
      first_name: 'Amani',
      last_name: 'Jakubowski',
      email: 'admin@demo.com',
      username: 'admin@demo.com',
      password: '$2y$10$dtYPv.E0zua15DAvvvUQve0XdB77yo.4r.vMaiDOezKZrG7TugG9G',
      email_verified_at: '2023-01-25T12:13:02.000000Z',
      created_at: '2023-01-25T12:13:02.000000Z',
      updated_at: '2023-01-25T12:13:02.000000Z',
      api_token: '$2y$10$dtYPv.E0zua15DAvvvUQve0XdB77yo.4r.vMaiDOezKZrG7TugG9G',
    },
  };
}
