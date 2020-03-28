import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import seedrandom from 'seedrandom/seedrandom';

const gradients = [
  `#1CB5E0 0%, #000851 100%`,
  `#00C9FF 0%, #92FE9D 100%`,
  `#FC466B 0%, #3F5EFB 100%`,
  `#3F2B96 0%, #A8C0FF 100%`,
  `#FDBB2D 0%, #22C1C3 100%`,
  `#FDBB2D 0%, #3A1C71 100%`,
  `#e3ffe7 0%, #d9e7ff 100%`,
  `#4b6cb7 0%, #182848 100%`,
  `#9ebd13 0%, #008552 100%`,
  `#0700b8 0%, #00ff88 100%`,
  `#d53369 0%, #daae51 100%`,
  `#efd5ff 0%, #515ada 100%`,
  `#00d2ff 0%, #3a47d5 100%`,
  `#f8ff00 0%, #3ad59f 100%`,
  `#fcff9e 0%, #c67700 100%`,
];

function linearMap(input, x1, x2, y1, y2) {
  return y1 + (y2 - y1) / (x2 - x1) * (input - x1);
}

function gradientBg(params, { seed, angle = 90 }) {
  const rng = seedrandom(seed);
  const index = Math.round(linearMap(rng(), 0, 1, 0, gradients.length - 1));
  return htmlSafe(`background: linear-gradient(${angle}deg, ${gradients[index]})`);
}

export default helper(gradientBg);
