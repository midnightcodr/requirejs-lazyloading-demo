window.app={
	call_x: function(msg) {
		console.log('calling speak function in module x');
		require(['js/util/modulex'], function(fx) {
			fx.speak(msg);
		});
	},
	call_y: function(a,b) {
		console.log('calling add function in module y');
		require(['js/util/moduley'], function(fy) {
			console.log( 'The answer to add '+a+' and '+b+' is '+fy.add(a,b) );
		});
	}
};
