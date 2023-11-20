const express = require('express')
const app = express()
const ContactModel = require ('./Models/contact')
const mongoose= require('mongoose')
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

  app.post('/contact/ajouter', (req, res) => {
      constObj ={
          nom :req.body.nom,
          numero : req.body.numero
      }
      const contact = new ContactModel(constObj)
      
      //insert data base in distance 
      contact.save ((error,createdContact) => {
      if (error) return res.status(400).json({error})
      if (createdContact){
        return res.status(200).json({createdContact})
      }
      })
    
    //res.status(200).json({message : "donne ajouter"});
  })
  app.get('/contact/modifier', (req, res) => {
    res.send('corps de la fonction modifier contact');
  })
  app.get('/contact/:id/suprimer', (req, res) => {
    const param = req.params.id; 
    console.log(param); 
  
    
    //res.send('corps de la fonction suprimer contact');
  
  })
  app.get('/contact/Lister', (req, res) => {
    
    //res.send('corps de la fonction lister contact');
    
    ContactModel.find({}).exec((error,contactList) =>{
      if (error) return res.status(400).json({error})
      if (contactList) {
        return res.status(200).json({contactList})
      }
    })

  })
  mongoose.connect('mongodb://127.0.0.1:27017/merncoursedb' ,{
    useNewUrlParser:true,
  }
  )
  const db = mongoose.connection;

  db.on ('error', console.error.bind(console,'connection error') )
  db.once('open', function() {
  console.log('database connected successfully')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

