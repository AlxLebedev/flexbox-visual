export default function validator(value) {
  if (value.length > 1 && value[0] === '0') return false;
  return value.match(/^\d+$/) ? true : false
}
