export const NAVIGATE = 'NAVIGATE'

const initialPage = 'listing'

const activePage = (state = initialPage, action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.target
    default:
      return state
  }
}

export default activePage
