import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AddUser = React.lazy(() => import('./views/users/AddUser'));
const EditUser = React.lazy(() => import('./views/users/EditUser'));

//products
const Products = React.lazy(() => import('./views/products/Products'));
const Product = React.lazy(() => import('./views/products/Product'));
const AddProduct = React.lazy(() => import('./views/products/AddProduct'));
const EditProduct = React.lazy(() => import('./views/products/EditProduct'));
  //tipe-produk
  const Types = React.lazy(() => import('./views/products/types/Types'));
  const Type = React.lazy(() => import('./views/products/types/Type'));
  const AddType = React.lazy(() => import('./views/products/types/Add'));
  const EditType = React.lazy(() => import('./views/products/types/Edit'));
  //manufacture-produk
  const Manufactures = React.lazy(() => import('./views/products/manufactures/Manufactures'));
  const Manufacture = React.lazy(() => import('./views/products/manufactures/Manufacture'));
  const AddManufacture = React.lazy(() => import('./views/products/manufactures/Add'));
  const EditManufacture = React.lazy(() => import('./views/products/manufactures/Edit'));

//offers
const Offers = React.lazy(() => import('./views/offers/Offers'));
const Offer = React.lazy(() => import('./views/offers/Offer'));
const AddOffers = React.lazy(() => import('./views/offers/AddOffers'));
const StatusOffers = React.lazy(() => import('./views/offers/OffersAcc'));

//purchases
const Purchases = React.lazy(() => import('./views/purchases/Purchases'));
const Purchase = React.lazy(() => import('./views/purchases/Purchase'));
const ListRegPurchases = React.lazy(() => import('./views/purchases/ListRegPurchases'));
const RegPurchase = React.lazy(() => import('./views/purchases/RegPurchase'));
  //lokasi-pembelian
  const Locations = React.lazy(() => import('./views/purchases/locations/Locations'));
  const Location = React.lazy(() => import('./views/purchases/locations/Location'));
  const AddLocation = React.lazy(() => import('./views/purchases/locations/Add'));
  const EditLocation = React.lazy(() => import('./views/purchases/locations/Edit'));

// const Customers = React.lazy(() => import('./views/customers/Customers'));
const Serials = React.lazy(() => import('./views/serials/'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  //pengguna
  { path: '/pengguna', exact: true,  name: 'Users', component: Users },
  { path: '/pengguna/show/:id', exact: true, name: 'User Details', component: User },
  { path: '/pengguna/tambah', name: 'Tambah', component: AddUser },
  { path: '/pengguna/edit/:id', name: 'Ubah', component: EditUser },

  //produk
  { path: '/produk', exact: true, name: 'Produk', component: Products },
  { path: '/produk/show/:id', exact:true, name: 'Product Details', component: Product },
  { path: '/produk/edit/:id', name: 'Ubah', component: EditProduct },
  { path: '/produk/tambah', name: 'Tambah', component: AddProduct},
      //tipe-produk
      { path: '/produk/tipe', exact: true, name: 'Tipe Produk', component: Types },
      { path: '/produk/tipe/show/:id', exact:true, name: 'Detail', component: Type },
      { path: '/produk/tipe/edit/:id', name: 'Ubah', component: EditType },
      { path: '/produk/tipe/tambah', name: 'Tambah', component: AddType},
      //manufacture-produk
      { path: '/produk/manufaktur', exact: true, name: 'Manufaktur Produk', component: Manufactures },
      { path: '/produk/manufaktur/show/:id', exact:true, name: 'Detail', component: Manufacture },
      { path: '/produk/manufaktur/edit/:id', name: 'Ubah', component: EditManufacture },
      { path: '/produk/manufaktur/tambah', name: 'Tambah', component: AddManufacture},

  //penawaran
  { path: '/penawaran', exact: true, name: 'Penawaran', component: Offers},
  { path: '/penawaran/show/:id', exact: true, name: 'Detail Penawaran', component: Offer},
  { path: '/penawaran/tambah', name: 'Tambah', component: AddOffers},
  { path: '/penawaran/status', name: 'Status', component: StatusOffers},

  //pembelian
  { path: '/pembelian/', exact: true, name: 'Pembelian', component: Purchases},
  { path: '/pembelian/show/:id', exact: true, name: 'Detail', component: Purchase},
  { path: '/pembelian/daftar', exact: true, name: 'Daftar', component: ListRegPurchases},
  { path: '/pembelian/daftar/:id', name: 'Tambah', component: RegPurchase},
    //manufacture-lokasi
    { path: '/pembelian/lokasi', exact: true, name: 'Lokasi Pembelian', component: Locations },
    { path: '/pembelian/lokasi/show/:id', exact:true, name: 'Detail', component: Location },
    { path: '/pembelian/lokasi/edit/:id', name: 'Ubah', component: EditLocation },
    { path: '/pembelian/lokasi/tambah', name: 'Tambah', component: AddLocation },

  //pelanggan
  // { path: '/pelanggan', exact: true, name: 'Pelanggan', component: Customers},

  //serials
  { path: '/serials', exact: true, name: 'Serial Number', component: Serials},

];

export default routes;
