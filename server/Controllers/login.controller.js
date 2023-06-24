// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const emloyeeModel = require('../Models/employee.model')

// //verify JWT
// const verifyJWT = (req,res,next)=>{
//     const token = req.headers['x-access-token'];
//     if (!token) {
//         res.json({message: 'you need token to get data!'})
//     }
//     else{
//         jwt.verify(token,"METALLICA",(err,decoded)=>{
//             if (err) {
//                 res.json({auth: false,message: 'authentication failed'});
//             }
//             else{
//                 req.userId = decoded.id;
//                 next();
//             }
//         })
//     }
// }


// // REGISTEER
// app.post('/api/register', async (req, res) => {
//     const { name, username, surname, age, password, email, category } = req.body;
//     const existedMail = await emloyeeModel.findOne({ email: email })
//     const existedUsername = await emloyeeModel.findOne({ username: username })
//     if (existedMail) {
//       res.json({ message: 'email already used!' })
//     }
  
//     if (existedUsername) {
//       res.json({ message: 'username already used!' })
//     }
//     const salt = await bcrypt.genSalt(10)
//     const hashedPasword = await bcrypt.hash(password, salt)
  
  
//     const newEmpoyee = new employee({
//       name: name,
//       username: username,
//       surname: surname,
//       age: age,
//       password: hashedPasword,
//       email: email,
//       category: category,
//       isAdmin: isAdmin
//     })
//     await newEmpoyee.save();
//     res.json({ message: 'user register succesfuly!' })
//   })

// // LOGIIN

// app.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;
//     const existedUsername = await emloyeeModel.findOne({ username: username });
    
   
  
//     if (!existedUsername) {
//       res.json({ auth: false, message: 'username not found!' })
//     }
//     else{
//       const isValid = await bcrypt.compare(password, existedUsername.password);
//       const id = existedUsername._id;
//       const token = jwt.sign({id:id},'METALLICA', {
//         expiresIn:'7d'
//     })
//     if(!isValid){
//         res.json({auth:false, message:'password is incorrect'})
//     }
//       else{
//         res.json({auth:true,token:token, user:{
                
//             id:existedUsername._id,
//             username:existedUsername.username,
//             email:existedUsername.email,
//             isAdmin:existedUsername.isAdmin,
//             basketItems:existedUsername.basketItems
        
//     }, message:'signed in succesfully'})
//       }
//     }
  
//   })


  