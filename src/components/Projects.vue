<template>
  <section id="projects" class="uk-section background-primary to-right uk-light">
    <div class="uk-container uk-text-center">
      <h2 class="uk-heading-divider">Projects</h2>
      <!-- <h3>Big projects</h3> -->
      <div class="uk-grid uk-child-width-1-1@s uk-child-width-1-2@m uk-text-center">
        <div v-for="project in projects" :key="project.id">

          <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            <div class="uk-inline uk-animation-toggle">
              <a uk-toggle class="uk-visible-toggle" :href="'#' + project.id" >
                <img v-bind:src="project.img_url" alt="">
                <div class="uk-light uk-overlay uk-overlay-primary uk-position-center uk-hidden-hover uk-animation-fade uk-animation-fast">
                    <p class="uk-animation-slide-bottom-small">{{project.title}}</p>
                </div>
              </a>
            </div>
          </div>

          <div :id="project.id" uk-modal>
            <div class="uk-modal-dialog">

                <button class="uk-modal-close-default" type="button" uk-close></button>

                <div class="uk-modal-header">
                  <h2 class="uk-modal-title" v-if="project.company">{{project.company}}</h2>
                </div>

                <div class="uk-modal-body" uk-overflow-auto>
                  <ul class="uk-list checkmarks" v-html="project.checkmarks"></ul>
                  <blockquote cite="#" v-if="project.paragraphs" v-for="paragraph in project.paragraphs">
                      <p class="uk-margin-small-bottom" v-html="paragraph.text"></p>
                      <footer v-html="paragraph.footer"></footer>
                  </blockquote>
                  <div class="uk-text-center uk-margin-top">[end]</div>
                </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['projects'])
  },
  updated() {
    if (process.client) {
      // add checkmark icons to the list items
      const iconElm = document.createElement('span');
      iconElm.setAttribute('uk-icon', 'icon: check; ratio: 1');
      iconElm.classList.add('uk-margin-small-right');
      const listItems = document.querySelectorAll('#projects .checkmarks > li');
      for (let listItem of listItems) {
        listItem.insertBefore(iconElm.cloneNode(true), listItem.childNodes[0]);
      }
    }
  }
}
</script>

<style scoped>
p {
  font-style: normal
}
.uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve) {
  stroke: green;
  stroke-width: 2;
}
</style>
