

$(document).ready(function() {
		window.game = new Game(10, 10)
		window.game.start();
	});


	function Circle () {
		this.x = Math.random() * 450;
		this.y = Math.random() * 450;
		this.diameter = 30 + Math.random() * 50;
		this.speed = 500 + Math.random() * 1500;

		this.render = function() {
			var _this = this;

			this.$me = $('<div class = "circle"></div>')
				.css('left')
		}

	}