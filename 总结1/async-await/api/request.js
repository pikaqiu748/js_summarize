import axios from 'axios'

ERR_OK = 0
export function get (url) {
  return axios.get(params){
    return axios.get(url, { params })
      .then(res => {
        const { errno, data } = res.data

        if (errno == ERR_OK) {
          return res.data
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}