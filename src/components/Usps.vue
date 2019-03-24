<template>
  <section class="usps uk-section uk-section-muted">
    <div class="uk-container uk-text-center">
      <h2 class="uk-heading-divider">Senior Full Stack Web Developer</h2>
      <h3>Experienced with Cloud, Frontend and Backend technology</h3>
      <div uk-grid class="uk-child-width-expand@s uk-text-center">
        <div v-for="usp in usps" class="uk-animation-toggle">
          <span class="uk-animation-scale-up uk-box-shadow-small" v-bind:uk-icon="'icon: ' + usp.icon + '; ratio: 4'"></span>
          <h4>{{usp.title}}</h4>
          <p>
            {{usp.text}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['usps'])
  }
}
</script>
