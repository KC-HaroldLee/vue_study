<template>
<div>
  <img v-bind:src="imgSrc">
  <!-- attd은 v-vind:{디렉티브}로 쓰인다. cpp 패키지와 모양만 비슷-->
</div>
</template>
<script>
export default {
  data () {
    return {
      imgSrc: 'https://vuejs.org/images/partners/passionatepeople-hero.jpg'
    }
  }
}
</script>
