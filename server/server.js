const express = require('express')
const app = express()
const port = 8080;
var cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const emloyeeModel = require('./Models/employee.model')
const employerModel = require('./Models/employer.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const services = require ('./Models/services.model');
const servicesModel = require('./Models/services.model');
const vacanciesModel = require('./Models/vacancies.model')
const blogModel = require('./Models/blog.model')
const PriceModel = require('./Models/price.model');
const ourTeamModel = require('./Models/ourteam.model')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// mongoose connected

mongoose.connect('mongodb+srv://Babakazimov:Babakazimov2002@players.pxnytuh.mongodb.net/?retryWrites=true&w=majority').then(() => {
  console.log('Mongo DB connected');
})


//verify JWT
const verifyJWT = (req,res,next)=>{
  const token = req.headers['x-access-token'];
  if (!token) {
      res.json({message: 'you need token to get data!'})
  }
  else{
      jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
          if (err) {
              res.json({auth: false,message: 'authentication failed'});
          }
          else{
              req.userId = decoded.id;
              next();
          }
      })
  }
}




// REGISTEER FOR EMPLOYEE
app.post('/api/register/employee', async (req, res) => {
  const { name, username, surname, age, password, email, category } = req.body;
  const existedMail = await emloyeeModel.findOne({ email: email })
  const existedUsername = await emloyeeModel.findOne({ username: username })
  if (existedMail) {
    res.json({ message: 'email already used!' })
  }

  if (existedUsername) {
    res.json({ message: 'username already used!' })
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPasword = await bcrypt.hash(password, salt)


  const newEmpoyee = new emloyeeModel({
    name: name,
    username: username,
    surname: surname,
    age: age,
    password: hashedPasword,
    email: email,
    category: category,
    
  })
  await newEmpoyee.save();
  res.json({ message: 'user register succesfuly!' })
})


// REGISTER FOR EMPLOYER

app.post('/api/register/employer', async (req,res)=>{
  const {companyName , email , password} = req.body;
  const existedEmail = await employerModel.findOne({email : email});
  const exittedCompanyName = await employerModel.findOne({companyName : companyName});
  if (existedEmail) {
    res.json({message : 'email already used!'})
  }
  if (exittedCompanyName) {
    res.json({message : 'Company Name already used!'})
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPasword = await bcrypt.hash(password, salt)

  const newEmpoyer = new employerModel({
    companyName : companyName,
    password: hashedPasword,
    email: email
    
    
  })
  await newEmpoyer.save();
  res.json({ message: 'user register succesfuly!' })
})



// LOGIIN 

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const existedEmail = await emloyeeModel.findOne({ email: email });
  const existedEmaill = await employerModel.findOne({email:email});
  // const existedPassword = await emloyeeModel.findOne({ password: password });

  if (!existedEmail &&  !existedEmaill) {
    res.json({ auth: false, message: 'user not found!' })
  }
  else{

    if (existedEmail) {
      const isValid = await bcrypt.compare(password, existedEmail.password);
      const id = existedEmail._id;
      //username password + 
      //access token - JWT
      //refresh token
      const token = jwt.sign({id}, "Metalica", {
          expiresIn: '7d'
      })
      if (!isValid) {
        res.json({auth : false, message : 'password is incorrect!'})
      }
      else{
        res.json({auth: true, token: token,user: {
          id: existedEmail._id,
          email: existedEmail.email,
          name : existedEmail.name,
          surname : existedEmail.surname,
          category : existedEmail.category,
          age : existedEmail.age
      },message: 'signed in successfully!'});
      }
    }else if (existedEmaill) {
      const isValid = await bcrypt.compare(password, existedEmaill.password);
      const id = existedEmaill._id;
      //username password + 
      //access token - JWT
      //refresh token
      const token = jwt.sign({id}, "Metalica", {
          expiresIn: '7d'
      })
      if (!isValid) {
        res.json({auth : false, message : 'password is incorrect!'})
      }
      else{
        res.json({auth: true, token: token,user: {
          id: existedEmaill._id,
          email: existedEmaill.email,
          companyName : existedEmaill.companyName,
          username : existedEmaill.username,
      },message: 'signed in successfully!'});
      }
      
    }
   
    
  }

})


// // LOGIIN FOR EMPLOYERR

// app.post('/api/login/employer', async(req,res)=>{
//   const {email , password} = req.body;
//   const existedEmail = await employerModel.findOne({email : email});
//   if (!existedEmail) {
//     res.json({auth : false, message  : 'user not found!'})
//   }
//   else{
//     const isValid = await bcrypt.compare(password , existedEmail.password);
//     const id = existedEmail._id;
//     //username password + 
//     //access token - JWT
//     //refresh token
//     const token = jwt.sign({id}, "Metalica", {
//         expiresIn: '7d'
//     })

//     if (!isValid) {
//       res.json({auth : false, message : 'password is incorrect!'})
//     }
//     else{
//       res.json({auth: true, token: token,user: {
//         id: existedEmail._id,
//         email: existedEmail.email,
//     },message: 'signed in successfully!'});
//     }
//   }
// })



//employee - get
app.get('/api/employee',async(req,res)=>{
  const employee = await emloyeeModel.find();
  res.json({emploees: employee});
})


//employer - get
app.get('/api/employer',async(req,res)=>{
  const employer = await employerModel.find()
  res.json({emploers: employer});
})


// GET ALL SERVICESS

app.get('/api/servives', async(req,res)=>{
  const services = await servicesModel.find();
  res.status(200).json(services)
})


// GET SERVICE BY ID

app.get('/api/servives/:id', async(req,res)=>{
  const ID = req.params.id;
  const service = await servicesModel.findById(ID)
  res.status(200).json(service)
})

// DELETE SERVICE BY ID
app.delete('/api/servives/:id', async (req, res) => {
  const ID = req.params.id;
  const deletedService = await servicesModel.findByIdAndDelete(ID)
  res.status(203).send(deletedService)
})

// POST SERVICES 
app.post('/api/servives/', async (req, res) => {
  const {name,title,imageUrl} = req.body;
  const newService = new servicesModel({
      name : name,
      title : title,
      imageUrl : imageUrl
  });
  await newService.save();
  res.status(200).send(newService)
});

// EDIT SERVICES
app.put('/api/servives/:id', async (req, res) => {
  const {name,title,imageUrl}= req.body;
  const id = req.params.id;
  const existedService = servicesModel.findByIdAndUpdate(id,{
      name : name,
      title : title,
      imageUrl : imageUrl
  })
  res.status(201).send(existedService)
});





// GET ALL VACANCIES

app.get('/api/vacancies', async(req,res)=>{
  const vacancies = await vacanciesModel.find();
  res.status(200).json(vacancies)
})

// GET VACANCIE BY ID

app.get('/api/vacancies/:id', async(req,res)=>{
  const ID = req.params.id;
  const vacancie = await vacanciesModel.findById(ID)
  res.status(200).json(vacancie)
})

// DELETE VACANCIE BY ID
app.delete('/api/vacancies/:id', async (req, res) => {
  const ID = req.params.id;
  const deletedVacancie = await vacanciesModel.findByIdAndDelete(ID)
  res.status(203).send(deletedVacancie)
})

// POST VACANCIES 
app.post('/api/vacancies/', async (req, res) => {
  const {name,sale,imageUrl,location} = req.body;
  const newVacancie = new vacanciesModel({
      name : name,
      sale : sale,
      imageUrl : imageUrl,
      location : location
  });
  await newVacancie.save();
  res.status(200).send(newVacancie)
});

// EDIT VACANCIES
app.put('/api/vacancies/:id', async (req, res) => {
  const {name,sale,imageUrl,location}= req.body;
  const id = req.params.id;
  const existedVacancie = vacanciesModel.findByIdAndUpdate(id,{
      name : name,
      sale : sale,
      location : location,
      imageUrl : imageUrl
  })
  res.status(201).send(existedVacancie)
});

// GET ALL BLOGS

app.get('/api/blogs', async(req,res)=>{
  const blogs = await blogModel.find();
  res.status(200).json(blogs)
})

// GET BLOG BY ID

app.get('/api/blogs/:id', async(req,res)=>{
  const ID = req.params.id;
  const blog = await blogModel.findById(ID)
  res.status(200).json(blog)
})

// DELETE BLOG BY ID

app.delete('/api/blog/:id', async (req, res) => {
  const ID = req.params.id;
  const deletedblog = await blogModel.findByIdAndDelete(ID)
  res.status(203).send(deletedblog)
})


// POST BLOG 
app.post('/api/blog/', async (req, res) => {
  const {username,title,imageUrl,content} = req.body;
  const newBlog = new blogModel({
      username : username,
      title : title,
      imageUrl : imageUrl,
      content : content
  });
  await newBlog.save();
  res.status(200).send(newBlog)
});


// EDIT BLOG
app.put('/api/blog/:id', async (req, res) => {
  const {username,title,imageUrl,content}= req.body;
  const id = req.params.id;
  const existedBlog = blogModel.findByIdAndUpdate(id,{
    username : username,
    title : title,
    imageUrl : imageUrl,
    content : content
  })
  res.status(201).send(existedBlog)
});


// GET PRICES
app.get('/api/prices', async(req,res)=>{
  const price = await PriceModel.find();
  res.status(200).json(price)
})

// GET PRICES BY ID

app.get('/api/prices/:id', async(req,res)=>{
  const ID = req.params.id;
  const price = await PriceModel.findById(ID)
  res.status(200).json(price)
})

// DELETE PRICES BY ID

app.delete('/api/prices/:id', async (req, res) => {
  const ID = req.params.id;
  const deletedprice = await PriceModel.findByIdAndDelete(ID)
  res.status(203).send(deletedprice)
})

// POST PRICES 
app.post('/api/prices/', async (req, res) => {
  const {price,service_one,service_two,service_three,service_four,service_five} = req.body;
  const newPrices = new PriceModel({
    price : price,
    service_one : service_one,
    service_two : service_two,
    service_three : service_three,
    service_four : service_four,
    service_five : service_five
  });
  await newPrices.save();
  res.status(200).send(newPrices)
});

// EDIT PRICES
app.put('/api/prices/:id', async (req, res) => {
  const {price,service_one,service_two,service_three,service_four,service_five} = req.body;
  const id = req.params.id;
  const existedPrices = PriceModel.findByIdAndUpdate(id,{
    price : price,
    service_one : service_one,
    service_two : service_two,
    service_three : service_three,
    service_four : service_four,
    service_five : service_five
  })
  res.status(201).send(existedPrices)
});



// GET OURTEAM
app.get('/api/ourteam', async(req,res)=>{
  const ourteam = await ourTeamModel.find();
  res.status(200).json(ourteam)
})

// GET OURTEAM BY ID

app.get('/api/ourteam/:id', async(req,res)=>{
  const ID = req.params.id;
  const ourteam = await ourTeamModel.findById(ID)
  res.status(200).json(ourteam)
})

// DELETE OURTEAM BY ID

app.delete('/api/ourteam/:id', async (req, res) => {
  const ID = req.params.id;
  const deletedOurTeam = await ourTeamModel.findByIdAndDelete(ID)
  res.status(203).send(deletedOurTeam)
})

// POST OURTEAM 
app.post('/api/ourteam/', async (req, res) => {
  const {name, imageUrl, posession} = req.body;
  const newOurteam = new ourTeamModel({
    name : name,
    imageUrl : imageUrl,
    posession : posession
  });
  await newOurteam.save();
  res.status(200).send(newOurteam)
});

// EDIT OURTEAM
app.put('/api/ourteam/:id', async (req, res) => {
  const {name, imageUrl, posession} = req.body;
  const id = req.params.id;
  const existedOurTeam = ourTeamModel.findByIdAndUpdate(id,{
    name : name,
    imageUrl : imageUrl,
    posession : posession
  })
  res.status(201).send(existedOurTeam)
});









app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})