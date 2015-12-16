
$(document).ready(function(){
	//Level 1 is to indicate if was complete or not
	// var level1 = false;
	// var level2 = false;
	//sets level

	// get the local storage user
	var currentUser = getUser();
	var level = 0;
	
	// if the current user has a saved level, restore it
	if (currentUser.level){
		level = currentUser.level;
	}
	// if the current user has a saved mood, update the icon
	if (currentUser.mood){
		$('.icon-display').html('<img src="img/'+currentUser.mood+'.png">');
	}else (updateUser("mood",'dot') ) //DEFAULT MODE

	//DEFAULT SETTINGS
	$('.btn-row').hide();


	//LEVEL SELECTOR
//These levels are updating but not being recognized by the if level == statements
	// var challenge = $('level').val();

		$('.stop-btn').click(function(){
			level = 0
			updateUser("level",level);
		})
		$('.challenge1').click(function(){
			level = 1
			updateUser("level",level);
		});

		$('.challenge2').click(function(){
			level = 2
			updateUser("level",level);
		});

		$('.challenge3').click(function(){
			level = 3
			updateUser("level",level);
		});

		$('.challenge5').click(function(){
			level = 4
			updateUser("level",level);
		});

		$('.challenge5').click(function(){
			level = 5
			updateUser("level",level);
		});




	var test = setInterval(complete, 1000);

	//Time Calculator
	function getTimeRemaining(endtime){
		//Date.parse is converting to milliseconds. Essentially I'm trying to build a calculator with the var time
		var time = deadline;
		var seconds = Math.floor( (time/1000) % 60 );
		var minutes = Math.floor( (time / 1000 / 60 ) % 60 );
		return {
			'total': time,
			'minutes': minutes,
			'seconds': seconds
		};
	}


		if( level == 1 ){
			console.log("level 1"); //console log just level to test
			 // imageEnter(sendUp);
			var deadline = 31000;

		}else if ( level == 2 ){
			console.log("level 2");
			var deadline = 46000;
		}else if ( level == 3 ){
			console.log("level 3");
			var deadline = 130000;
		}else if ( level == 4 ){
			console.log("level 4");
			var deadline = 500000;
		}else if ( level == 2 ){
			console.log("level 5");
			var deadline = 1000000;
		}else{
			console.log("none");
		}

		function complete(){
			if ( level !==0 ){
				deadline -= 1000;
				// console.log("complete");
				 console.log(deadline);
				if (deadline == 0 && level != 0){
					$('.icon-display').hide();
					$('.complete-display').html('<p class="complete">' + 'Complete' + '</p>').slideDown('slow');
					$('#timer').hide();
					$('.stop').hide();
					$('.btn-row').show();
					level = 0;
					// $('.challenge-btn')show();

					clearInterval(test);
					// when we're inside a function set a value for level1, puttin var before it will actually create a new variable called level1
					
				}else{
					//countdown();
					// to use "time.seconds" we need to first get a time object back from getTimeRemaining()
					
					var time = getTimeRemaining(deadline); 
					// console.log(time);
					$('#timer').text(time.minutes + ":" + time.seconds );
					$('.motivation').css( 'visibility', 'hidden' );
					

					
					// $('.challenge-btn')hide();
				};
			}else{
				$('#timer').html('Stopped');
				$('.stop').hide();
				$('.btn-row').show();
				level=0;

				// $('#timer').hide;
			}
		}

	//IMAGE//
	
		$('.white').click(function(){
			$('.icon-display').html('<img src="img/empty.png">');
			updateUser("mood",'white');
		});

		$('.dot').click(function(){
			$('.icon-display').html('<img src="img/dot.png">');
			updateUser("mood",'dot');
		});

		$('.heart').click(function(){
			$('.icon-display').html('<img src="img/heart.png">');
			updateUser("mood",'heart');
		});


		$('.flame').click(function(){
			$('.icon-display').html('<img src="img/flame.png">');
			updateUser("mood",'flame');

		});

		$('.water').click(function(){
			$('.icon-display').html('<img src="img/water.png">');
			updateUser("mood",'water');

		});

		$('.air').click(function(){
			$('.icon-display').html('<img src="img/air.png">');
			updateUser("mood",'air');

		});

		$('.cat').click(function(){
			$('.icon-display').html('<img src="img/cat.png">');
			updateUser("mood",'cat');

		});

		$('.money').click(function(){
			$('.icon-display').html('<img src="img/money.png">');
			updateUser("mood",'money');
		});
	});
	
	/**USER SET UP**/
	function updateUser(setting,value){
		var user = JSON.parse(localStorage.getItem('user'));
		if (!user){
			user = {};
		}
		user[setting] = value; // user.mood
		localStorage.setItem('user', JSON.stringify(user));
	}

	function getUser(){
		var user = JSON.parse(localStorage.getItem('user'));
		if (!user){
			return {};
		}
		return user;
	}

	/**AUDIO PLAYER**/
	// $('.audio1').click(function(){
	// 		$('.music').append('<source src="audio/song.mp3" type="audio/mp3">');
	// 		updateUser("music",'song1');
	// 	});
	
