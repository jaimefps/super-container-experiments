export const switchBoolean = (boolean) => ({
  type: 'SWITCH_BOOLEAN',
  payload: !boolean,
});