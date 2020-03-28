import { helper } from '@ember/component/helper';
import { parse, distanceInWordsToNow, format } from 'date-fns';

export function date([post], hash) {
  let date;

  // set to published_at by default, if it's available
  // otherwise, this will print the current date
  if (post?.date) {
      date = parse(post.date);
  } else {
      date = new Date();
  }

  let _format = hash.format || 'MMM DD, YYYY';
  let timeago = hash.timeago;

  if (timeago) {
      date = distanceInWordsToNow(date);
  } else {
      date = format(date, _format);
  }

  return (date);
}

export default helper(date);
