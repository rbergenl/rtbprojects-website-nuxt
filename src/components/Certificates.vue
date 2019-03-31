<template>
  <section id="certificates" class="uk-section">
    <div class="uk-container">
      <h2 class="uk-heading-divider uk-text-center">Certificates</h2>
      <div uk-slider="autoplay: true; autoplay-interval: 3000">
        <div class="uk-position-relative" tabindex="-1">
            <div class="uk-slider-container">
              <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                  <li v-for="cert in certificates">
                    <div class="uk-card uk-card-default uk-text-center">
                        <div class="uk-card-media-top">
                            <img v-bind:src="cert.img_url" alt="">
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">{{cert.title}}</h3>
                        </div>
                    </div>
                  </li>
              </ul>
            </div>
            <a class="uk-position-center-left uk-position-small" href="#" rel="noopener nofollow" uk-slidenav-previous uk-slider-item="previous" aria-label="previous"></a>
            <a class="uk-position-center-right uk-position-small" href="#" rel="noopener nofollow" uk-slidenav-next uk-slider-item="next" aria-label="next"></a>
        </div>
        <!-- <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // get the actual state and as computed update here when state is updated after loading
    ...mapGetters(['certificates'])
  },
}
</script>

<style scoped>
img {
  height:150px;
}
</style>
