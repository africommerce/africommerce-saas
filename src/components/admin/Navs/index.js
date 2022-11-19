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
      <RefundMenu
        icon={<KeyboardReturnOutlined />}
        title="Refund"
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

      <CustomersMenu
        icon={<PeopleAltOutlined />}
        title="Customers"
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
      <SalesMenu
        icon={<PersonOutlineOutlined />}
        title="Sellers"
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
      <UploadsMenu
        icon={<DriveFolderUploadOutlined />}
        title="Upload Files"
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

      <ReportMenu
        icon={<ArticleOutlined />}
        title="Reports"
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

      <BlogMenu
        icon={<CampaignOutlined />}
        title="Blog System"
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

      <MarketingMenu
        icon={<CampaignOutlined />}
        title="Marketing"
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

      <SupportMenu
        icon={<SupportAgentOutlined />}
        title="Support"
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

      <AffliateMenu
        icon={<InsertLinkOutlined />}
        title="Affliate System"
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
      <AffliateMenu
        icon={<InsertLinkOutlined />}
        title="Affliate System"
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
      <OfflineMenu
        icon={<PaymentsOutlined />}
        title="Offline System Payment"
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
      <OtpMenu
        icon={<LocalPhoneOutlined />}
        title="OTP System"
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
      {/* 
          
*/}
    </div>
  );
};
