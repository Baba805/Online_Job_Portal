import { BASE_URL } from "./base_url";
import axios from 'axios'

// REGISTER FOR EMPLOYEE
export const SignUpEmployee = (payload)=>{
    axios.post(`${BASE_URL}/register/employee`,payload)
}


// REGISTER FOR EMPLOYER
export const SignUpEmployer = (payload)=>{
    axios.post(`${BASE_URL}/register/employer`,payload)
}


// LOGIN 
export const SignIn = async (payload)=>{
   const response = await axios.post(`${BASE_URL}/login`,payload)
   return response.data
}

// LOGIN ADMIN

export const AdminLogin = async (payload)=>{
  const response = await axios.post(`${BASE_URL}/admin/login`, payload);
  return response.data
}




 // GET EMPLOYEE

 export const getEmployee = ()=>{
    let employee;
    axios.get(`${BASE_URL}/employee`).then((res)=>{
        employee = res.data
    })

    return employee;
 }


 // GET EMPLOYER

 export const getEmployer = ()=>{
    let employer;
    axios.get(`${BASE_URL}/employer`).then((res)=>{
        employer = res.data
    })

    return employer;
 }

 //GET SERVICES

 export const getServices =async()=>{
    let services;
   await axios.get(`${BASE_URL}/servives`).then((res)=>{
        services = res.data;
    })

    return services;
 }

 // GET ALL VACANCIES

 export const getvacancies = async (name,time)=>{
    let vacancies;
    let URL;
    if (!name) {
        URL = BASE_URL+'/vacancies';
      }
      else{
        URL = BASE_URL+'/vacancies'+`?name=${name}`;
      }
      if (!time) {
        URL = BASE_URL + '/vacancies'
      }
      else{
        URL = BASE_URL+'/vacancies'+`?time=${time}`;
      }
    await axios.get(URL).then((res)=>{
        vacancies = res.data.data
        
    })

    return vacancies
 }
 // GET VACANCIES BY ID
 export const getvacanciesByID = async (ID) => {
    let globalData;
    await axios.get(`${BASE_URL}/vacancies/${ID}`).then((res) => {
      globalData = res.data
    });
    return globalData;
  };

  // POST VACANCIES 

  export const postVacancies = async (payload)=>{
    axios.post(`${BASE_URL}/vacancies`, payload)
  }



  // GET ALL BLOGS

  export const getBlogs = async ()=>{
    let blogs;
    await axios.get(`${BASE_URL}/blogs`).then((res)=>{
        blogs = res.data
    })

    return blogs
 }

   // GET ALL PRICES

   export const getPrices = async ()=>{
    let price;
    await axios.get(`${BASE_URL}/prices`).then((res)=>{
        price = res.data
    })

    return price
 }

 // GET ALL OURTEAM

 export const getOurTeam = async ()=>{
    let ourteam;
    await axios.get(`${BASE_URL}/ourteam`).then((res)=>{
        ourteam = res.data
    })

    return ourteam
 }

  // GET ALL COMMENTS

  export const getComment = async ()=>{
    let comment;
    await axios.get(`${BASE_URL}/comment`).then((res)=>{
        comment = res.data
    })

    return comment
 }

  // GET ALL CONTACTUS

  export const getContactUs = async ()=>{
    let contactus;
    await axios.get(`${BASE_URL}/contactus`).then((res)=>{
        contactus = res.data
    })

    return contactus
 }
