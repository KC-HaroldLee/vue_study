<template>
<div>
  <!--v-on 이벤트 처리2 : change-->
  <select v-model="selected_v" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>
</div>
</template>
<script>
export default {
  data () {
    return {
      selected_v: ''
    }
  },
  methods: {
    changeSelect () {
      // const here = this.selected_v
      var here = this.selected_v
      alert(here)
      here = '뭐여'
      alert(here)
    }
  }
}
</script>
