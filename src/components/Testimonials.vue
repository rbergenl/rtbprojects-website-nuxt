<template>
  <section id="testimonials" class="uk-section uk-section-muted">
    <div class="uk-container uk-text-center uk-container-xsmall">
      <h2>Testimonials</h2>
      <div v-for="testimonal in testimonials" class="uk-text-center uk-margin-large-bottom">
        <div class="uk-position-relative message">
            {{testimonal.text}}
        </div>
        <p>{{testimonal.name}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['testimonials'])
  }
}
</script>

<style scoped>
.message {
    padding: 20px;
    color: #666;
    font-size: 16px;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
}

.message:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -15px;
    margin: auto;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-top: 21px solid #fff;
}
</style>
