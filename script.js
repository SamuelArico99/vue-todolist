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
    },
    addToDo: function () {
        if (this.newToDo != '') {
            this.todos.push(this.newToDo);
            this.newToDo = '';
        }


    },
    addClass: function () {
        let line = document.getElementById("line");
        line.classList.add("text-decoration");
    }
  }
}).mount('#app');