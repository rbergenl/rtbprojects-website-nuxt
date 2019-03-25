<template>
  <div class="uk-container">
    <h2 v-if="project.title">{{project.title}}</h2>
    <div v-html="project.description"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
     project() {
       return this.$store.state.projects[this.$route.params.id]
     }
  }
}
</script>
