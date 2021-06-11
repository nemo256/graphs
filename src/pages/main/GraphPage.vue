<template>
  <h1>GraphPage {{ params.id }}</h1>
</template>

<script>
export default {
  name: 'GraphPage',
  data() {
    return {
      graphId: '',
      graphName: '',
      loaded: false
    }
  }
}
</script>

<style>
</style>
