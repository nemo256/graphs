<template>
  <div>
    <h1>Edit {{ $route.params.graph.id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'GraphEditPage',
  data() {
    return {
    }
  },
};
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.network{
  height: 500px;
  width: 700px;
  border-style: solid;
}
</style>
