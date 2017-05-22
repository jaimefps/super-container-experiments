export default function (state = true, action) {
  switch (action.type) {
    case 'SWITCH_BOOLEAN':
      return action.payload;
    default:
      return state;
  }
}