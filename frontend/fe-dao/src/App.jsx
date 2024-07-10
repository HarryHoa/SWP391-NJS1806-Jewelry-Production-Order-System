
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginPage from './views/login/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import ManageOrdersPage from './views/dashboard/manage-orders/ManageOrders';
import ManageProductsPage from './views/dashboard/manage-products/ManageProducts';
import { AuthProvider } from './contexts/AuthContext';
import AddProductPage from './views/dashboard/manage-products/add-product/AddProductPage';
import HomePage from './views/home/HomePage';
import ProductPage from './views/products/ProductsPage';
import ProductDetailsPage from './views/products/{id}/ProductDetailsPage';
import CartPage from './views/cart/CartPage';
import { Provider } from 'react-redux';
import CheckOutPage from './views/cart/checkout/CheckOutPage';
import PaymentConfirm from './views/cart/payment-confirm';
import AccountPage from './views/account/accountPage';
import OrdersPage from './views/account/orders/Orders';
import HeroCustomizePage from './views/customize/HeroCustomizePage';
import JewelryCustomization from './views/customize/start/JewelryCustomization';
import SignupPage from './views/signup/SignupPage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageUsersPage from './views/dashboard/manage-users/ManageUsersPage';
import CreateQuotePage from './views/dashboard/manage-orders/create-quote/CreateQuotePage';
import { OrderSucessPage } from './views/cart/order-success';
import { PaymentErrorPage } from './views/cart/checkout/payment-error';
import EditQuotePage from './views/dashboard/manage-orders/edit-quote/EditQuotePage';
import CreateTransactionPage from './views/dashboard/manage-orders/create-transaction/CreateTransactionPage';
import CustomPaymentPage from './views/customize/payment/CustomPaymentPage';
import DepositConfirm from './views/customize/deposit-confirm';
import DepositSuccessPage from './views/customize/deposit-success';


const productsPages = {
  rings: {
    title: "Rings",
    description: "Explore our exquisite collection of rings.",
  },
  bracelets: {
    title: "Bracelets",
    description: "Discover our stylish bracelets.",
  },
  charms: {
    title: "Charms",
    description: "Find the perfect charm for any occasion.",
  },
  necklaces: {
    title: "Necklaces",
    description: "Elegant and beautiful necklaces for you.",
  },
  earrings: {
    title: "Earrings",
    description: "Browse through our selection of earrings.",
  },
};


const App = () => {

  return (
    <>
    <ToastContainer />
    <Router>
      <AuthProvider>
      <Routes>
        
        {/* Customer routes */}

        <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />}/> 
        </Route>

        <Route path="/products" element={<MainLayout />}>
              <Route index element={<ProductPage title="Our Products" description="Where else, if not from us" />}/> 

              {Object.entries(productsPages).map(([key, { title, description }]) => (
              <Route 
                key={key} 
                path={key} 
                element={<ProductPage title={title} description={description} productTypeKey={key} />} 
              />
            ))}
               <Route path=":productId/:productName" element={<ProductDetailsPage />} />
        </Route>

        <Route path="/cart" element={<MainLayout />}>
          <Route index element={<CartPage/>}/> 
          <Route path="checkout" element={<CheckOutPage />}></Route>
          <Route path="payment-confirm" element={<PaymentConfirm />} />
          <Route path="order-success/:orderId" element={<OrderSucessPage />} />
          <Route path="payment-error" element={<PaymentErrorPage />} />


        </Route>

        <Route path="/account" element={<MainLayout />}>
              <Route path="orders" element={<OrdersPage />}/>          
        </Route> 

        <Route path="/customize" element={<MainLayout />}>
              <Route index element={<HeroCustomizePage />}/>    
              <Route path="start" element={<JewelryCustomization/>}/>  
              <Route path="payment" element={<CustomPaymentPage/>}/>  
              <Route path="deposit-confirm" element={<DepositConfirm/>}/>  
              <Route path="deposit-success" element={<DepositSuccessPage/>}/>  
              
        </Route>


        <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="manage-orders" element={<ManageOrdersPage />}/>     
              <Route path="manage-users" element={<ManageUsersPage />}/>        
              <Route path="manage-products" element={<ManageProductsPage />}>          
              </Route> 
              <Route path="add-product" element={<AddProductPage />} />
              <Route path="create-quote/:orderId" element={<CreateQuotePage/>} />
              <Route path="edit-quote/:orderId" element={<EditQuotePage/>} />
              <Route path="create-transaction/:orderId" element={<CreateTransactionPage/>} />


        </Route>  

        <Route path="/login" element={<LoginPage />}>
        {/*   <Route index element={<HomePage />} /> */}
        </Route>

        <Route path="/signup" element={<SignupPage />}>
        {/*   <Route index element={<HomePage />} /> */}
        </Route>


      </Routes>
      </AuthProvider>
    </Router>
    </>
  );
};

export default App;