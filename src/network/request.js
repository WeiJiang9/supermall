import axios from 'axios'

export default function require(config) {
  const instance = axios.create({
    timeout: 5000
  })
  return instance(config)
}
