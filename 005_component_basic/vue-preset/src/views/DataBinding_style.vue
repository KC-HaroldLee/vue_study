<template>
  <div v-bind:style='styleObject'>인라인 스타일 바인딩</div>
</template>
<script>
export default {
  data () {
    return {
      styleObject: {
        // 재밌군... 여긴 세미콜론이 아니다.
        color: 'red',
        fontSize: '13px'
      }
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
