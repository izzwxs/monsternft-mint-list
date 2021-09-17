<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Card />
    <BackTop />
  </div>
</template>

<script>
import { Navbar, Hero, Card, BackTop } from '@/components'
export default {
  name: 'Home',
  components: { Navbar, Hero, Card, BackTop },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
