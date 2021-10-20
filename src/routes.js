import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Clientes = React.lazy(() => import('./views/clientes/Clientes'));
const CadastroCliente = React.lazy(() => import('./views/clientes/CadastroCliente'));
const Cadastro = React.lazy(() => import('./views/Cadastro/Cadastro'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/clientes', exact: true, name: 'Clientes', component: Clientes },
  { path: '/cadastro-cliente', exact: true, name: 'Cadastrar Cliente', component: CadastroCliente },
  { path: '/cadastro', exact: true, name: 'Cadastro', component: Cadastro }
];

export default routes;
