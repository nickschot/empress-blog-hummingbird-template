import Component from '@glimmer/component';
import move, { continuePrior } from 'ember-animated/motions/move';
import resize from 'ember-animated/motions/resize';
import opacity from 'ember-animated/motions/opacity';
import boxShadow from 'ember-animated/motions/box-shadow';
import adjustCSS from 'ember-animated/motions/adjust-css';
import { parallel } from 'ember-animated';

export default class PostComponent extends Component {
  *transition({ receivedSprites, sentSprites, removedSprites }) {
    // received and sent sprites are flying above all the others
    receivedSprites.concat(sentSprites).forEach(sprite => {
      sprite.applyStyles({
        'z-index': '1',
      });
    });

    receivedSprites.forEach(parallel(move, resize, boxShadow, adjustCSS.property('border-radius')));
    sentSprites.forEach(parallel(move, resize, boxShadow, adjustCSS.property('border-radius')));

    removedSprites.forEach(sprite => {
      sprite.endTranslatedBy(0, 0);
      continuePrior(sprite);
      opacity(sprite, { to: 0 });
    });
  }
}
