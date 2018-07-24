Vue.component('todo-item', {
    template: '\
    <li>\
      {{ id }}.{{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
    props: ['title', 'id']
})

var app = new Vue({
    el: '#app',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            let lastId = this.todos[this.todos.length -1].id;

            let newId = lastId + 1;

            this.todos.push({
                id: newId,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})


