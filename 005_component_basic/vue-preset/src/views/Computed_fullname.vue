<template>
  <div>
    <!--computed는 데이터 값에 변이이 일어나는지 감시한다.-->
    <h1>Full name : {{fullName}}</h1>
    <h3>Full name : {{firstName}} {{lastName}}</h3>
    <!-- 이 연산은 한 번만 일어난다.  -->
    <!-- 하지만, 데이터 값아 변경이 일어나는지 감시한다.  -->
    <!-- fullName()함수는 처음만 호출되는 것이 아니라 감지하는 데이터가 변경 될때마다 실행된다. -->
    <!-- fullName().은 함수이자 동시에 Vue의 인스턴스 데이터이다. -->
    <!-- 함수를 이용해서 fullName을 계산하는 경우는 firstName 혹으 lastName에 변이이 일어났을 때를 감지할 수 없다 -->
    <br>
    <button type="button" @click="changeName_1()">click</button>
    <button type="button" @click="changeName_2()">click</button>
    <br>
    <p>깜빡이 : {{colorBool}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      firstName: 'Halold',
      lastName: 'Lee',
      colorBool: true
    }
  },
  methods: {
    changeName_1 () {
      this.firstName = 'SH'
      this.colorBool = !this.colorBool
    },
    changeName_2 () {
      this.firstName = 'Halold'
      this.colorBool = !this.colorBool
    }
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>
