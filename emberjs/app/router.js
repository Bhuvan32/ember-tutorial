import EmberRouter from '@ember/routing/router';
import config from 'emberjs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('cart', { path: 'shoping-cart' });
  this.route('item', { path: '/item/:item_id' });
});
