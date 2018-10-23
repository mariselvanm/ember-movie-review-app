import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['parallax-header'],
	willRender() {
		let img = new Image();
	    img.src = this.get('imageurl');

	    img.onload = () => {
	      this.$header.css('height', img.height / 10 + "vh");
	    }
	},
	didInsertElement() {
		this._super(...arguments);
		
	  	// Header Image
	  	this.$header = this.$('.header-image');
	  	// Main Content
	  	let $mainContent = this.$('.main-content');

	  	// Get Header height
	  	// this.headerHeight = this.$header.clientHeight;
	  	
	  	// Set some CSS to Main content
	  	this.$header.css('webkitTransformOrigin', 'center bottom');
	  	$mainContent.css('position', 'absolute');	  	

	  	$(window).scroll((e) => {
	  		let scrollTop = e.currentTarget.scrollY,
	  			translateAmt = 0;
	  		if (scrollTop >= 0) {
  				translateAmt = scrollTop / 2;
  			}
  			
  			this.$header.css('webkitTransform', 'translate3d(0,' + translateAmt + 'px,0)');
	  	});
	},	
});
