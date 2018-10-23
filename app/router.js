import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
    didTransition() {
        this._super(...arguments);
        window.scrollTo(0, 0);
    }
});

Router.map(function() {
    this.route('movie-review', function() {
        this.route('view', {path: 'view/:id'});
    });
});

export default Router;
