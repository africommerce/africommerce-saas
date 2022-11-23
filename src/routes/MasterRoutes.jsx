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
import  Dashboard from '../pages/user/userDashboard';
import Compare from '../pages/user/Compare';
import ClassifiedProduct from '../pages/user/ClassifiedProduct';
import PurchaseHistoryMain from '../pages/user/PurchaseHistoryMain';
import AuctionBidded from '../pages/user/Auction.bidded';
import Conversation from '../pages/user/Conversation';
import Download from '../pages/user/Download';
import Wallet from '../pages/user/Wallet';
import EarningPoint from "../pages/user/EarningPoint";
import ManageProfile from '../pages/user/ManageProfile';
import SupportTicket from '../pages/user/SupportTicket';
import SentRefundRequest from '../pages/user/sentRefundRequest';
import SellerProductsBulkUpload from '../pages/seller/SellerProductsBulkUpload';
import SellerDigitalProducts from '../pages/seller/SellerDigitalProducts';
import SellerProductReview from '../pages/seller/SellerProductReview';
import { SellerShop } from '../pages/seller/SellerShop';

export const MasterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
        <Route path="shop" element={<SellerShop/>} ></Route>
        <Route path="products-bulk-upload" element={<SellerProductsBulkUpload/>} ></Route>
        <Route path="digital-products" element={<SellerDigitalProducts/>} ></Route>
        <Route path="products-reviews" element={<SellerProductReview/>} ></Route>
      </Route>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/flash-sale" element={<FlashSale />} />
      <Route path="/blog" element={<Blog />} />
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
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/allbrand" element={<AllBrand />} />
      <Route path="/user/purchase-history" element={<PurchaseHistoryMain />} />
      <Route path="/user/download" element={<Download />} />
      <Route path="/user/sent-refund" element={<SentRefundRequest />} />
      <Route path="/user/wishlist" element={<WishList />} />
      <Route path="/user/compare" element={<Compare />} />
      <Route path="/user/classified-products" element={<ClassifiedProduct />} />
      <Route path="/user/dashboard" element={<Dashboard />} />
      <Route path="/user/auction-bidded" element={<AuctionBidded />}></Route>
      <Route path="/user/conversation" element={<Conversation />} />
      <Route path="/user/wallet" element={<Wallet />} />
      <Route path="/user/earning-point" element={<EarningPoint />} />
      <Route path="/user/affliate" element={<AffliatePartner />} />
      <Route path="/user/support" element={<SupportTicket />} />
      <Route path="/user/manageprofile" element={<ManageProfile />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};






    
