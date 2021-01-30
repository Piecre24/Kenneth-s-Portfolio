export const NAVIGATE = 'NAVIGATE'

const navigation = (state = 'home', action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.target
    default:
      return state
  }
}

export default navigation
