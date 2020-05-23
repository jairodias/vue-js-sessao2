new Vue({
  el: '#app',
  data: {
    titulo: 'Usando vue js',
    link: 'http://google.com.br',
    linkHtml: '<a href="http://google.com.br">Google</a>'
  },
  methods:{
    saudacao(){
      this.titulo = "Bom dia !"
      return this.titulo
    }
  }
})

/**
 * v-once =  não fica monitorando as alterações
 * v-bind:href = coloca link na tag <a href="">
 * v-html = Entende HTML
 * 
 * 
 */