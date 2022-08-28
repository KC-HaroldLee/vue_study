<template>
<div>
    <!-- <textarea>{{message}}</textarea> -->
    <!--  v-model 쓰라고 에러남 -->
    <textarea v-model="message"></textarea>
</div>
</template>
<script>
export default {
  data () {
    return {
      message: 'hello man'
    }
  }
}
</script>
