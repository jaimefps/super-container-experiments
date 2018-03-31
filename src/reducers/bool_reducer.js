export default function (state = true, action) {
  switch (action.type) {
    case 'SWITCH_BOOLEAN':
      return state ? false : true;
    default:
      return state;
  }
}