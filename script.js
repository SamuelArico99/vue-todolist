const { createApp } = Vue

createApp({
  data() {
    return {
      newToDo: '',
      todos: [
      {
        text: 'Fare i compiti',
        done: false
      },
      {
        text: 'Fare la spesa',
        done: true
      },
      {
        text: 'Fare il bucato',
        done: false
      }

    ]
    }
  },
  methods: {
    checkdone: function (todo) {
      if (todo.done) {
        return 'text-decoration';
      }
      else {
        return '';
      }
    },
    removeToDo: function (index) {
      console.log(index);
      this.todos.splice(index, 1)
    },
    addToDo: function () {
      const newObjTodo = {
        text: this.newToDo,
        done:false
      };
      this.todos.push(newObjTodo);
    }
  }
}).mount('#app');