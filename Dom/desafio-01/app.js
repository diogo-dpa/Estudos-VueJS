
new Vue({
    el: '#desafio',
    data: {
        nome: 'Diogo',
        idade: 25,
        linkImagemGoogle: 'https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/02/Top-10-Melhores-Praias-Brasil-Capa-2.jpg',
    },
    methods: {
        idadeMultiplicadaPor3 : function(){
            return this.idade*3;
        },
        exibeNumeroRandomico: function(){
            return Math.random().toFixed(2);
        }
    }
})