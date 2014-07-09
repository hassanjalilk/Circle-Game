

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
				.css('left', this.x)
				.css('top', this.y)
				.css('height, this.diameter')
				.css('width', 'this.diameter')
				.on('click', function() {
					_this.kill();
				});

				$('#game').append(this.$me);
		};

			this.move = function() {
				var _this = this
				this.$me.animate({
					top: Math.random() * 450,
					left: Math.random() * 450
				}, {
					duration: _this.speed,
					complete: function() {
						_this.move();
					}
				});
			};

				this.kill = function() {
					this.$me.css('background-color', 'red')
					.effect({
						effect: 'explode'
						duration: 100,
						complete: function() {
							$(this).remove();
							$('#score').text(window.game.score += 100);
						},
						dueue: false
					});
				};

				Circle.init = function() {
					var circle = new Circle();
					circle.render();
					circle.move();
					return circle;
				};
	}	

























