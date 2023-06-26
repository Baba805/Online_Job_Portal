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


// LOGIN FOR EMPLOYEE
export const SignInEmployee = async (payload)=>{
   const response = await axios.post(`${BASE_URL}/login/employee`)
   return response.data
}


// LOGIN FOR EMPLOYER
export const SignInEmployer = async (payload)=>{
    const response = await axios.post(`${BASE_URL}/login/employer`)
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

 export const getvacancies = async ()=>{
    let vacancies;
    await axios.get(`${BASE_URL}/vacancies`).then((res)=>{
        vacancies = res.data
    })

    return vacancies
 }