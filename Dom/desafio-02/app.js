new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        botaoClicado(){
            alert('Botão clicado! Parabéns!!')
        },
        armazenaValor(event){
            this.valor = event.target.value;
        }
    }
})