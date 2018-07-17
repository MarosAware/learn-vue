Vue.component('task', {
    template: '<li><slot></slot></li>'

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
    },

    methods: {

    },
    //For any complex logic, you should use a computed property
    computed: {

    }
});