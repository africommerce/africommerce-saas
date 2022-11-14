import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminHome } from '../../components/admin/pages/AdminHome';
import { PosManager } from '../../components/admin/pages/PosManager';
import { CreateProduct } from '../../components/products/CreateProduct';

export const AdminRoutes = () => {
  console.log('from admin route');
  return (
    <div>
      <Routes>
        <Route path="pos/*">
          <Route path="manager" element={<PosManager />} />
          <Route path="configuration" element={<h1>configuration</h1>} />
        </Route>

        <Route path="product/*">
          <Route path="create" element={<CreateProduct />} />
          <Route path="add" element={<h1>add-product</h1>} />
          <Route path="inhouse" element={<h1>inhouse-product</h1>} />
          <Route path="seller-products" element={<h1>Seller-product</h1>} />
          <Route path="digital-products" element={<h1>Digital-product</h1>} />
          <Route path="bulk-import" element={<h1>bulk-Import</h1>} />
          <Route path="bulk-export" element={<h1>bulk-export</h1>} />
          <Route path="brands" element={<h1>Brans</h1>} />
          <Route path="attributes" element={<h1>attributes</h1>} />
          <Route path="colors" element={<h1>Colors</h1>} />
          <Route path="products" element={<h1>Products</h1>} />
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
