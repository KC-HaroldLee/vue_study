import axios from 'axios'

export default {
  methods: {
    async $api (url, method, data) {
      console.log('정보를 알려주지')
      console.log('url: ', url)
      console.log('method', method)
      console.log('data :', data)
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log('에러발생')
        console.log(e)
      }))
    }
  }
}
