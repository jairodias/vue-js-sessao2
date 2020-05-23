new Vue({
	el: '#app',
  data:{
  	titulo: 'Usando view JS'
  },
  methods: {
    alterarTitulo(event) {
      this.titulo = event.target.value
    }
  }
});
