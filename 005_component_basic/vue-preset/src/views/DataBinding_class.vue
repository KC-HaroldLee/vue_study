<template>
  <div class="container" v-bind:class="
    {
      'active': isActive,
      'red-text': hasError
    }">Class Binding</div>
</template>
<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false
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
