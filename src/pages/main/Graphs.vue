<template>
  <div>
    <h3>Graphs</h3>
    <div class="card">
      <div class="card-header">
        Add a new graph
      </div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>ID</label>
            <input v-model="graphData.graph_id" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input v-model="graphData.graph_name" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input v-model="graphData.graph_description" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
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
                {{ graph.graph_id }}
              </td>
              <td>
                {{ graph.graph_name }}
              </td>
              <td>
                {{ graph.graph_description }}
              </td>
              <td>
                {{ graph.graph_created_at }}
              </td>
              <td>
                {{ graph.graph_updated_at }}
              </td>
              <td>
                <a href="#" class="icon">
                  <i class="fa fa-trash"></i>
                </a>
                <a href="#" class="icon">
                  <i class="fa fa-pencil"></i>
                </a>
                <router-link 
                  :to="{
                    name: 'GraphPage', 
                    params: {id: graph.id}
                  }" 
                  class="icon"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
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
        'graph_id': '',
        'graph_name': '',
        'graph_description': '',
        'graph_created_at': '',
        'graph_updated_at': ''
      },
      editGraphData: {
        'id': '',
        'graph_id': '',
        'graph_name': '',
        'graph_description': '',
        'graph_created_at': '',
        'graph_updated_at': ''
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
            graph_id: '11',
            graph_name: 'Some Graph',
            graph_description: 'This is an example graph',
            graph_created_at: 'Day',
            graph_updated_at: 'Dayy'
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
      this.graphData.graph_created_at = dateTime
      this.graphData.graph_updated_at = dateTime
      this.graphs.push(this.graphData).then(this.getGraphs)
      this.graphData.id = ''
      this.graphData.graph_id = ''
      this.graphData.graph_name = ''
      this.graphData.graph_description = ''
    }
  },
}
</script>

<style>
h3{
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
