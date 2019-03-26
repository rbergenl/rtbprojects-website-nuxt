<template>
  <no-ssr>
    <div class="wrapper">
      <Header />
      <nuxt />
      <Footer />
    </div>
  </no-ssr>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>
