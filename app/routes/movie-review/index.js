import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        return Ember.$.ajax({
            url: 'https://ra-movie-review-app.herokuapp.com/get-all-movie-images',
            method: "GET",
            dataType: 'json',
        }).then(movies => {
            return movies;
        }, (err) => {
            console.log(err);
        });
    },

    actions: {
    	viewMovie(id) {
    		this.transitionTo('movie-review.view', id);
    	}
    }
});
