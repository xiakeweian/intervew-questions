export const increment = ({ type, payload = {} }) => {
  return {
    type,
    payload,
  }
}
