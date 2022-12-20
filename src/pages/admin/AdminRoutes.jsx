import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminHome } from '../../components/admin/pages/AdminHome';
import { PosConfiguration } from '../../components/admin/pages/PosConfiguration';
import { PosManager } from '../../components/admin/pages/PosManager';
import { AllProduct } from '../../components/products/pages/AllProduct';
import { Attributes } from '../../components/products/pages/Attributes';
import { BulkProductImport } from '../../components/products/pages/BulkProductImport';
import { Categories } from '../../components/products/pages/Categories';
import { Colors } from '../../components/products/pages/Colors';
import { DigitalProduct } from '../../components/products/pages/DigitalProduct';
import { InHouseProduct } from '../../components/products/pages/InHouseProduct';
import { ProductBrands } from '../../components/products/pages/ProductBrands';
import { Reviews } from '../../components/products/pages/Reviews';
import { SellersProduct } from '../../components/products/pages/SellersProduct';
import { UploadExport } from '../../components/products/pages/UploadExport';
import WholeSaleCreate from '../../components/wholesale/pages/Whole-saleCreate';
import CreateProduct from '../../components/products/pages/CreateProduct';
import { AllWholeSale } from '../../components/wholesale/pages/AllWholeSale';
import { WholeSaleInHouse } from '../../components/wholesale/pages/WholeSaleInhouse';
import { AllWholeSaleProducts } from '../../components/wholesale/pages/Allwholesaleproducts';
import { AllDeliveryBoy } from '../../components/delivery/pages/AllDeliveryBoy';
import { AddDeliveryBoy } from '../../components/delivery/pages/AddDeliveryBoy';
import { DeliveryPayHistory } from '../../components/delivery/pages/DeliveryPayHistory';
import { DeliveryCollection } from '../../components/delivery/pages/DeliveryCollection';
import { CancelRequest } from '../../components/delivery/pages/CancelRequest';
import { ConfigureDelivery } from '../../components/delivery/pages/ConfigureDelivery';
import { RefundRequest } from '../../components/refund/pages/RefundRequest';
import { ApproveFunds } from '../../components/refund/pages/ApproveFunds';
import { RejectedRefund } from '../../components/refund/pages/RejectedRefund';
import { Configuration } from '../../components/refund/pages/Configuration';
import { AdminCustomers } from '../../components/admin-customers/pages/AdminCustomers';
import { ClassifiedProduct } from '../../components/admin-customers/pages/ClassifiedProduct';
import { ClassifiedPackages } from '../../components/admin-customers/pages/ClassifiedPackages';
import { AdminAllSellers } from '../../components/admin-sellers/pages/AdminAllSellers';
import { AdminPayout } from '../../components/admin-sellers/pages/AdminPayout';
import { AdminPayoutRequest } from '../../components/admin-sellers/pages/AdminPayoutRequest';
import { AdminCommision } from '../../components/admin-sellers/pages/AdminCommision';
import { AdminPackages } from '../../components/admin-sellers/pages/AdminPackage';
import { AdminSellerForm } from '../../components/admin-sellers/pages/AdminSellerForm';
import { AdminAllUpload } from '../../components/admin-upload/pages/AdminAllUpload';
import { InHouseReport } from '../../components/admin-report/pages/InHouseReport';
import { SellerProductSale } from '../../components/admin-report/pages/SellerProductSale';
import { AdminProductStock } from '../../components/admin-report/pages/AdminProductStock';
import { AdminProductWishlist } from '../../components/admin-report/pages/AdminProductWishlist';
import { AdminUserSearches } from '../../components/admin-report/pages/AdminUserSearches';
import { AdminCommissionHistory } from '../../components/admin-report/pages/AdminCommissionHistory';
import { AdminWalletRechargeHistory } from '../../components/admin-report/pages/AdminWalletRechargeHistory';
import { AdminAllBlog } from '../../components/admin-blog/pages/AdminAllBlog';
import { AdminBlogCategories } from '../../components/admin-blog/pages/AdminBlogCategories';
import { AdminFlashDeal } from '../../components/admin-marketing/pages/AdminFlashDeal';
import { AdminNewsletter } from '../../components/admin-marketing/pages/AdminNewsletter';
import { AdminSubcribers } from '../../components/admin-marketing/pages/AdminSubcribers';
import { AdminCoupons } from '../../components/admin-marketing/pages/AdminCoupons';
import { AdminBulkSms } from '../../components/admin-marketing/pages/AdminBulkSms';
import { AdminTicket } from '../../components/admin-support/pages/AdminTicket';
import { AdminConversation } from '../../components/admin-support/pages/AdminConversation';
import { AdminQueries } from '../../components/admin-support/pages/AdminQueries';
import { AdminAffliateForm } from '../../components/admin-affliate/pages/AdminAffliateForm';
import { AdminAffliateConfiguration } from '../../components/admin-affliate/pages/AdminAffliateConfiguration';
import { AdminAffliateUsers } from '../../components/admin-affliate/pages/AdminAffliateUsers';
import { AdminReferralsUser } from '../../components/admin-affliate/pages/AdminReferralsUser';
import { AdminAffliateWithdrawRequest } from '../../components/admin-affliate/pages/AdminAffliateWithdrawRequest';
import { AdminAffliateLogs } from '../../components/admin-affliate/pages/AdminAffliateLogs';
import { AdminOptConfiguration } from '../../components/admin-otp/pages/AdminOptConfiguration';
import { AdminSmsTemplate } from '../../components/admin-otp/pages/AdminSmsTemplate';
import { AdminOtpCredentials } from '../../components/admin-otp/pages/AdminOtpCredentials';
import { AdminPaymentMethod } from '../../components/admin-offline-pay/pages/AdminPaymentMethod';
import { AdminWalletRecharge } from '../../components/admin-offline-pay/pages/AdminWalletRecharge';
import { AdminSellerPackage } from '../../components/admin-offline-pay/pages/AdminSellerPackage';
import { AdminCustomersPackage } from '../../components/admin-offline-pay/pages/AdminCustomersPackage';
import { AdminAsianCredentials } from '../../components/admin-asian-payment/pages/AdminAsianCredentials';
import { AdminAfricanCrendential } from '../../components/admin-african/pages/AdminAfricanCrendential';
import { AdminAfricanConfiguration } from '../../components/admin-african/pages/AdminAfricanConfiguration';
import { AdminAllStaffs } from '../../components/admin-staffs/pages/AdminAllStaffs';
import { AdminPermissionRole } from '../../components/admin-staffs/pages/AdminPermissionRole';
import { AdminAddonManager } from '../../components/admin-addon/pages/AdminAddonManager';
import { AdminPointConfiguration } from '../../components/admin-club-point/pages/AdminPointConfiguration';
import { AdminSetProductPoints } from '../../components/admin-club-point/pages/AdminSetProductPoints';
import { AdminUserPoints } from '../../components/admin-club-point/pages/AdminUserPoints';
import { AdminHeader } from '../../components/admin-web-setup/pages/AdminHeader';
import { AdminFooter } from '../../components/admin-web-setup/pages/AdminFooter';
import { AdminPages } from '../../components/admin-web-setup/pages/AdminPages';
import { AdminAppearance } from '../../components/admin-web-setup/pages/AdminAppearance';

export const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="pos/*">
          <Route path="manager" element={<PosManager />} />
          <Route path="configuration" element={<PosConfiguration />} />
        </Route>

        <Route path="product/*">
          <Route path="create" element={<CreateProduct />} />
          <Route path="all-product" element={<AllProduct />} />
          <Route path="inhouse" element={<InHouseProduct />} />
          <Route path="seller-products" element={<SellersProduct />} />
          <Route path="digital-products" element={<DigitalProduct />} />
          <Route path="bulk-import" element={<BulkProductImport />} />
          <Route path="bulk-export" element={<UploadExport />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brand" element={<ProductBrands />} />
          <Route path="attributes" element={<Attributes />} />
          <Route path="colors" element={<Colors />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="auction/*">
          <Route path="create" element={<h1>create-auctions</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="wholesale/*">
          <Route path="create" element={<WholeSaleCreate />} />
          <Route path="all" element={<AllWholeSale />} />
          <Route path="inhouse" element={<WholeSaleInHouse />} />
          <Route path="seller" element={<AllWholeSaleProducts />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="sales/*">
          <Route path="create" element={<h1>create-sales</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="delivery/*">
          <Route path="all" element={<AllDeliveryBoy />} />
          <Route path="create" element={<AddDeliveryBoy />} />
          <Route path="payments" element={<DeliveryPayHistory />} />
          <Route path="collected" element={<DeliveryCollection />} />
          <Route path="cancel" element={<CancelRequest />} />
          <Route path="configuration" element={<ConfigureDelivery />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="refund/*">
          <Route path="request" element={<RefundRequest />} />
          <Route path="approved" element={<ApproveFunds />} />
          <Route path="rejected" element={<RejectedRefund />} />
          <Route path="configuration" element={<Configuration />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="customers/*">
          <Route path="list" element={<AdminCustomers />} />
          <Route path="products" element={<ClassifiedProduct />} />
          <Route path="packages" element={<ClassifiedPackages />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="sellers/*">
          <Route path="all" element={<AdminAllSellers />} />
          <Route path="payouts" element={<AdminPayout />} />
          <Route path="payout-request" element={<AdminPayoutRequest />} />
          <Route path="commission" element={<AdminCommision />} />
          <Route path="package" element={<AdminPackages />} />
          <Route path="verification-form" element={<AdminSellerForm />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="upload/*">
          <Route path="all-upload" element={<AdminAllUpload />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="report/*">
          <Route path="inhouse" element={<InHouseReport />} />
          <Route path="sales" element={<SellerProductSale />} />
          <Route path="stock" element={<AdminProductStock />} />
          <Route path="wishlist" element={<AdminProductWishlist />} />
          <Route path="searches" element={<AdminUserSearches />} />
          <Route path="history" element={<AdminCommissionHistory />} />
          <Route
            path="wallet-history"
            element={<AdminWalletRechargeHistory />}
          />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="blog/*">
          <Route path="all" element={<AdminAllBlog />} />
          <Route path="categories" element={<AdminBlogCategories />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="marketing/*">
          <Route path="flash" element={<AdminFlashDeal />} />
          <Route path="newsletter" element={<AdminNewsletter />} />
          <Route path="subscribers" element={<AdminSubcribers />} />
          <Route path="bulk-sms" element={<AdminBulkSms />} />
          <Route path="coupon" element={<AdminCoupons />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="support/*">
          <Route path="ticket" element={<AdminTicket />} />
          <Route path="conversation" element={<AdminConversation />} />
          <Route path="queries" element={<AdminQueries />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="affliate/*">
          <Route path="registration" element={<AdminAffliateForm />} />
          <Route
            path="configuration"
            element={<AdminAffliateConfiguration />}
          />
          <Route path="affliate-users" element={<AdminAffliateUsers />} />
          <Route path="referral-users" element={<AdminReferralsUser />} />
          <Route
            path="withdraw-request"
            element={<AdminAffliateWithdrawRequest />}
          />
          <Route path="logs" element={<AdminAffliateLogs />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="offline-payment/*">
          <Route path="method" element={<AdminPaymentMethod />} />
          <Route path="wallet-recharge" element={<AdminWalletRecharge />} />
          <Route path="customer-package" element={<AdminCustomersPackage />} />
          <Route path="seller-package" element={<AdminSellerPackage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="asian-payment/*">
          <Route path="set-credentials" element={<AdminAsianCredentials />} />
        </Route>
        <Route path="african-payment/*">
          <Route
            path="african-configuration"
            element={<AdminAfricanConfiguration />}
          />
          <Route
            path="african-credential"
            element={<AdminAfricanCrendential />}
          />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="payment-gateway/*">
          <Route path="create" element={<h1>create-payment-gateway</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="club/*">
          <Route path="configuration" element={<AdminPointConfiguration />} />
          <Route
            path="set-product-points"
            element={<AdminSetProductPoints />}
          />
          <Route path="user-points" element={<AdminUserPoints />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="otp/*">
          <Route path="configuration" element={<AdminOptConfiguration />} />
          <Route path="sms-templates" element={<AdminSmsTemplate />} />
          <Route path="credentials" element={<AdminOtpCredentials />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="websetup/*">
          <Route path="header" element={<AdminHeader />} />
          <Route path="footer" element={<AdminFooter />} />
          <Route path="pages" element={<AdminPages />} />
          <Route path="appearance" element={<AdminAppearance />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="configuration/*">
          <Route path="create" element={<h1>create-configuration</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="staffs/*">
          <Route path="all" element={<AdminAllStaffs />} />
          <Route path="permission" element={<AdminPermissionRole />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="system/*">
          <Route path="create" element={<h1>create-system</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="addon/*">
          <Route path="manager" element={<AdminAddonManager />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
        <Route path="*" element={<AdminHome />} />
      </Routes>
    </div>
  );
};
