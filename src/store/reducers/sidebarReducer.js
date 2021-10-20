const initialState = {
    sidebarShow: 'responsive',
    sidebarUnfoldable: false
  }
  
  const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET':
        return {...state, ...action.values }
      default:
        return state
    }
  }
  
  export default sidebarReducer;