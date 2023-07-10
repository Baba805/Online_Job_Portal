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
import EmployeeHome from "../MAIN/Pages/EmployeeHome/EmployeeHome";
import EmployerHome from "../MAIN/Pages/EmployerHome/EmployerHome";
import AddJob from '../MAIN/Pages/AddJob/AddJob';
import MainRootAdmin from '../MAIN/Pages/MainRootAdmin'
import Services from '../ADMIN/Services/Services';
import Jobs from '../ADMIN/Jobs/Jobs'
import Blogs from '../ADMIN/blogs/Blogs';
import Prices from "../ADMIN/Pricess/Prices";
import Comments from '../ADMIN/Comments/Comments'
import Admin_Login from "../ADMIN/Admin_Login/Admin_Login";
import Jobss from '../MAIN/Pages/Jobs/Jobss'
import AddServices from "../ADMIN/AddServices/AddServices";
import AddPrices from "../ADMIN/AddPrices/AddPrices";
import AddBlog from "../ADMIN/AddBlog/AddBlog";
import AddComment from "../ADMIN/AddComment/AddComment";
import Apply from "../MAIN/Pages/Apply/Apply";
import EditBlog from "../ADMIN/EditBlog/EditBlog";
import EditPrices from "../ADMIN/EditPrices/EditPrices";
import EditComment from "../ADMIN/EditComments/EditComment";
import EditJobs from "../ADMIN/EditJobs/EditJobs";
import EditServices from "../ADMIN/EditServices/EditServices";
import Admin_OurTeam from "../ADMIN/Admin_OurTeam/Admin_OurTeam";
import AddOurTeam from "../ADMIN/AddOurTeam/AddOurTeam";
import EditOurTeam from "../ADMIN/EditOurTeam/EditOurTeam";
import Employers_CV from "../MAIN/Pages/Employers_CV/Employers_CV";
import Users from "../ADMIN/users/Users";





export const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '/aboutus',
                element: <AboutUs />
            },
            {
                path: '/blogdetails',
                element: <BlogDetails />
            },
            {
                path: '/bloggrids',
                element: <BlogGrids />
            },
            {
                path: '/contactus',
                element: <ContactUs />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobdetails',
                element: <JobDetails />
            },
            {
                path: '/joblist',
                element: <JobList />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/ourteam',
                element: <OurTeam />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/employeehome',
                element: <EmployeeHome />
            },
            {
                path: '/employerhome',
                element: <EmployerHome />
            },
            {
                path: '/addjob',
                element: <AddJob />
            },
            {
                path: '/jobss',
                element: <Jobss/>
            },
            
            {
                path : '/employeehome/apply',
                element : <Apply/>
            },
            {
                path : '/employerhome/cv',
                element : <Employers_CV/>
            }
            
           

        ],


    },
    {
        path: '/admin',
        element: <MainRootAdmin/>,
        children : [
            {
                path : 'services',
                element : <Services/>
            },
            {
                path : 'jobs',
                element : <Jobs/>
            },
            {
                path : 'prices',
                element : <Prices/>
            },
            {
                path : 'prices/edit/:id',
                element : <EditPrices/>
            },
            {
                path : 'comments',
                element : <Comments/>
            },
            {
                path : 'blogs',
                element : <Blogs/>
            },
            {
                path : 'blogs/edit/:id',
                element : <EditBlog/>
            },
            {
                path : 'login',
                element : <Admin_Login/>
            },
            {
                path : 'addservices',
                element : <AddServices/>
            },
            {
                path : 'addprices',
                element : <AddPrices/>
            },
            {
                path : 'addblog',
                element : <AddBlog/>
            },
            {
                path : 'addcomment',
                element : <AddComment/>
            },
            {
                path : 'comments/edit/:id',
                element : <EditComment/>
            },
            {
                path : 'jobs/edit/:id',
                element : <EditJobs/>
            },
            {
                path : 'services/edit/:id',
                element : <EditServices/>
            },
            {
                path : 'ourteam',
                element : <Admin_OurTeam/>
            },
            {
                path : 'addourteam',
                element : <AddOurTeam/>
            },
            {
                path : 'ourteam/edit/:id',
                element : <EditOurTeam/>
            },
            {
                path : 'users',
                element : <Users/>
            }
        ]

    }
]