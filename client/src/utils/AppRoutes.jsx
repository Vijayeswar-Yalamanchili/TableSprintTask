import { lazy, Suspense } from "react"
import LoadingComponent from '../components/common/loadingComponent/LoadingComponent'

const LoginPage = lazy(()=> import('../pages/AuthPages/Login'))
const RegisterPage = lazy(()=> import('../pages/AuthPages/Register'))
const ResetPasswordPage = lazy(()=> import('../pages/AuthPages/ResetPassword'))
const DashboardPage = lazy(()=> import('../pages/navs/dashboard/Dashboard'))
const CategoryPage = lazy(()=> import('../pages/navs/category/Category'))
const SubCategoryPage = lazy(()=> import('../pages/navs/subcategory/SubCategory'))
const ProductsPage = lazy(()=> import('../pages/navs/products/Products'))
const AddCategoryPage = lazy(()=> import('../pages/navs/addCategory/AddCategory'))
const AddSubCategoryPage = lazy(()=> import('../pages/navs/addSubCategory/AddSubCategory'))
const AddProductPage = lazy(()=> import('../pages/navs/addProduct/AddProduct'))


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
    {
        path : '/addCategory',
        element : <Suspense fallback={<LoadingComponent/>}><AddCategoryPage/></Suspense>,
        exact : true
    },
    {
        path : '/addSubCategory',
        element : <Suspense fallback={<LoadingComponent/>}><AddSubCategoryPage/></Suspense>,
        exact : true
    },
    {
        path : '/addProduct',
        element : <Suspense fallback={<LoadingComponent/>}><AddProductPage/></Suspense>,
        exact : true
    },
]

export default Approutes