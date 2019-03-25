<template>
  <main class="home">
    <Usps />
    <Certificates />
    <Projects />
    <!-- <Skillmatrix /> -->
    <Contact />
  </main>
</template>

<script>
import Usps from '~/components/Usps';
import Certificates from '~/components/Certificates';
import Projects from '~/components/Projects';
import Skillmatrix from '~/components/Skillmatrix';
import Contact from '~/components/Contact';

export default {
  components: {
    Usps,
    Certificates,
    Projects,
    Skillmatrix,
    Contact
  }
}
</script>

<style>
</style>
