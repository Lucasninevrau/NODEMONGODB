const mongoose = require('mongoose')

async function main(){
    try {
        await mongoose.connect('mongodb+srv://lucasnine:33715341@cluster0.5zr3qmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Banco OK');
        
    } catch (error) {
        console.log('Erro:'+ error);
        
    }
    
}
module.exports = main