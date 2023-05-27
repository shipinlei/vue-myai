<template>
  <div v-for="(item,index) in navlist" :key="index">
    <nav-list-item :itemContent="item"></nav-list-item>
  </div>
</template>

<script>
import NavListItem from "@/views/home/components/NavListItem.vue";

export default {
  name: "NavList",
  props: ['navlist'],
  components: {
    NavListItem
  }
};
</script>

<style scoped>

</style>
