import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return Ember.$.ajax({
            url: `https://ra-movie-review-app.herokuapp.com/get-movie-details-by-id/${params.id}`,
            method: "GET",
            dataType: 'json',
        }).then(movie => {
        	console.log(movie);
            return movie;
        }, (err) => {
            console.log(err);
        });
	},
	actions: {
		goBack() {
			this.transitionTo('movie-review');
		},
	},
	setupController(controller, models) {
        this._super(...arguments);
        var actions = {
            submit() {
                let newReview = this.get('newReview');
                Ember.$.ajax({
                    url: `https://ra-movie-review-app.herokuapp.com/post-review/${this.model._id}`,
                    method: 'PUT',
                    dataType: 'json',
                    data: newReview,
                }).then(movie => {
                    this.set('model', movie);
                    this.set('newReview', {message: '', rating: 0, name: 'Anonymous'});
                    this.set('showModal', false);
                }, (err) => {
                    console.log(err);
                    this.set('newReview', {message: '', rating: 0, name: 'Anonymous'});
                    this.set('showModal', false);
                });
            },
        }
        controller.setProperties({
            'newReview': {
                message: "",
                rating: 0,
                name: "Anonymous"
            },
            'actions': actions
        });
    }
});
