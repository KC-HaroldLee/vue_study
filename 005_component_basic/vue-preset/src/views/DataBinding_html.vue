<template>
  <div>
      <div>{{htmlString}}</div>
      <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      htmlString: '<p style="color:red">This is red string</p>' // 여기서 data를 입력하는 구먼
    }
  }
}
</script>
