import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load components for better performance
const Login = lazy(() => import('../components/auth/Login').then(module => ({ default: module.Login })));
const Registration = lazy(() => import('../components/auth/Registration'));

const AboutUs = lazy(() => import('../pages/AboutUs').then(module => ({ default: module.AboutUs })));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const AuthSeller = lazy(() => import('../pages/seller/AuthSeller').then(module => ({ default: module.AuthSeller })));
const AffliatePartner = lazy(() => import('../pages/user/AffliatePartner').then(module => ({ default: module.AffliatePartner })));
const AllBrand = lazy(() => import('../pages/AllBrand').then(module => ({ default: module.AllBrand })));
const AllCategories = lazy(() => import('../pages/AllCategories').then(module => ({ default: module.AllCategories })));
const AllSellers = lazy(() => import('../pages/AllSellers').then(module => ({ default: module.AllSellers })));
const Blog = lazy(() => import('../pages/Blog').then(module => ({ default: module.Blog })));
const Coupons = lazy(() => import('../pages/Coupons').then(module => ({ default: module.Coupons })));
const FlashSale = lazy(() => import('../pages/FlashSale').then(module => ({ default: module.FlashSale })));
const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.Home })));
const OrderHistory = lazy(() => import('../pages/OrderHistory').then(module => ({ default: module.OrderHistory })));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const ProductDetail = lazy(() => import('../pages/ProductPage'));
const ReturnPolicy = lazy(() => import('../pages/ReturnPolicy').then(module => ({ default: module.ReturnPolicy })));
const Seller = lazy(() => import('../pages/Seller').then(module => ({ default: module.Seller })));
const SellersPolicy = lazy(() => import('../pages/SellersPolicy').then(module => ({ default: module.SellersPolicy })));
const SupportPolicy = lazy(() => import('../pages/SupportPolicy').then(module => ({ default: module.SupportPolicy })));
const Terms = lazy(() => import('../pages/Terms').then(module => ({ default: module.Terms })));
const TrackOrder = lazy(() => import('../pages/TrackOrder').then(module => ({ default: module.TrackOrder })));
const WishList = lazy(() => import('../pages/user/Wishlist').then(module => ({ default: module.WishList })));
// Lazy load seller components
const SellerOrders = lazy(() => import('../pages/seller/SellerOrders').then(module => ({ default: module.SellerOrders })));
const SellerProducts = lazy(() => import('../pages/seller/SellerProducts').then(module => ({ default: module.SellerProducts })));
const SellerPos = lazy(() => import('../pages/seller/SellerPos').then(module => ({ default: module.SellerPos })));
const SellerUploads = lazy(() => import('../pages/seller/SellerUploads').then(module => ({ default: module.SellerUploads })));
const SellerAuction = lazy(() => import('../pages/seller/SellerAuctionProducts').then(module => ({ default: module.SellerAuction })));

// Lazy load user components
const Compare = lazy(() => import('../pages/user/Compare'));
const ClassifiedProduct = lazy(() => import('../pages/user/ClassifiedProduct'));
const User = lazy(() => import('../pages/user/user'));
const PurchaseHistory = lazy(() => import('../pages/user/purchaseHistory'));
const AuctionBidded = lazy(() => import('../pages/user/AuctionBidded').then(module => ({ default: module.AuctionBidded })));
const Conversation = lazy(() => import('../pages/user/Conversation'));
const Download = lazy(() => import('../pages/user/Download'));
const Wallet = lazy(() => import('../pages/user/Wallet'));
const EarningPoint = lazy(() => import('../pages/user/EarningPoint'));
const ManageProfile = lazy(() => import('../pages/user/ManageProfile'));
const SupportTicket = lazy(() => import('../pages/user/SupportTicket'));
const SentRefundRequest = lazy(() => import('../pages/user/sentRefundRequest'));
const SellerProductsBulkUpload = lazy(() => import('../pages/seller/SellerProductsBulkUpload'));
const SellerDigitalProducts = lazy(() => import('../pages/seller/SellerDigitalProducts'));
const SellerProductReview = lazy(() => import('../pages/seller/SellerProductReview'));
const SellerShop = lazy(() => import('../pages/seller/SellerShop').then(module => ({ default: module.SellerShop })));
const SellerPackages = lazy(() => import('../pages/seller/SellerPackages'));
const SellerPurchasePackages = lazy(() => import('../pages/seller/SellerPurchasePackages'));
const SellerCoupon = lazy(() => import('../pages/seller/SellerCoupon'));
const SellerWholesaleProducts = lazy(() => import('../pages/seller/SellerWholesaleProducts'));
const SellerAuctionOrders = lazy(() => import('../pages/seller/SellerAuctionOrders'));
const SellerReceivedRefundRequest = lazy(() => import('../pages/seller/SellerReceivedRefundRequest'));
const SellerPaymentHistory = lazy(() => import('../pages/seller/SellerPaymentHistory'));
const AffiliateSystem = lazy(() => import('../pages/user/affiliate/AffiliateSystem'));
const WithdrawalHistory = lazy(() => import('../pages/user/affiliate/WithdrawalHistory'));
const PaymentHistory = lazy(() => import('../pages/user/affiliate/PaymentHistory'));
const BiddedProduct = lazy(() => import('../pages/user/AuctionSystem/BiddedProduct'));
const CustomerProduct = lazy(() => import('../pages/user/CustomerProduct'));
const UsersDashboard = lazy(() => import('../pages/user/UsersDashboard'));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '18px',
    color: '#666'
  }}>
    Loading...
  </div>
);

export const MasterRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/*" element={<AdminDashboard />}>
        <Route path="auction-product/*" element={<AdminDashboard />}>
          <Route path="create" element={<h1>Create Auction</h1>} />
          <Route path="all-product" element={<h1>all-product</h1>} />
          <Route path="inhouse" element={<h1>inhouse-products</h1>} />
          <Route path="seller-products" element={<h1>seller-products</h1>} />
          <Route path="orders" element={<h1>orders</h1>} />
        </Route>
      </Route>
      <Route path="/auth-seller" element={<AuthSeller />}>
        <Route path="orders" element={<SellerOrders />}></Route>
        <Route path="products" element={<SellerProducts />}></Route>
        <Route path="pos" element={<SellerPos />}></Route>
        <Route path="uploads" element={<SellerUploads />}></Route>
        <Route path="all-auction-products" element={<SellerAuction />}></Route>
        <Route path="shop" element={<SellerShop />}></Route>
        <Route
          path="products-bulk-upload"
          element={<SellerProductsBulkUpload />}
        ></Route>
        <Route
          path="digital-products"
          element={<SellerDigitalProducts />}
        ></Route>
        <Route
          path="products-reviews"
          element={<SellerProductReview />}
        ></Route>
        <Route path="packages" element={<SellerPackages />}></Route>
        <Route
          path="packages-purchase"
          element={<SellerPurchasePackages />}
        ></Route>
        <Route path="coupon" element={<SellerCoupon />}></Route>
        <Route path="wholesale" element={<SellerWholesaleProducts />}></Route>
        <Route
          path="auction-product-orders"
          element={<SellerAuctionOrders />}
        ></Route>
        <Route path="refund" element={<SellerReceivedRefundRequest />}></Route>
        <Route
          path="payment-history"
          element={<SellerPaymentHistory />}
        ></Route>
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
      <Route path="/affiliate" element={<AffliatePartner />}>
        <Route path="user" element={<AffiliateSystem />} />
      </Route>
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/allbrand" element={<AllBrand />} />
      <Route path="user" element={<User />}>
        <Route path="dashboard" element={<UsersDashboard />} />
        <Route path="purchase-history" element={<PurchaseHistory />} />
        <Route path="download" element={<Download />} />
        <Route path="sent-refund" element={<SentRefundRequest />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="compare" element={<Compare />} />
        <Route path="classified-products" element={<ClassifiedProduct />}>
          <Route path="customers_products" element={<CustomerProduct />} />
        </Route>
        <Route path="auction-bidded" element={<AuctionBidded />}>
          <Route path="bidded-product" element={<BiddedProduct />} />
          <Route path="purchase-history" element={<PurchaseHistory />} />
        </Route>
        <Route path="conversation" element={<Conversation />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="earning-point" element={<EarningPoint />} />
        <Route path="affiliate" element={<AffliatePartner />}>
          <Route path="system" element={<AffiliateSystem />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="withdrawal-history" element={<WithdrawalHistory />} />
        </Route>
        <Route path="support" element={<SupportTicket />} />
        <Route path="manage-profile" element={<ManageProfile />} />
      </Route>

      <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Suspense>
  );
};
