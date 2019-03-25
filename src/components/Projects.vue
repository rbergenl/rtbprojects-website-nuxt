<template>
  <section id="projects" class="uk-section background-primary to-right uk-light">
    <div class="uk-container uk-text-center">
      <h2 class="uk-heading-divider">Projects</h2>
      <!-- <h3>Big projects</h3> -->
      <div uk-grid class="uk-child-width-1-4 uk-text-center">
        <div v-for="project in bigProjects" :key="project.key">
          <div uk-lightbox>
              <a class="uk-button" v-bind:href="'/projects/' + project.key" data-type="iframe">{{project.key}}</a>
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
