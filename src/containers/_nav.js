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
    name: 'Listar Clientes',
    to: '/clientes',
    icon: 'cil-address-book',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cadastro',
    to: '/cadastro',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Alterar Senha',
    to: '/alterar-senha',
    icon: 'cil-asterisk',
  },
 

]

export default _nav
