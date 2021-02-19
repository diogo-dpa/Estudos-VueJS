new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: ''
    },

    computed : {
        resultado(){
            return this.valor === 37 ? 'Valor igual': 'Valor diferente';
        }
    },

    watch:{
        resultado(newValue, oldValue){  // Podemos também monitorar uma variável computada
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
    }
});