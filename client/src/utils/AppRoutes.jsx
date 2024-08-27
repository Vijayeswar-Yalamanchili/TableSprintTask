import { lazy, Suspense } from "react"
import LoadingComponent from '../components/common/loadingComponent/LoadingComponent'

const LoginPage = lazy(()=> import('../pages/AuthPages/Login'))
const RegisterPage = lazy(()=> import('../pages/AuthPages/Register'))
const ResetPasswordPage = lazy(()=> import('../pages/AuthPages/ResetPassword'))
const DashboardPage = lazy(()=> import('../pages/dashboard/Dashboard'))
const CategoryPage = lazy(()=> import('../pages/category/Category'))
const SubCategoryPage = lazy(()=> import('../pages/subcategory/SubCategory'))
const ProductsPage = lazy(()=> import('../pages/products/Products'))

const Approutes = [
    {
        path : '/',
        element : <Suspense fallback={<LoadingComponent/>}><LoginPage/></Suspense>,
        exact : true
    },
    {
        path : '/register',
        element : <Suspense fallback={<LoadingComponent/>}><RegisterPage/></Suspense>,
        exact : true
    },
    {
        path : '/resetpassword',
        element : <Suspense fallback={<LoadingComponent/>}><ResetPasswordPage/></Suspense>,
        exact : true
    },
    {
        path : '/dashboard',
        element : <Suspense fallback={<LoadingComponent/>}><DashboardPage/></Suspense>,
        exact : true
    },
    {
        path : '/category',
        element : <Suspense fallback={<LoadingComponent/>}><CategoryPage/></Suspense>,
        exact : true
    },
    {
        path : '/subcategory',
        element : <Suspense fallback={<LoadingComponent/>}><SubCategoryPage/></Suspense>,
        exact : true
    },
    {
        path : '/products',
        element : <Suspense fallback={<LoadingComponent/>}><ProductsPage/></Suspense>,
        exact : true
    },
]

export default Approutes