<template>
  <div>
    <noscript>
      Please enable Javascript to view this website
    </noscript>
    <no-ssr>
      <div class="wrapper">
        <Header />
        <nuxt />
        <Footer />
      </div>
    </no-ssr>
    <script>

    </script>
  </div>
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
