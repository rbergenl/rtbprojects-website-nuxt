<template>
  <section id="usps" class="uk-section uk-section-muted">
    <div class="uk-container uk-text-center">
      <div uk-grid class="uk-child-width-expand@s uk-text-center">
        <div v-for="usp in usps" class="uk-animation-toggle">
          <div class="usp-icon uk-box-shadow-small uk-border-circle uk-animation-scale-up">
            <span v-bind:uk-icon="'icon: ' + usp.icon + '; ratio: 4'"></span>
          </div>
          <h4>{{usp.title}}</h4>
          <ul class="uk-list" v-html="usp.text"></ul>
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
  },
  mounted: () => {
    if (process.client) {
      const iconElm = document.createElement('span');
      iconElm.setAttribute('uk-icon', 'icon: check; ratio: 1');
      iconElm.classList.add('uk-margin-small-right');
      const listItems = document.querySelectorAll('#usps li');
      for (let listItem of listItems) {
        listItem.insertBefore(iconElm.cloneNode(true), listItem.childNodes[0]);
        // UIkit.icon(iconElm, {
        //   icon: 'check'
        // });
        // UIkit.icon(listItems).svg.then(function(svg) { console.log(svg) })
      }
    }
  }
}
</script>

<style scoped>
.usp-icon {
  height: 120px;
  width: 120px;
  display: inline-block;
}
[uk-icon] {
  margin-top: 20px;
}
polyline[stroke='#000'] {
  stroke: green;
}
.uk-icon:not(.uk-preserve) [stroke*='#']:not(.uk-preserve) {
  stroke: green;
  stroke-width: 2;
}

</style>
