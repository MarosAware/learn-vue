Vue.component('tabs', {
    template: `
<div>

<div class="tabs">
  <ul>
  
    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
    </li>
    
  </ul>
</div>

<div class="tabs-detailed">
    <slot></slot>
</div>

</div>
    `,

    data() {
        return {
            tabs: []
        };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {

        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
               tab.isActive = (tab.name == selectedTab.name);
            });
        }

    }



});


Vue.component('tab', {
    props: {
        name: {required: true},
        selected: { default: false }
    },

    data() {

        return {
            isActive: false
        };
    },

    computed: {

        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }


    },

    // Mounted function will be called when loading component, here we have access to all elements( this === tab )
    // and each one has prop name, selected and data isActive property
    // console.log(this) will display all of the components (tab)

    mounted() {
         console.log(this.name);

         this.isActive = this.selected;

    },

    template: `
        <div v-show="isActive"><slot></slot></div>
    `
});










let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World'
    }
});