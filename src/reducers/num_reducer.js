export default function (state=0, action) {
  switch (action.type) {
    case 'SWITCH_NUMBER':
      return state === 0 ? 1 : 0;
    default:
      return state;
  }
}