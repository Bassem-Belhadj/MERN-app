const mongoose =require('mongoose')

const ContactSchema = new mongoose.Schema ({
                
         nom :{
            type : String,
            require:true 
         },
         numero :{
            type : String,
            require:true 
         }
}, {timestamps :true})

module.exports = mongoose.model('contacts', ContactSchema)