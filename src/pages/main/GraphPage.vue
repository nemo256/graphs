<template>
  <div>
    <h1>graph {{ $route.params.graph.id }}</h1>
    <b-card align="center" class="card mx-auto mb-4">
      <network 
        class="network mx-auto mb-4"
        ref="network"
        :nodes="network.nodes"
        :edges="network.edges"
        :options="network.options"
      >
      </network>
      
      <b-button v-on:click="getInfo()" variant="primary">See Statistics</b-button>
    </b-card>
  </div>
</template>

<script>
let defNodes = [
  { id: 1, name: 1, tooltip: "Node 1" },
  { id: 2, name: 2, tooltip: "Node 2" },
]
let defEdges = [
  { id: 1, from: 1, to: 2 },
]

export default {
  name: 'GraphPage',
  data() {
    return {
      network: {
        nodes: defNodes,
        edges: defEdges,
        options: {
          manipulation: {
            enabled: true,
          },
          nodes: {
            shape: 'dot',
            size: 12,
            font: {
              color:'black'
            },
          }
        }
      }
    }
  },
  methods: {
    getInfo() {
      console.log(this.network.getSelection)
    },
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
