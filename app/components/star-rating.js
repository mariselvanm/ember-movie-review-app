import Ember from 'ember';

export default Ember.Component.extend({
	rating: 0,
	actions: {
		setRating(newRating) {
			console.log(newRating);
			this.set('rating', newRating);
		}
	}
});
