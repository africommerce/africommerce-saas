// import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/auth/Login';
import Registration from '../components/auth/Registration';

import { AboutUs } from '../pages/AboutUs';
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { AuthSeller } from '../pages/seller/AuthSeller';
import { AffliatePartner } from '../pages/user/AffliatePartner';
import { AllBrand } from '../pages/AllBrand';
import { AllCategories } from '../pages/AllCategories';
import { AllSellers } from '../pages/AllSellers';
import { Blog } from '../pages/Blog';
import { Coupons } from '../pages/Coupons';
import { FlashSale } from '../pages/FlashSale';
import { Home } from '../pages/Home';
import { OrderHistory } from '../pages/OrderHistory';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { ProductDetail } from '../pages/ProductDetail';
import { ReturnPolicy } from '../pages/ReturnPolicy';
import { Seller } from '../pages/Seller';
import { SellersPolicy } from '../pages/SellersPolicy';
import { SupportPolicy } from '../pages/SupportPolicy';
import { Terms } from '../pages/Terms';
import { TrackOrder } from '../pages/TrackOrder';
import { WishList } from '../pages/user/WishList';
import { SellerOrders } from '../pages/seller/SellerOrders';
import { SellerProducts } from '../pages/seller/SellerProducts';
import { SellerPos } from '../pages/seller/SellerPos';
import { SellerUploads } from '../pages/seller/SellerUploads';
import { SellerAuction } from '../pages/seller/SellerAuctionProducts';

export const MasterRoutes = () => {
  //const [isLogged, setIsLogged] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="admin/" element={<AdminDashboard />} /> */}
      <Route path="/admin/*" element={<AdminDashboard />}></Route>
      <Route path="/admin/auction-product/*" element={<AdminDashboard />}>
        <Route path="create" element={<h1>Create Auction</h1>} />
        <Route path="all-product" element={<h1>all-product</h1>} />
        <Route path="inhouse" element={<h1>inhouse-products</h1>} />
        <Route path="seller-products" element={<h1>seller-products</h1>} />
        <Route path="orders" element={<h1>orders</h1>} />
      </Route>
      <Route path="/auth-seller" element={<AuthSeller />}>
        <Route path="orders" element={<SellerOrders />}></Route>
        <Route path="products" element={<SellerProducts />}></Route>
        <Route path="pos" element={<SellerPos />}></Route>
        <Route path="uploads" element={<SellerUploads />}></Route>
        <Route path="auction" element={<SellerAuction />}></Route>
      </Route>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/flash-sale" element={<FlashSale />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/all-brands" element={<AllBrand />} />
      <Route path="/all-categories" element={<AllCategories />} />
      <Route path="/all-sellers" element={<AllSellers />} />
      <Route path="/all-brands" element={<AllBrand />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="coupons" element={<Coupons />} />
      <Route path="/return-policy" element={<ReturnPolicy />} />
      <Route path="/support-policy" element={<SupportPolicy />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/sellers-policy" element={<SellersPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/partner" element={<AffliatePartner />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/allbrand" element={<AllBrand />} />

      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};
