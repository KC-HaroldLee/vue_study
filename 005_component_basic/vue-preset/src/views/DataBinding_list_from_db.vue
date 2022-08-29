<template>
<div>
  <table>
    <thead>
      <tr>
        <td>순번</td>
        <td>이름</td>
        <td>나이</td>
      </tr>
    </thead>
    <tbody>
      <tr :key='i' v-for='(user, i) in userList'>
        <td>{{i}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import mixins from '../mixins'
export default {
  data () {
    return {
      userList: []
    }
  },
  created () {
    console.log('created!')
    this.getList()
  },
  methods: {
    hllthtCall () {
      console.log('HEY')
    },
    async getList () {
      // this.userList = await mixins.methods.$api('http://localhost:5000/', 'get')
      const RESDATA = await mixins.methods.$api('http://localhost:5000/', 'get')
      this.userList = RESDATA.data
      // 재정의 문제가 시급
    }
  }
}
</script>
