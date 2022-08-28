<template>
  <div>
    <!--Computed_fullname와 비교할 것-->
    <!--watch도 computed처럼 Vue 인스턴스에 정의된 데이터 값이 변경이 일어나는지를 감시하고 변경이 일어나면 함수가 실행된다..-->
    <!--그러니까 둘 다 반드시 변경이 있어야한다-->
    <h1>Full name : {{fullName}}</h1>
    <h3>Full name : {{firstName}} {{lastName}}</h3>
    <!-- 이 연산은 처음에 실행되는 것이 아닌 변경이 있어야한다.  -->
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
      fullName: '',
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
  watch: {
    firstName () {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  }
}
</script>
