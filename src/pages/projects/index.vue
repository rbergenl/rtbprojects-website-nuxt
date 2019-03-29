<template>
  <div>
    <h1>Products: {{title}}</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Product Overview'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
<style>
</style>
