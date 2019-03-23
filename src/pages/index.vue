<template>
  <Home />
</template>

<script>
import Home from '../components/Home';
//import { mapGetters } from 'vuex';

export default {
  components: {
    Home
  },
  // async mounted() {
  //    await Promise.all([
  //      this.$store.dispatch('INIT_CERTIFICATES')
  //    ])
  // },
  // computed: {
  //   ...mapGetters(['certificates'])
  // }
}
</script>

<style>
</style>
