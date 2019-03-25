<template>
  <section id="projects" class="uk-section background-primary to-right uk-light">
    <div class="uk-container uk-text-center">
      <h2 class="uk-heading-divider">Projects</h2>
      <!-- <h3>Big projects</h3> -->
      <div uk-grid class="uk-child-width-1-1@s uk-child-width-1-2@m uk-text-center">
        <div v-for="project in bigProjects" :key="project.key">
          <div uk-lightbox uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            <div class="uk-inline uk-animation-toggle">
              <a class="uk-visible-toggle" v-bind:href="'/projects/' + project.key" data-type="iframe">
                <img v-bind:src="project.img_url" alt="">
                <div class="uk-light uk-overlay uk-overlay-primary uk-position-center uk-hidden-hover uk-animation-fade uk-animation-fast">
                    <p class="uk-animation-slide-bottom-small">{{project.title}}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <h3>Small projects</h3>
      <div uk-grid class="uk-child-width-1-4 uk-text-center">
        <div v-for="project in smallProjects" :key="project.key">
          <div uk-lightbox>
              <a class="uk-button" v-bind:href="'/projects/' + project.key" data-type="iframe">{{project.key}}</a>
          </div>
        </div>
      </div>

      <h3>Own projects</h3>
      <div uk-grid class="uk-child-width-1-4 uk-text-center">
        <div v-for="project in ownProjects" :key="project.key">
          <div uk-lightbox>
              <a class="uk-button" v-bind:href="'/projects/' + project.key" data-type="iframe">{{project.key}}</a>
          </div>
        </div>
      </div> -->

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['ownProjects', 'bigProjects', 'smallProjects'])
  },
  // methods: {
  //   getProjects(type) {
  //     const projects = this.$store.state.projects;
  //     let arr = new Array();
  //     for (let key in projects) {
  //       projects[key].key = key;
  //       if (projects[key].type === type) arr.push(projects[key]);
  //     }
  //     return arr;
  //   }
  // }
}
</script>
