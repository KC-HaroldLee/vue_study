<template>
  <div class="container" v-bind:class="
  [
    activateClass,
    errorClass
  ]">Class Binding2</div>
</template>
<script>
export default {
  data () {
    return {
      activateClass: 'active',
      errorClass: 'red-text'
    }
  }
}
</script>
<style scoped>
  /* '.'을 쓰지 않는다 */
  container{
    width:100%;
    height: 200px;
  }

  /* 하지만 v-bind로 묶인 곳은 '.'을 쓴다 */
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .red-text{
    color: red;
  }

</style>
