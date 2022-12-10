import {
  AddShoppingCartOutlined,
  ArticleOutlined,
  CampaignOutlined,
  DesktopWindowsOutlined,
  DriveFolderUploadOutlined,
  GavelOutlined,
  GroupOutlined,
  InsertLinkOutlined,
  KeyboardReturnOutlined,
  LocalPhoneOutlined,
  LocalShippingOutlined,
  PaidOutlined,
  PaymentsOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
  PlaylistAddCheck,
  ScoreboardOutlined,
  SettingsOutlined,
  SettingsSuggestOutlined,
  ShoppingCartOutlined,
  SupportAgentOutlined,
} from '@mui/icons-material';
import React from 'react';
import AddonMenu from './AddonManager';
import AffliateMenu from './Affliate';
import AfricanPay from './AfricanPay';
import AsianPay from './AsianPay';
import AuctionMenu from './AuctionMenu';
import BlogMenu from './Blog';
import ClubMenu from './ClubPoint';
import ConfigurationMenu from './Configuration';
import CustomersMenu from './Customers';
import DeliveryMenu from './Delivery';
import MarketingMenu from './Martketing';
import OfflineMenu from './OfflinePay';
import OtpMenu from './Otp';
import PaymentGateWayMenu from './PaymentGateway';
import PosMenu from './PosMenus';
import ProductMenu from './ProductMenu';
import RefundMenu from './Refund';
import ReportMenu from './Reports';
import SalesMenu from './Sales';
import SetupMenu from './Setup';
import StaffMenu from './Staffs';
import SupportMenu from './Support';
import SystemMenu from './System';
import UploadsMenu from './Uploads';
import WholeSaleMenu from './WholeSale';
export const AdminNavs = () => {
  return (
    <div>
      <PosMenu
        icon={<PlaylistAddCheck />}
        title="POS System"
        items={[
          { name: 'POS Manager', link: 'pos/manager' },
          { name: 'POS Configuration', link: 'pos/configuration' },
        ]}
      />
      <ProductMenu
        icon={<ShoppingCartOutlined />}
        title="Products"
        items={[
          { name: 'Add New Product', link: 'product/create' },
          { name: 'All Product', link: 'product/all-product' },
          { name: 'In House Products', link: 'product/inhouse' },
          { name: 'Sellers Product', link: 'product/seller-products' },
          { name: 'Digital Products', link: 'product/digital-products' },
          { name: 'Bulk Import', link: 'product/bulk-import' },
          { name: 'Bulk Export', link: 'product/bulk-export' },
          { name: 'Categories', link: 'product/categories' },
          { name: 'Brands', link: 'product/brand' },
          { name: 'Attributes', link: 'product/attributes' },
          { name: 'Colors', link: 'product/colors' },
          { name: 'Reviews', link: 'product/reviews' },
        ]}
      />
      <AuctionMenu
        icon={<GavelOutlined />}
        title="Auction Products"
        items={[
          { name: 'Add New Product', link: 'product/create' },
          { name: 'Add Product', link: 'product/add' },
          { name: 'In House Products', link: 'product/inhouse' },
          { name: 'Sellers Product', link: 'product/seller-products' },
          { name: 'Digital Products', link: 'product/digital-products' },
          { name: 'Bulk Import', link: 'product/bulk-import' },
          { name: 'Bulk Export', link: 'product/bulk-export' },
          { name: 'Brands', link: 'product/brand' },
          { name: 'Attributes', link: 'product/attributes' },
          { name: 'Colors', link: 'product/colors' },
          { name: 'Product', link: 'product/products' },
        ]}
      />

      <WholeSaleMenu
        icon={<AddShoppingCartOutlined />}
        title="Whole Sale Product"
        items={[
          { name: 'Add New Wholesale Product', link: 'wholesale/create' },
          { name: 'All wholesale product', link: 'wholesale/all' },
          { name: 'In wouse wholesale products', link: 'wholesale/inhouse' },
          { name: 'Sellers wholesale product', link: 'wholesale/seller' },
        ]}
      />
      <SalesMenu
        icon={<PaidOutlined />}
        title="Sales"
        items={[
          { name: 'Add New Product', link: 'product/create' },
          { name: 'Add Product', link: 'product/add' },
          { name: 'In House Products', link: 'product/inhouse' },
          { name: 'Sellers Product', link: 'product/seller-products' },
          { name: 'Digital Products', link: 'product/digital-products' },
          { name: 'Bulk Import', link: 'product/bulk-import' },
          { name: 'Bulk Export', link: 'product/bulk-export' },
          { name: 'Brands', link: 'product/brand' },
          { name: 'Attributes', link: 'product/attributes' },
          { name: 'Colors', link: 'product/colors' },
          { name: 'Product', link: 'product/products' },
        ]}
      />
      <DeliveryMenu
        icon={<LocalShippingOutlined />}
        title="Delivery Boy"
        items={[
          { name: 'All Delivery Boy', link: 'delivery/all' },
          { name: 'Add Delivery Boy', link: 'delivery/create' },
          { name: 'Payment History', link: 'delivery/payments' },
          { name: 'Collected History', link: 'delivery/collected' },
          { name: 'Cancel Request', link: 'delivery/cancel' },
          { name: 'Configuration', link: 'delivery/configuration' },
        ]}
      />
      <RefundMenu
        icon={<KeyboardReturnOutlined />}
        title="Refund"
        items={[
          { name: 'Refund Requests', link: 'refund/request' },
          { name: 'Approved Refund ', link: 'refund/approved' },
          { name: 'Rejected Refund ', link: 'refund/rejected' },
          { name: 'Refund Configuration ', link: 'refund/configuration' },
        ]}
      />

      <CustomersMenu
        icon={<PeopleAltOutlined />}
        title="Customers"
        items={[
          { name: 'Customers list', link: 'customers/list' },
          { name: 'Classified Products', link: 'customers/products' },
          { name: 'Classified Packages', link: 'customers/packages' },
        ]}
      />
      <SalesMenu
        icon={<PersonOutlineOutlined />}
        title="Sellers"
        items={[
          { name: 'All Seller', link: 'sellers/all' },
          { name: 'Payouts', link: 'sellers/payouts' },
          { name: 'Payout Request', link: 'sellers/payout-request' },
          { name: 'Sellers Commission', link: 'sellers/commission' },
          { name: 'Sellers Packages', link: 'sellers/package' },
          {
            name: 'Sellers Verification Form',
            link: 'sellers/verification-form',
          },
        ]}
      />
      <UploadsMenu
        icon={<DriveFolderUploadOutlined />}
        title="Upload Files"
        items={[{ name: 'All Upload', link: 'upload/all-upload' }]}
      />

      <ReportMenu
        icon={<ArticleOutlined />}
        title="Reports"
        items={[
          { name: 'In House Product Sale', link: 'report/inhouse' },
          { name: 'Seller Product Sale', link: 'report/sales' },
          { name: 'Product Stock', link: 'report/stock' },
          { name: 'Product Wishlist', link: 'report/wishlist' },
          { name: 'User Searches', link: 'report/searches' },
          { name: 'Commission History', link: 'report/history' },
          { name: 'Wallet Histrory', link: 'report/wallet-history' },
        ]}
      />

      <BlogMenu
        icon={<CampaignOutlined />}
        title="Blog System"
        items={[
          { name: 'All Post', link: 'blog/all' },
          { name: 'Categories', link: 'blog/categories' },
        ]}
      />

      <MarketingMenu
        icon={<CampaignOutlined />}
        title="Marketing"
        items={[
          { name: 'Flash deals', link: 'marketing/flash' },
          { name: 'Newsletter', link: 'marketing/newsletter' },
          { name: 'Bulk SMS', link: 'marketing/bulk-sms' },
          { name: 'Subscribers', link: 'marketing/subscribers' },
          { name: 'Coupon', link: 'marketing/coupon' },
        ]}
      />

      <SupportMenu
        icon={<SupportAgentOutlined />}
        title="Support"
        items={[
          { name: 'Ticket', link: 'support/ticket' },
          { name: 'Product Conversations', link: 'support/conversation' },
          { name: 'Product Queries', link: 'support/queries' },
        ]}
      />

      <AffliateMenu
        icon={<InsertLinkOutlined />}
        title="Affliate System"
        items={[
          { name: 'Affliate Registration Form', link: 'affliate/registration' },
          { name: 'Affliate Configuration', link: 'affliate/configuration' },
          { name: 'Affliate Users', link: 'affliate/affliate-users' },
          { name: 'Referrals Users', link: 'affliate/referral-users' },
          {
            name: 'Affliate Withdraw Request',
            link: 'affliate/withdraw-request',
          },
          { name: 'Affliate Logs', link: 'affliate/logs' },
        ]}
      />
      <OfflineMenu
        icon={<PaymentsOutlined />}
        title="Offline System Payment"
        items={[
          { name: 'Manual Payment Method', link: 'offline-payment/method' },
          {
            name: 'Offline Wallet Recharge',
            link: 'offline-payment/wallet-recharge',
          },
          {
            name: 'Offline Customer Package Payment',
            link: 'offline-payment/customer-package',
          },
          {
            name: 'Offline Seller Package Gateway',
            link: 'offline-payment/seller-package',
          },
        ]}
      />
      <AsianPay
        icon={<PaymentsOutlined />}
        title="Asian System Payment"
        items={[
          {
            name: 'Set Asian PG Credentials',
            link: 'asian-payment/set-credentials',
          },
        ]}
      />

      <AfricanPay
        icon={<PaymentsOutlined />}
        title="African Payment Gateway Addon"
        items={[
          {
            name: 'African PG Configurations',
            link: 'african-payment/african-configuration',
          },
          {
            name: 'Set African PG Credentials',
            link: 'african-payment/african-credential',
          },
        ]}
      />
      <PaymentGateWayMenu
        icon={<PaymentsOutlined />}
        title="Payment Gateway"
        items={[
          { name: 'Add New Product', link: 'product/create' },
          { name: 'Add Product', link: 'product/add' },
          { name: 'In House Products', link: 'product/inhouse' },
          { name: 'Sellers Product', link: 'product/seller-products' },
          { name: 'Digital Products', link: 'product/digital-products' },
          { name: 'Bulk Import', link: 'product/bulk-import' },
          { name: 'Bulk Export', link: 'product/bulk-export' },
          { name: 'Brands', link: 'product/brand' },
          { name: 'Attributes', link: 'product/attributes' },
          { name: 'Colors', link: 'product/colors' },
          { name: 'Product', link: 'product/products' },
        ]}
      />

      <ClubMenu
        icon={<ScoreboardOutlined />}
        title="Club Point System"
        items={[
          { name: 'Club Point To Wallet', link: 'club/configuration' },
          { name: 'Set Product Point', link: 'club/set-product-points' },
          { name: 'user Points', link: 'club/user-points' },
        ]}
      />
      <OtpMenu
        icon={<LocalPhoneOutlined />}
        title="OTP System"
        items={[
          { name: 'OTP Configuration', link: 'otp/configuration' },
          { name: 'SMS Templates', link: 'otp/sms-templates' },
          { name: 'Set OTP Credential', link: 'otp/credentials' },
        ]}
      />
      <PaymentGateWayMenu
        icon={<LocalPhoneOutlined />}
        title="Payment Gateway Addon"
        items={[
          { name: 'Add New Product', link: 'product/create' },
          { name: 'Add Product', link: 'product/add' },
          { name: 'In House Products', link: 'product/inhouse' },
          { name: 'Sellers Product', link: 'product/seller-products' },
          { name: 'Digital Products', link: 'product/digital-products' },
          { name: 'Bulk Import', link: 'product/bulk-import' },
          { name: 'Bulk Export', link: 'product/bulk-export' },
          { name: 'Brands', link: 'product/brand' },
          { name: 'Attributes', link: 'product/attributes' },
          { name: 'Colors', link: 'product/colors' },
          { name: 'Product', link: 'product/products' },
        ]}
      />
      <SetupMenu
        icon={<DesktopWindowsOutlined />}
        title="Website Setup"
        items={[
          { name: 'Header', link: 'websetup/header' },
          { name: 'Footer', link: 'websetup/footer' },
          { name: 'Pages', link: 'websetup/pages' },
          { name: 'Appearance', link: 'websetup/appearance' },
        ]}
      />
      <ConfigurationMenu
        icon={<SettingsOutlined />}
        title="Setup & Configuration"
        items={[
          { name: 'Add New Product', link: 'product/create' },
          { name: 'Add Product', link: 'product/add' },
          { name: 'In House Products', link: 'product/inhouse' },
          { name: 'Sellers Product', link: 'product/seller-products' },
          { name: 'Digital Products', link: 'product/digital-products' },
          { name: 'Bulk Import', link: 'product/bulk-import' },
          { name: 'Bulk Export', link: 'product/bulk-export' },
          { name: 'Brands', link: 'product/brand' },
          { name: 'Attributes', link: 'product/attributes' },
          { name: 'Colors', link: 'product/colors' },
          { name: 'Product', link: 'product/products' },
        ]}
      />
      <StaffMenu
        icon={<GroupOutlined />}
        title="Staffs"
        items={[
          { name: 'All Staffs', link: 'staffs/all' },
          { name: 'Staff Permission', link: 'staffs/permission' },
        ]}
      />
      <SystemMenu
        icon={<GroupOutlined />}
        title="System"
        items={[
          { name: 'Add New Product', link: 'product/create' },
          { name: 'Add Product', link: 'product/add' },
          { name: 'In House Products', link: 'product/inhouse' },
          { name: 'Sellers Product', link: 'product/seller-products' },
          { name: 'Digital Products', link: 'product/digital-products' },
          { name: 'Bulk Import', link: 'product/bulk-import' },
          { name: 'Bulk Export', link: 'product/bulk-export' },
          { name: 'Brands', link: 'product/brand' },
          { name: 'Attributes', link: 'product/attributes' },
          { name: 'Colors', link: 'product/colors' },
          { name: 'Product', link: 'product/products' },
        ]}
      />
      <AddonMenu
        icon={<SettingsSuggestOutlined />}
        title="Addon Manager"
        items={[{ name: 'Manager', link: 'addon/manager' }]}
      />
    </div>
  );
};
