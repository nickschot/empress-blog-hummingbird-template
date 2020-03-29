import { helper } from '@ember/component/helper';

export function linearMap(input, x1, x2, y1, y2) {
  return y1 + (y2 - y1) / (x2 - x1) * (input - x1);
}

export default helper(function linearMapRange(params/*, hash*/) {
  return linearMap(...params);
});
