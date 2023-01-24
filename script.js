const { createApp } = Vue

createApp({
  data() {
    return {
      todos: [
        'Fare i compiti',
        'Fare la spesa',
        'Fare il bucato',
      ]
    }
  },
  methods: {
    removeToDo: function (index) {
        this.todos.splice(index, 1);
    }
  }
}).mount('#app');