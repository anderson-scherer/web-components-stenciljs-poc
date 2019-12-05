<template>
  <div id="app">
     <hello-world></hello-world>
     <tag-accordion
      v-for="item in loopvariaveis" :key="item.id"
      :label="item.label"
      :description="item.description"
      :color="item.color"
      :width="item.width">
    </tag-accordion>
  </div>
</template>

<script>
import { HelloWorld } from '@andersonscherer/web-components-uni'

export default {
  name: 'app',
  components: {
    HelloWorld
  },

  data() {
    return {
       loopvariaveis: [
          {
            id: 1,
            width: '800px',
            color: 'purple',
            label: 'Lorem Ipsum',
            description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
          },
          {
            id: 2,
            width: '800px',
            color: 'aquamarine',
            label: 'Lorem Ipsum - 1',
            description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
          }
        ],
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
  justify-content: center;
    flex-direction: column;
    align-content: center;
    margin: 0 auto;
  display: flex;
}
</style>
