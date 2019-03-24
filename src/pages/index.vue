<template>
  <main class="home">
    <Usps />
    <Certificates />
    <Projects />
  </main>
</template>

<script>
import Usps from '../components/Usps';
import Certificates from '../components/Certificates';
import Projects from '../components/Projects';

export default {
  components: {
    Usps,
    Certificates,
    Projects
  }
}
</script>

<style>
</style>
