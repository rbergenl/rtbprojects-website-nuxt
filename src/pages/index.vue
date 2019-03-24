<template>
  <main class="home">
    <Usps />
    <Certificates />
    <Projects />
    <Contact />
  </main>
</template>

<script>
import Usps from '~/components/Usps';
import Certificates from '~/components/Certificates';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';

export default {
  components: {
    Usps,
    Certificates,
    Projects,
    Contact
  }
}
</script>

<style>
</style>
