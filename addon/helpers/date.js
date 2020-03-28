import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export function date([post], { format = 'MMM DD, YYYY', timeago }) {
  // set to published_at by default, if it's available
  // otherwise, this will print the current date
  const date = post?.date ? dayjs(post.date) : dayjs();

  return timeago ? date.fromNow() : date.format(format);
}

export default helper(date);
