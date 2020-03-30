import Component from '@glimmer/component';
import { linearMapRange } from '../helpers/linear-map-range';
import { htmlSafe } from '@ember/string';
import { inject as service } from '@ember/service';

export default class TopBarComponent extends Component {
  @service media;

  get styles() {
    let style = '';

    if (this.media.isMobile) {
      style = `transform: translateY(calc(-${linearMapRange(this.args.relativePosition, 0, 1, 0, 100)}% - 1px));`;
    } else {
      style = `margin-left: ${this.args.position}px; width: calc(100% - ${this.args.position}px);`;
    }

    return htmlSafe(style);
  }

  get headerStyles() {
    let style = '';

    if (this.media.isMobile) {
      style = `opacity: ${1 - Math.min(this.args.relativePosition * 2, 1)};`;
    }

    return htmlSafe(style);
  }
}
