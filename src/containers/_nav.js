import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Início',
    to: '/dashboard',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Clientes',
    to: '/clientes',
    icon: 'cil-address-book',
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Alterar Senha',
    to: '/alterar-senha',
    icon: 'cil-asterisk',
  },
 

]

export default _nav
