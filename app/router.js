import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('patterns', function() {
    this.route('substate-error');
    this.route('substate-loading');
    this.route('component', function() {
      this.route('reusable');
      this.route('single-purpose');
      this.route('provider');
      this.route('presentational');
      this.route('contextual');
      this.route('declarative-rendering');
    });

    this.route('model', function() {
      this.route('tracking');
    });
  });
  this.route('anti-patterns', function() {
    this.route('controller-substate-loading');
  });

  this.route('general', function() {
    this.route('use-pods');
    this.route('data-flow');
  });
});

export default Router;
