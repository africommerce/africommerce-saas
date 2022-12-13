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

import Compare from '../pages/user/Compare';
import ClassifiedProduct from '../pages/user/ClassifiedProduct';
import User from '../pages/user/user';
import PurchaseHistory from '../pages/user/purchaseHistory';
import { AuctionBidded } from '../pages/user/AuctionBidded';
import Conversation from '../pages/user/Conversation';
import Download from '../pages/user/Download';
import Wallet from '../pages/user/Wallet';
import EarningPoint from '../pages/user/EarningPoint';
import ManageProfile from '../pages/user/ManageProfile';
import SupportTicket from '../pages/user/SupportTicket';
import SentRefundRequest from '../pages/user/sentRefundRequest';
import SellerProductsBulkUpload from '../pages/seller/SellerProductsBulkUpload';
import SellerDigitalProducts from '../pages/seller/SellerDigitalProducts';
import SellerProductReview from '../pages/seller/SellerProductReview';
import { SellerShop } from '../pages/seller/SellerShop';
import SellerPackages from '../pages/seller/SellerPackages';
import SellerPurchasePackages from '../pages/seller/SellerPurchasePackages';
import SellerCoupon from '../pages/seller/SellerCoupon';
import SellerWholesaleProducts from '../pages/seller/SellerWholesaleProducts';
import SellerAuctionOrders from '../pages/seller/SellerAuctionOrders';
import SellerReceivedRefundRequest from '../pages/seller/SellerReceivedRefundRequest';
import SellerPaymentHistory from '../pages/seller/SellerPaymentHistory';
import AffiliateSystem from '../pages/user/affiliate/AffiliateSystem';
import WithdrawalHistory from '../pages/user/affiliate/WithdrawalHistory';
import PaymentHistory from '../pages/user/affiliate/PaymentHistory';
import BiddedProduct from '../pages/user/AuctionSystem/BiddedProduct';
import CustomerProduct from '../pages/user/CustomerProduct';
import UsersDashboard from '../pages/user/UsersDashboard';

export const MasterRoutes = () => {
  return (
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
  );
};
