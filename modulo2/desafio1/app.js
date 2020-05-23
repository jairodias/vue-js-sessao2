new Vue({
  el: '#desafio',
  data:{
    imggoogle: 'https://img.fae.edu/galeria/getImage/362/6647525067944511.jpg',
    valor: 'Jairo Pereira Dias Júnior'
  },
  methods:{
    idadex3(idade){
      return idade * 3
    },

    random(){
      var randomico = Math.random();
      return randomico;
    },
    name(){
      return 'Jairo Pereira Dias Júnior'
    }
  }
})