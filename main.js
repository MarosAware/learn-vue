Vue.component('modal', {
    template: `

    <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
            <div class="modal-content">
            <div class="box">

                <slot></slot>

            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `,

});








Vue.component('message', {
    props: ['title', 'body'],

    template: `
   <article class="message is-dark" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" aria-label="delete" @click="hideModal"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
   `,

    data() {

        return {

            isVisible: true

        };
    },


    // We can hide message by method, or direct in directive @click like: @click="isVisible = false";
    methods: {

        hideModal() {
            this.isVisible = false;
        }
    }




});





Vue.component('task-list', {
    template: `
    <ul>
        <task v-for="task in tasks" :key="task.id">{{ task.task }}</task>
    </ul>`,

    data() {
        return {

            tasks: [
                { id:1, task: 'Go to the store', complete: true },
                { id:2, task: 'Go to the shop', complete: false },
                { id:3, task: 'Go to the farm', complete: true },
                { id:4, task: 'Go to work', complete: false }
            ]


        };
    }

});


Vue.component('task', {
    template: '<li><slot></slot></li>',

    data() {
        return {

            message: 'Foobar'


        };
    }

});



var app = new Vue({
    el: '#root',
    data: {
        message: 'Hello World',
        isModalVisible: false

    },

    methods: {

    },
    //For any complex logic, you should use a computed property
    computed: {

    }
});