Vue.component('progress-view', {

    data() {
        return {
            completionRate: 0
        }
    }

});



Vue.component('modal', {
   template: `
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
      
      <slot name="header"></slot>
      
      </p>
      <button class="delete" aria-label="close" @click="$emit('close')"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
      
      <slot></slot>
      
    </section>
    <footer class="modal-card-foot">
      
      <slot name="footer"></slot>
      
    </footer>
  </div>
</div>
   `
});



let app = new Vue({
    el: '#app',
    data: {
        isModalVisible: false
    }
});


