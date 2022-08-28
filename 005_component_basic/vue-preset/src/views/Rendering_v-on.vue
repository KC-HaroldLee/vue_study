<template>
<div>
  <!--v-on 이벤트 처리 : click-->
  <button type="button" @click="increaseCnter">Add 1</button>
  <p>Counter is : {{cnt_v}}</p>
  <!-- 여전히 남아 있음-->
</div>
</template>
<script>
export default {
  data () {
    return {
      cnt_v: 0
    }
  },
  methods: {
    increaseCnter () {
      this.cnt_v = this.cnt_v + 1
    }
  }

}
</script>
