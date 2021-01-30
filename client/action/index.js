// navigate to home
// export const actionCreatorName = (beer) => {
//   return {
//     type: 'ACTION_TYPE'
//   }
// }
export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target // cart or beer
  }
}
