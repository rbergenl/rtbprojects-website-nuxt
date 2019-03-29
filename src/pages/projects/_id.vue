<template>
  <!-- <Project /> -->
</template>

<script>
import Project from '~/components/Project';

export default {
  layout: 'project',
  components: {
    Project
  },
  async asyncData({ req, res, params }) {
    return new Promise((resolve, reject) => {
      // pretend to wait 500ms from the server
      setTimeout(() => {
        resolve({
          slug: 'Project: ' + params.id
        });
      }, 500)
    })
  },
  head () {
    return {
      title: this.slug,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
