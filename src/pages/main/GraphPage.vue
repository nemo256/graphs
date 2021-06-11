<template>
  <div>
    <h1>graph {{ $route.params.id }}</h1>
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

export default {
  name: 'GraphPage',
  data() {
    return {
      nodes: [],
      edges: [],
      network: {
        options: {
          manipulation: {
            enabled: true,
          },
          nodes: {
            shape: 'dot',
            size: 12,
            color: {
              border: 'grey',
              
              highlight: {
                border: 'blue',
                background: 'grey'
              },
              hover: {
                border: 'orange',
                background: 'grey'
              }
            },
            font: {
              color:'white'
            },
          }
        }
      }
    }
  },
  methods: {
    getInfo() {
      console.log('asd')
    }
  }
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
