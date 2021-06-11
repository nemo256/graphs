<template>
  <div>
    <h1>Graphs</h1>
    <div class="card">
      <div class="card-header">
        Add a new graph
      </div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>ID</label>
            <input v-model="graphData.id" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input v-model="graphData.name" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input v-model="graphData.description" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Add</button>
          </div>
        </form>
      </div>
    </div>

  <div class="card mt-5">
    <div class="card-header">
      Graph List
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                ID
              </th>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
              <th>
                Created At
              </th>
              <th>
                Updated At
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="graph in this.graphs">
              <td>
                {{ graph.id }}
              </td>
              <td>
                {{ graph.name }}
              </td>
              <td>
                {{ graph.description }}
              </td>
              <td>
                {{ graph.created_at }}
              </td>
              <td>
                {{ graph.updated_at }}
              </td>
              <td>
                <router-link 
                  :to="{
                    name:'GraphPage', 
                    params: { id: graph.id }
                  }" 
                  class="icon"
                >
                  <font-awesome-icon icon="eye" />
                </router-link>
                <router-link 
                  :to="{
                    name: 'GraphPageEdit', 
                    params: {id: graph.id}
                  }" 
                  class="icon"
                >
                  <font-awesome-icon icon="pencil-alt" />
                </router-link>
                <a href="#" class="icon">
                  <font-awesome-icon v-on:click="onDelete(graph.id)" icon="trash-alt" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Graphs',
  data() {
    return {
      editId: '',
      graphData: {
        'id': '',
        'name': '',
        'description': '',
        'created_at': '',
        'updated_at': '',
        'nodes': [],
        'edges': []
      },
      graphs: []
    } 
  },
  mounted() {
    if (localStorage.graphs)
      this.graphs = JSON.parse(localStorage.graphs)
  },
  watch: {
    graphs: {
      handler(newGraphs) {
        localStorage.graphs = JSON.stringify(newGraphs)
      },
      deep: true
    }
  },
  created() {
    this.getGraphs()
  },
  methods: {
    getGraphs() {
      if (!localStorage.graphs)
        // Dummy data:
        this.graphs = [
          {
            id: '1',
            name: 'Some Graph',
            description: 'This is an example graph',
            created_at: '2021-6-11 12:26:29',
            updated_at: '2021-6-11 12:26:29',
            nodes: [],
            edges: []
          }
        ]

      this.graphs = JSON.parse(localStorage.graphs)
    },
    onSubmit() {
      // Extracting date + time
      let now = new Date();
      let Day = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
      let Time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      let dateTime = Day + ' ' + Time;
      this.graphData.created_at = dateTime
      this.graphData.updated_at = dateTime
      this.graphs.push(this.graphData).then(this.getGraphs)
      this.graphData.id = ''
      this.graphData.name = ''
      this.graphData.description = ''
      this.graphData.created_at = ''
      this.graphData.updated_at = ''
    },
    onDelete(id) {
      for (let i = 0; i < this.graphs.length; i++)
        if (this.graphs[i].id == id)
          this.graphs.splice(i, 1)

      console.log(this.graphs)
    }
  },
}
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon{
  margin-right: 10px;
}
.icon i{
  cursor: pointer;
}
</style>
