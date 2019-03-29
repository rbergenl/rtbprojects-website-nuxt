<template>
  <main class="home">
    <Usps />
    <Certificates />
    <Projects />
    <!-- <Skillmatrix /> -->
    <!-- <Testimonials /> -->
    <Contact />
  </main>
</template>

<script>
import Usps from '~/components/Usps';
import Certificates from '~/components/Certificates';
import Projects from '~/components/Projects';
import Skillmatrix from '~/components/Skillmatrix';
import Testimonials from '~/components/Testimonials';
import Contact from '~/components/Contact';

export default {
  components: {
    Usps,
    Certificates,
    Projects,
    Skillmatrix,
    Contact
  },
  created() {
    // fire the action to do the firebase call; and from in that action the mutation of state is commited.
    this.$store.dispatch('loadHomepage');
  }
}
</script>

<style>
</style>
