import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Cliente']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cadastrar Cliente',
    to: '/cadastro-cliente',
    icon: 'cil-pencil'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Listar Clientes',
    to: '/clientes',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cadastro',
    to: '/cadastro',
    icon: 'cil-pencil',
  },
]

export default _nav
