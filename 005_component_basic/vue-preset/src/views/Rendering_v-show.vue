<template>
<div>
  <!--v-if 와 비교할것. i-if는 렌더링 되면서 사라짐 토글에 좋음-->
  <h1 v-show="vShow">트룹다 press"F12"</h1>
  <h1 v-show="vShow==false">폴습다</h1>
  <!-- 여전히 남아 있음-->
</div>
</template>
<script>
export default {
  data () {
    return {
      vShow: true
    }
  }
}
</script>
