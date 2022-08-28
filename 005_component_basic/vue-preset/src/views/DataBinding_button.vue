<template>
<div>
  <input type='text' v-model="text_V"/>
  <button type="button" v-bind:disabled="text_V==''">click?</button>
</div>
</template>
<script>
export default {
  data () {
    return {
      text_V: ''
    }
  }
}
</script>
