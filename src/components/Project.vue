<template>
  <section id="project" class="uk-section">
  <div class="uk-container">
    <h2 v-if="project.company">{{project.company}}</h2>
    <ul class="uk-list checkmarks" v-html="project.checkmarks"></ul>
    <blockquote cite="#" v-if="project.paragraphs" v-for="paragraph in project.paragraphs">
        <p class="uk-margin-small-bottom" v-html="paragraph.text"></p>
        <footer v-html="paragraph.footer"></footer>
    </blockquote>
  </div>
  <div class="uk-container uk-container-center uk-text-center uk-margin-top">[end]</div>
</section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
     project() {
       return this.$store.state.projects[this.$route.params.id]
     }
  },
  mounted: () => {
    if (process.client) {
      // add checkmark icons to the list items
      const iconElm = document.createElement('span');
      iconElm.setAttribute('uk-icon', 'icon: check; ratio: 1');
      iconElm.classList.add('uk-margin-small-right');
      const listItems = document.querySelectorAll('#project .checkmarks > li');
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
</style>
