import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminHome } from '../../components/admin/pages/AdminHome';
import { PosConfiguration } from '../../components/admin/pages/PosConfiguration';
import { PosManager } from '../../components/admin/pages/PosManager';
import { CreateProduct } from '../../components/products/CreateProduct';
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

        <Route path="whole-sale/*">
          <Route path="create" element={<h1>create-whole-sale</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="sales/*">
          <Route path="create" element={<h1>create-sales</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="delivery/*">
          <Route path="create" element={<h1>create-delivery</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="refund/*">
          <Route path="create" element={<h1>create-refund</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="customer/*">
          <Route path="create" element={<h1>customer-sellers</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="sales/*">
          <Route path="create" element={<h1>create-sales</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="upload/*">
          <Route path="create" element={<h1>create-upload</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="report/*">
          <Route path="create" element={<h1>create-report</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="blog/*">
          <Route path="create" element={<h1>create-blog</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="marketing/*">
          <Route path="marketing" element={<h1>create-marketing</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="support/*">
          <Route path="create" element={<h1>create-support</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="affliate/*">
          <Route path="create" element={<h1>create-affliate</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="offline-payment/*">
          <Route path="create" element={<h1>create-offline-payment</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="payment-gateway/*">
          <Route path="create" element={<h1>create-payment-gateway</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="club/*">
          <Route path="create" element={<h1>create-club</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="otp/*">
          <Route path="create" element={<h1>create-otp</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="websetup/*">
          <Route path="create" element={<h1>create-webSetup</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="configuration/*">
          <Route path="create" element={<h1>create-configuration</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="staffs/*">
          <Route path="create" element={<h1>create-staffs</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="system/*">
          <Route path="create" element={<h1>create-system</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>

        <Route path="addon/*">
          <Route path="create" element={<h1>create-Addon</h1>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
        <Route path="*" element={<AdminHome />} />
      </Routes>
    </div>
  );
};
