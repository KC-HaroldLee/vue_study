<template>
<div>
  <!--v-on 이벤트 처리2 : key-->
  <input @keyup.enter="submit"/>
  <br>
  <input @keyup.enter="keyUpEnter()"/>
  <br>
  <input @keydown.down="KeyDwDown()" @keydown.up="KeyDwUp()"/>
  <!--이 외에도 esc나 del. bs 모두 가능-->
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    keyUpEnter () {
      alert('ENTER!')
    },
    KeyDwDown () {
      console.log('DOWN.....')
    },
    KeyDwUp () {
      console.log('UP.....')
    }
  }
}
</script>
