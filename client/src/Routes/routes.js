import MainRoot from "../MAIN/Pages/MainRoot";
import AboutUs from "../MAIN/Pages/AboutUs/AboutUs";
import BlogDetails from "../MAIN/Pages/BlogDetails/BlogDetails";
import BlogGrids from "../MAIN/Pages/BlogGrids/BlogGrids";
import ContactUs from "../MAIN/Pages/ContactUs/ContactUs";
import Home from "../MAIN/Pages/Home/Home";
import JobDetails from "../MAIN/Pages/JobDetails/JobDetails";
import JobList from "../MAIN/Pages/JobList/JobList";
import Login from "../MAIN/Pages/Login/Login";
import OurTeam from "../MAIN/Pages/OurTeam/OurTeam";
import Pricing from "../MAIN/Pages/Pricing/Pricing";
import Register from "../MAIN/Pages/Register/Register";



export const ROUTES = [
    {
        path : '/',
        element : <MainRoot/>,
        children : [
            {
                path : '/aboutus',
                element : <AboutUs/>
            },
            {
                path : '/blogdetails',
                element : <BlogDetails/>
            },
            {
                path : '/bloggrids',
                element : <BlogGrids/>
            },
            {
                path : '/contactus',
                element : <ContactUs/>
            },
            {
                path : '/home',
                element : <Home/>
            },
            {
                path : '/jobdetails',
                element : <JobDetails/>
            },
            {
                path : '/joblist',
                element : <JobList/>
            },
            {
                path : '/login',
                element : <Login/>
            },
            {
                path : '/ourteam',
                element : <OurTeam/>
            },
            {
                path : '/register',
                element : <Register/>
            },
            {
                path : '/pricing',
                element : <Pricing/>
            },
        ]
    }
]