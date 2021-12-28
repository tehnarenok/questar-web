import ky from 'ky'

const server = ky.create({ prefixUrl: process.env.REACT_APP_SERVER_URL ?? '' })

export const refreshInterval = 2000

export const serverWithToken = () => {
  return ky.create({
    prefixUrl: process.env.REACT_APP_SERVER_URL ?? '',
    hooks: {
      beforeRequest: [
        (request) => {
          const token = localStorage.getItem('firebaseTokenId') ?? ''
          request.headers.set('authorization', token)
        },
      ],
    },
  })
}

export default server
