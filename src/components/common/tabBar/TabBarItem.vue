<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <div v-if="!isActive">
      <slot name="tab-bar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-icon-active"></slot>
    </div>
    <div :style="isStyle">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    tabBarClick() {
      this.$router.push(this.link)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.link)
    },
    isStyle() {
      return this.isActive ? {color: 'red'} : ''
    }
  }
}
</script>

<style scoped>
</style>