import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import sidebarActions from '../store/actions/sidebarActions'
import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
// import sidebarReducer from 'src/store/reducers/sidebarReducer'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarReducer.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch(sidebarActions.set({ sidebarShow: val }))}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src="/logo.svg" width="500" height="37" alt="logo" style={{marginRight:'150px'}}/>
        {/* <img src="/logo-2.svg" width="35" height="35" className="c-sidebar-brand-minimized" alt="logo"/> */}
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
