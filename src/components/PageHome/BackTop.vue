<template>
  <a
    href="javascript: void(0);"
    class="btn btn-icon btn-primary back-to-top"
    id="back-to-top"
    v-scroll-to="'#topnav'"
  >
    <ArrowUpIcon class="icons" />
  </a>
</template>

<script>
import { ArrowUpIcon } from 'vue-feather-icons'
export default {
  name: 'BackTop',
  components: { ArrowUpIcon }
}
</script>
