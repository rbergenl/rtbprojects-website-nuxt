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
  data() {
    return {
      title: 'Project'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
