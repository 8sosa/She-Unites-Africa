import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Business from './Pages/Business'
import Cart from './Pages/Cart'
import Collaborations from './Pages/Collaborations'
import Donate from './Pages/Donate'
import Ver from './Pages/VerifyDonation'
import Events from './Pages/Events'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import AdminAuth from './Pages/Admin'
import ProductManager from './Pages/ProductManager'

export default function SuaRoutes() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar />
                    <div className="content">
                        <Routes>
                            <Route path='/' element={<Home />} exact/>
                            <Route path='/about-us' element={<About />} exact/>
                            <Route path='/She-Unites-Business' element={<Business />} exact/>
                            <Route path='/Cart' element={<Cart />} exact/>
                            <Route path='/Collaborations' element={<Collaborations />} exact/>
                            <Route path='/Donate-to-us' element={<Donate />} exact/>
                            <Route path='/order/verify-donation' element={<Ver />} exact/>
                            <Route path='/Events' element={<Events />} exact/>
                            <Route path='/Merch-shop' element={<Shop />} exact/>
                            <Route path='/Product' element={<Product />} exact/>
                            <Route path='/Admin' element={<AdminAuth />} exact/>
                            <Route path='/Admin/ProductManager' element={<ProductManager />} exact/>
                        </Routes>
                    </div>
                <Footer />
            </div>
        </Router>
    )
}