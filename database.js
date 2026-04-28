const DB = {

    init(){
        if (!localStorage.getItem('produtos')) {
            const data = [
                { id: 1, nome: "Brigadeirão" , preco: 10, estoque: 8, categoria: "Ao Leite", avaliacoes: [3,4], desc: "Melhor brownie com brigadeiro de floripa!"},
                    {id: 2, nome: "Crocroc" , preco: 8, estoque: 20, categoria: "Choc Branco", avaliacoes: [5,2,4], desc: "Incrivel e crocante brownie branco com oreo!"},
                    {id: 3, nome: "Ninhozinho" , preco: 12, estoque: 18, categoria: "C/Frutas", avaliacoes: [5,5,4], desc: "Maravilhoso brownie de leite ninho com morango!"},
                
              
            ];
            localStorage.setItem('produtos', JSON.stringify(data));
        }
       if(localStorage.getItem('users')){
        localStorage.getItem('users', JSON.stringify([{user: "admin", pass: "123"}]));
       }

    },

    get(k) { return JSON.parse(localStorage.getItem(k)) || []; },
    set (k,v) {localStorage.getItem(k, JSON.stringify(v));}

};

DB.init();