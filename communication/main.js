//ES6

// window.Event = new class {
//     constructor() {
//         this.vue = new Vue();
//     }
//
//
//     fire(event, data = null) {
//         this.vue.$emit(event, data);
//     }
//
//     listen(event, callback) {
//         this.vue.$on(event, data);
//     }
// };


window.Event = new Vue();



Vue.component('coupon',{
    template: `
        <input placeholder="Enter your coupon code" @blur="onCouponApplied">
    `,


    methods: {
        onCouponApplied() {
            // this.$emit('applied');
            Event.$emit('applied');
        }
    }
});



let app = new Vue({
    el: '#app',
    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    },

    created() {
        Event.$on('applied', () => alert('Handling it!'));
    }
});


