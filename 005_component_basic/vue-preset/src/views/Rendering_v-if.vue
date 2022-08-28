<template>
<div>
  <h1 v-if="type=bRender">트룹니다</h1>
  <h1 v-if="type=bRender==false">폴습다</h1>
</div>
</template>
<script>
export default {
  data () {
    return {
      bRender: true
    }
  }
}
</script>
