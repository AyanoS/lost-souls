//floor = 0, wall = 1, door = 2, enemy = 3

//spawn
var room_spawn = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			  	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	  [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
//battle room 1
var room1_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
			  	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			  	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [2,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room1_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
//battle room 2
var room2_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room2_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
//battle room 3
var room3_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room3_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

//battle room 4
var room4_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room4_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
//battle room 5
var room5_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,1,0,3,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room5_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

//boss room 1
var room1_boss = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		  	 	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			   	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			   	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

//key room 1
var room1_keyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
			  	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			  	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room1_key = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

//challenge room 1
var room1_challengeon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 	     [1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1],
				   	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	     [2,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,1],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room1_challenge = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
					   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room2_challengeon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 	     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
				   	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	     [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room3_challengeon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 	     [1,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,1],
				   	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				  	     [2,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,0,0,3,0,0,0,0,0,0,3,0,0,0,0,0,3,0,0,1],
					     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
					     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];					   

//shop room
var room_shop = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				 [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

var room = room_spawn; 

var tilesize = 96;
var init = true;
var chardefaultspeed = tilesize/8;
var charspeed = chardefaultspeed;
var charmovement = 0;
var slowing = 0;
var attack = 1;
var enemynumber = 0;
var gameon = true;
var dash = false;
var keyboss = false;
var plate = false;
var challenge = false;
var bossfight = false;
var boss_attack = false;
var bossinv = false;
var boss_healthbar = [];
var levelcomplete = false;
var reward = false;
var money = 0;
var itemprice = 10;
var shopitems = [];
var maxhealth = 3;
var health = maxhealth;
var healthbar = [];
var invincibility = false;
var depth = 1;
var musicplay = false;
var musicactive = false;
/*empty = 0, spawn = 1, battle = 2, boss = 3, treasure = 4, challenge = 5, key = 6, shop = 7, unkbattle = 8, unktreasure = 9,
unkchallenge = 10, unkkey = 11, unkshop = 12*/
level = [[8,8,8,8,8],
		 [8,8,3,8,8],
		 [8,8,1,8,8],
		 [8,8,8,8,8],
		 [8,8,8,8,8]];
var a = 2; var b = 2;
var mapa = []; var mapb = []; var mapc = []; var mapd = []; var mape =[]; var mapf = []; mapg = []; var maph = [];
mapx = []; mapy = []; var mapz = [];

function preload() {
//music
	soundFormats('mp3');
  	default1_music = loadSound('music/18 Deepwood Shrine.mp3');
  	challenge1_music = loadSound('music/19 Mini-Boss.mp3');
  	shop1_music = loadSound('music/17 Inside the House.mp3');
  	treasure1_music = loadSound('music/21 Element Appears.mp3');
  	boss1_music = loadSound('music/20 Boss.mp3');
  	win1_music = loadSound('music/05 Festival Outskirts.mp3');
  	default2_music = loadSound('music/Danny Baranowsky - The Binding of Isaac - 05 Sacrificial.mp3');
  	challenge2_music = loadSound('music/Danny Baranowsky - The Binding of Isaac - 15 Burning Ambush.mp3');
  	shop2_music = loadSound('music/Danny Baranowsky - The Binding of Isaac - 16 Greed.mp3');
  	treasure2_music = loadSound('music/Danny Baranowsky - The Binding of Isaac - 13 $4cR1f1c14-_.mp3');
  	boss2_music = loadSound('music/Danny Baranowsky - The Binding of Isaac - 40 My Innermost Apocalypse.mp3');
  	win2_music = loadSound('music/Danny Baranowsky - The Binding of Isaac - 20 Temptation.mp3');
  	default3_music = loadSound('music/30. Mastermind.mp3');
  	challenge3_music = loadSound('music/22. Damnation.mp3');
  	shop3_music = loadSound('music/29. 6_idkill.Vega.Cih  (feat. Chris Hite).mp3');
  	treasure3_music = loadSound('music/25. Death & Exhale.mp3');
  	boss3_music = loadSound('music/02. Rip & Tear.mp3');
  	win3_music = loadSound('music/Doom OST - E1M1 - At Dooms Gate.mp3');
//sprites
	sword = loadImage("sprites/1920x1080/sword.png");
	char_idle = loadAnimation("sprites/1920x1080/char/character_idle_1.png",
							  "sprites/1920x1080/char/character_idle_2.png",
							  "sprites/1920x1080/char/character_idle_3.png",
							  "sprites/1920x1080/char/character_idle_4.png");
	char_left = loadAnimation("sprites/1920x1080/char/character_walk_left1.png",
							  "sprites/1920x1080/char/character_walk_left2.png",
							  "sprites/1920x1080/char/character_walk_left3.png",
							  "sprites/1920x1080/char/character_walk_left4.png");
	char_right = loadAnimation("sprites/1920x1080/char/character_walk_right1.png",
							  "sprites/1920x1080/char/character_walk_right2.png",
							  "sprites/1920x1080/char/character_walk_right3.png",
							  "sprites/1920x1080/char/character_walk_right4.png");
	char_up = loadAnimation("sprites/1920x1080/char/character_walk_up1.png",
							  "sprites/1920x1080/char/character_walk_up2.png",
							  "sprites/1920x1080/char/character_walk_up3.png",
							  "sprites/1920x1080/char/character_walk_up4.png");
	char_down = loadAnimation("sprites/1920x1080/char/character_walk_down1.png",
							  "sprites/1920x1080/char/character_walk_down2.png",
							  "sprites/1920x1080/char/character_walk_down3.png",
							  "sprites/1920x1080/char/character_walk_down4.png");
	char_dashup = loadImage("sprites/1920x1080/char/character_dash_up.png");
	char_dashdown = loadImage("sprites/1920x1080/char/character_dash_down.png");
	char_dashleft = loadImage("sprites/1920x1080/char/character_dash_left.png");
	char_dashright = loadImage("sprites/1920x1080/char/character_dash_right.png");
	wallsprite = loadImage("sprites/1920x1080/depth1/wall.png");
	enemy1sprite = loadAnimation("sprites/1920x1080/enemy_1/slime1.png",
								 "sprites/1920x1080/enemy_1/slime2.png",
								 "sprites/1920x1080/enemy_1/slime3.png",
								 "sprites/1920x1080/enemy_1/slime4.png");
	enemy2sprite = loadAnimation("sprites/1920x1080/enemy_2/slime1.png",
								 "sprites/1920x1080/enemy_2/slime2.png",
							 	 "sprites/1920x1080/enemy_2/slime3.png",
								 "sprites/1920x1080/enemy_2/slime4.png");
	enemy2shot = loadImage("sprites/1920x1080/enemy_2/enemy_shot.png");
	enemy3sprite = loadAnimation("sprites/1920x1080/enemy_3/slime1.png",
								 "sprites/1920x1080/enemy_3/slime2.png",
							 	 "sprites/1920x1080/enemy_3/slime3.png",
								 "sprites/1920x1080/enemy_3/slime4.png");
	enemy3shot = loadImage("sprites/1920x1080/enemy_3/enemy_shot.png");
	doorsprite = loadImage("sprites/1920x1080/depth1/door.png");
	bossdoorsprite = loadImage("sprites/1920x1080/depth1/bossdoor.png");
	keysprite = loadImage("sprites/1920x1080/key.png");
	pressure_off = loadImage("sprites/1920x1080/pressure_off.png");
	pressure_on = loadImage("sprites/1920x1080/depth1/pressure_on.png");
	trapdoorsprite = loadImage("sprites/1920x1080/depth1/trapdoor.png");
	heart_hud = loadImage("sprites/1920x1080/heart_hud.png");
	empty_hud = loadImage("sprites/1920x1080/empty_hud.png");
	coin_sprite = loadImage("sprites/1920x1080/coin_item.png");
	heart_sprite = loadImage("sprites/1920x1080/heart_item.png");
	bonus_heartsprite = loadAnimation("sprites/1920x1080/bonus_heart_1.png", 
									  "sprites/1920x1080/bonus_heart_2.png",
								      "sprites/1920x1080/bonus_heart_3.png");
	bonus_bootssprite = loadImage("sprites/1920x1080/bonus_boots.png");
	bonus_moneysprite = loadImage("sprites/1920x1080/bonus_money.png");
	bonus_shopsprite = loadImage("sprites/1920x1080/bonus_shop.png");
	shopsprite = loadAnimation("sprites/1920x1080/shop/shop1.png",
							   "sprites/1920x1080/shop/shop2.png",
							   "sprites/1920x1080/shop/shop3.png");
	vignetting = loadImage("sprites/1920x1080/vignette.png");
	boss1_idle = loadAnimation("sprites/1920x1080/boss_1/boss3.png",
							   "sprites/1920x1080/boss_1/boss4.png",
							   "sprites/1920x1080/boss_1/boss3.png");
	boss1_jump = loadAnimation("sprites/1920x1080/boss_1/boss3.png",
							   "sprites/1920x1080/boss_1/boss4.png",
							   "sprites/1920x1080/boss_1/boss5.png",
							   "sprites/1920x1080/boss_1/boss0.png",
							   "sprites/1920x1080/boss_1/boss1.png",
							   "sprites/1920x1080/boss_1/boss2.png");
	boss_heart = loadImage("sprites/1920x1080/boss_1/heart_full.png");
	boss_empty = loadImage("sprites/1920x1080/boss_1/heart_empty.png");
	boss2_idle = loadAnimation("sprites/1920x1080/boss_2/slime_1.png",
							   "sprites/1920x1080/boss_2/slime_2.png",
							   "sprites/1920x1080/boss_2/slime_3.png",
							   "sprites/1920x1080/boss_2/slime_4.png");
	bosss_idle = loadImage("sprites/1920x1080/boss_secret/idle.png");
	bosss_ssword = loadImage("sprites/1920x1080/boss_secret/sword_small.png");
	bosss_sword = loadImage("sprites/1920x1080/boss_secret/sword.png");
	number0 = loadImage("sprites/1920x1080/numbers/0.png");
	number1 = loadImage("sprites/1920x1080/numbers/1.png");
	number2 = loadImage("sprites/1920x1080/numbers/2.png");
	number3 = loadImage("sprites/1920x1080/numbers/3.png");
	number4 = loadImage("sprites/1920x1080/numbers/4.png");
	number5 = loadImage("sprites/1920x1080/numbers/5.png");
	number6 = loadImage("sprites/1920x1080/numbers/6.png");
	number7 = loadImage("sprites/1920x1080/numbers/7.png");
	number8 = loadImage("sprites/1920x1080/numbers/8.png");
	number9 = loadImage("sprites/1920x1080/numbers/9.png");
	text1 = loadImage("sprites/1920x1080/shop/text1.png");
	text2 = loadImage("sprites/1920x1080/shop/text2.png");
	text3 = loadImage("sprites/1920x1080/shop/text3.png");
	text4 = loadImage("sprites/1920x1080/shop/text4.png");
	text5 = loadImage("sprites/1920x1080/shop/text5.png");
	text6 = loadImage("sprites/1920x1080/shop/text6.png");
	text7 = loadImage("sprites/1920x1080/shop/text7.png");
	bg = loadImage("sprites/1920x1080/depth1/floor.png");
}

function setup() {
	canvas = createCanvas(tilesize*20,tilesize*11);
	canvasadapt();
	vignette = createSprite(tilesize, tilesize);
	vignette.addImage(bosss_sword, tilesize, tilesize);
	walls = new Group();
	doors = new Group();
	enemies1 = new Group();
	enemies2 = new Group();
	enemy_shots = new Group();
	enemies3 = new Group();
	bossdoors = new Group();
	char = createSprite(tilesize*20/2-tilesize/2, tilesize*11/2-tilesize/2, tilesize, tilesize);
	char.addAnimation("idle", char_idle);
	char.addAnimation("up", char_up);
	char.addAnimation("down", char_down);
	char.addAnimation("left", char_left);
	char.addAnimation("right", char_right);
	char.addImage("dashup", char_dashup);
	char.addImage("dashdown", char_dashdown);
	char.addImage("dashleft", char_dashleft);
	char.addImage("dashright", char_dashright);
	char.position.x=tilesize*20/2;
	char.position.y=tilesize*11/2;
	mapgeneration();
	gameover = createImg("sprites/1920x1080/game_over.png");
	gameover.size(0, 0);
}

//adaptive resizing
window.addEventListener('resize', canvasadapt, false);
function canvasadapt(){
	canvas.elt.style.width = "100vw";
	canvas.elt.style.height = "100vh";
}

function keyReleased() {
	if (key == 'p' && default1_music.isLoaded() && musicactive == false) {
		musicactive = true;
	} else if (key == 'p' && default1_music.isLoaded() && musicactive == true){
		musicactive = false;
	}
}

function draw() {
//music play
if(musicactive == true){
	if (depth == 1){
		if (level[a][b] == 1 && musicplay == false ||
			level[a][b] >= 2 && level[a][b] < 3 && musicplay == false ||
			level[a][b] == 5 && enemynumber == 0 && musicplay == false ||
			level[a][b] == 6 && enemynumber == 0 && musicplay == false){
					default1_music.play();
					default1_music.loop();
					musicplay = true;
				}
		if (level[a][b] == 3 && bossfight == true && musicplay == false){
					boss1_music.play();
					boss1_music.loop();
					musicplay = true;
				}
		if (level[a][b] == 3 && levelcomplete == true && boss1_music.isPlaying()){
					boss1_music.stop();
					win1_music.play();
					win1_music.loop();
		}
		if (level[a][b] == 4 && musicplay == false ||
			level[a][b] == 9 && musicplay == false){
					treasure1_music.play();
					treasure1_music.loop();
					musicplay = true;

				}
		if (level[a][b] == 5 && enemynumber > 0 && musicplay == false){
					challenge1_music.play();
					challenge1_music.loop();
					musicplay = true;

				}
		if (level[a][b] == 7 && musicplay == false){
					shop1_music.play();
					shop1_music.loop();
					musicplay = true;
				}
	//music remove
		if (default1_music.isPlaying() && level[a][b] >= 3 && level[a][b] < 5 ||
			default1_music.isPlaying() && level[a][b] == 5 && enemynumber > 0 ||
			default1_music.isPlaying() && level[a][b] == 7 ||
			default1_music.isPlaying() && level[a][b] >= 9 && level[a][b] <= 10 ||
			default1_music.isPlaying() && level[a][b] == 12){
			default1_music.stop();
			musicplay = false;
		}
		if (win1_music.isPlaying() && level[a][b] == 1){
			win1_music.stop();
			musicplay = false;
		}
		if (treasure1_music.isPlaying() && level[a][b] != 4 && level[a][b] != 9){
			treasure1_music.stop();
			musicplay = false;
		}
		if (challenge1_music.isPlaying() && enemynumber == 0){
			challenge1_music.stop();
			musicplay = false;
		}
		if (shop1_music.isPlaying() && level[a][b] != 7){
			shop1_music.stop();
			musicplay = false;
		}
	} 
	if (musicactive == false){
		if (default1_music.isPlaying()){
			default1_music.stop();
			musicplay = false;
		}
		if (challenge1_music.isPlaying()){
			challenge1_music.stop();
			musicplay = false;
		}
		if (shop1_music.isPlaying()){
			shop1_music.stop();
			musicplay = false;
		}
		if (treasure1_music.isPlaying()){
			treasure1_music.stop();
			musicplay = false;
		}
		if (boss1_music.isPlaying()){
			boss1_music.stop();
			musicplay = false;
		}
		if (win1_music.isPlaying()){
			win1_music.stop();
			musicplay = false;
		}
	}
	if (depth == 2){
		if (level[a][b] == 1 && musicplay == false ||
			level[a][b] >= 2 && level[a][b] < 3 && musicplay == false ||
			level[a][b] == 5 && enemynumber == 0 && musicplay == false ||
			level[a][b] == 6 && enemynumber == 0 && musicplay == false){
					default2_music.play();
					default2_music.loop();
					musicplay = true;
				}
		if (level[a][b] == 3 && bossfight == true && musicplay == false){
					boss2_music.play();
					boss2_music.loop();
					musicplay = true;
				}
		if (level[a][b] == 3 && levelcomplete == true && boss2_music.isPlaying()){
					boss2_music.stop();
					win2_music.play();
					win2_music.loop();
		}
		if (level[a][b] == 4 && musicplay == false ||
			level[a][b] == 9 && musicplay == false){
					treasure2_music.play();
					treasure2_music.loop();
					musicplay = true;

				}
		if (level[a][b] == 5 && enemynumber > 0 && musicplay == false){
					challenge2_music.play();
					challenge2_music.loop();
					musicplay = true;

				}
		if (level[a][b] == 7 && musicplay == false){
					shop2_music.play();
					shop2_music.loop();
					musicplay = true;
				}
	//music remove
		if (default2_music.isPlaying() && level[a][b] >= 3 && level[a][b] < 5 ||
			default2_music.isPlaying() && level[a][b] == 5 && enemynumber > 0 ||
			default2_music.isPlaying() && level[a][b] == 7 ||
			default2_music.isPlaying() && level[a][b] >= 9 && level[a][b] <= 10 ||
			default2_music.isPlaying() && level[a][b] == 12){
			default2_music.stop();
			musicplay = false;
		}
		if (win2_music.isPlaying() && level[a][b] == 1){
			win2_music.stop();
			musicplay = false;
		}
		if (treasure2_music.isPlaying() && level[a][b] != 4 && level[a][b] != 9){
			treasure2_music.stop();
			musicplay = false;
		}
		if (challenge2_music.isPlaying() && enemynumber == 0){
			challenge2_music.stop();
			musicplay = false;
		}
		if (shop2_music.isPlaying() && level[a][b] != 7){
			shop2_music.stop();
			musicplay = false;
		}
	} 
	if (musicactive == false){
		if (default2_music.isPlaying()){
			default2_music.stop();
			musicplay = false;
		}
		if (challenge2_music.isPlaying()){
			challenge2_music.stop();
			musicplay = false;
		}
		if (shop2_music.isPlaying()){
			shop2_music.stop();
			musicplay = false;
		}
		if (treasure2_music.isPlaying()){
			treasure2_music.stop();
			musicplay = false;
		}
		if (boss2_music.isPlaying()){
			boss2_music.stop();
			musicplay = false;
		}
		if (win2_music.isPlaying()){
			win2_music.stop();
			musicplay = false;
		}
	}
		if (depth == 3){
		if (level[a][b] == 1 && musicplay == false ||
			level[a][b] >= 2 && level[a][b] < 3 && musicplay == false ||
			level[a][b] == 5 && enemynumber == 0 && musicplay == false ||
			level[a][b] == 6 && enemynumber == 0 && musicplay == false){
					default3_music.play();
					default3_music.loop();
					musicplay = true;
				}
		if (level[a][b] == 3 && bossfight == true && musicplay == false){
					boss3_music.play();
					boss3_music.loop();
					musicplay = true;
				}
		if (level[a][b] == 3 && levelcomplete == true && boss3_music.isPlaying()){
					boss3_music.stop();
					win3_music.play();
					win3_music.loop();
		}
		if (level[a][b] == 4 && musicplay == false ||
			level[a][b] == 9 && musicplay == false){
					treasure3_music.play();
					treasure3_music.loop();
					musicplay = true;

				}
		if (level[a][b] == 5 && enemynumber > 0 && musicplay == false){
					challenge3_music.play();
					challenge3_music.loop();
					musicplay = true;

				}
		if (level[a][b] == 7 && musicplay == false){
					shop3_music.play();
					shop3_music.loop();
					musicplay = true;
				}
	//music remove
		if (default3_music.isPlaying() && level[a][b] >= 3 && level[a][b] < 5 ||
			default3_music.isPlaying() && level[a][b] == 5 && enemynumber > 0 ||
			default3_music.isPlaying() && level[a][b] == 7 ||
			default3_music.isPlaying() && level[a][b] >= 9 && level[a][b] <= 10 ||
			default3_music.isPlaying() && level[a][b] == 12){
			default3_music.stop();
			musicplay = false;
		}
		if (win3_music.isPlaying() && level[a][b] == 1){
			win3_music.stop();
			musicplay = false;
		}
		if (treasure3_music.isPlaying() && level[a][b] != 4 && level[a][b] != 9){
			treasure3_music.stop();
			musicplay = false;
		}
		if (challenge3_music.isPlaying() && enemynumber == 0){
			challenge3_music.stop();
			musicplay = false;
		}
		if (shop3_music.isPlaying() && level[a][b] != 7){
			shop3_music.stop();
			musicplay = false;
		}
	} 
	if (musicactive == false){
		if (default3_music.isPlaying()){
			default3_music.stop();
			musicplay = false;
		}
		if (challenge3_music.isPlaying()){
			challenge3_music.stop();
			musicplay = false;
		}
		if (shop3_music.isPlaying()){
			shop3_music.stop();
			musicplay = false;
		}
		if (treasure3_music.isPlaying()){
			treasure3_music.stop();
			musicplay = false;
		}
		if (boss3_music.isPlaying()){
			boss3_music.stop();
			musicplay = false;
		}
		if (win3_music.isPlaying()){
			win3_music.stop();
			musicplay = false;
		}
	}
}

if (gameon == true){
	
//timer
millisecond = millis();

//vignette display
vignette.position.x = char.position.x;
vignette.position.y = char.position.y;

//dungeon generation
	background(bg);
		if (init == true) {
			enemymove = false;
			setTimeout(function(){enemymove = true;}, 300);
			enemynumber = 0;
			drop = 0;
			vignette.remove();
		for(var j = 0; j < room.length; j++){
		for(var i = 0; i < room[ j ].length; i++){
				if (room[j][i]==1) {
					wall = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
					wall.addImage(wallsprite, tilesize, tilesize);
					walls.push(wall);
					}
				if (room[j][i]==2) {
					door = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
					door.addImage(doorsprite, tilesize, tilesize);
				    doors.push(door);
					}
				if (room[j][i]==3) {
					if (depth == 1){
						enemy1 = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
						enemy1.addAnimation('default', enemy1sprite);
						enemy1.animation.frameDelay=6;
						enemynumber += 1;
					    enemies1.push(enemy1);
					    }
					if (depth == 2){
						monstertype = Math.random();
						if (monstertype <= 0.5){
							enemy1 = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
							enemy1.addAnimation('default', enemy1sprite);
							enemy1.animation.frameDelay=6;
							enemynumber += 1;
						    enemies1.push(enemy1);
							}
						if (monstertype > 0.5){
							enemy2 = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
							enemy2.addAnimation('default', enemy2sprite);
							enemy2.animation.frameDelay=6;
							enemynumber += 1;
						    enemies2.push(enemy2);
						}
					}
					if (depth == 3){
						monstertype = Math.random();
						if (monstertype <= 1/3){
							enemy1 = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
							enemy1.addAnimation('default', enemy1sprite);
							enemy1.animation.frameDelay=6;
							enemynumber += 1;
						    enemies1.push(enemy1);
							}
						if (monstertype > 1/3 && monstertype <= 2/3){
							enemy2 = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
							enemy2.addAnimation('default', enemy2sprite);
							enemy2.animation.frameDelay=6;
							enemynumber += 1;
						    enemies2.push(enemy2);
						}
						if (monstertype > 2/3){
							enemy3 = createSprite(tilesize*i + tilesize/2, tilesize*j + tilesize/2, tilesize, tilesize);
							enemy3.addAnimation('default', enemy3sprite);
							enemy3.animation.frameDelay=6;
							enemynumber += 1;
						    enemies3.push(enemy3);
						}
					}
				}
			}

	//wall door map check
					if(a == 0 || level[a-1][b] == 0){
						wall = createSprite(tilesize*9 + tilesize/2, tilesize/2, tilesize, tilesize);
						wall.addImage(wallsprite, tilesize, tilesize);						
						walls.push(wall);
						wall = createSprite(tilesize*10 + tilesize/2, tilesize/2, tilesize, tilesize);
						wall.addImage(wallsprite, tilesize, tilesize);
						walls.push(wall);
					}
					if(a == level.length-1 || level[a+1][b] == 0 || level[a+1][b] == 3){
						wall = createSprite(tilesize*9 + tilesize/2, tilesize*10.5, tilesize, tilesize);
						wall.addImage(wallsprite, tilesize, tilesize);
						walls.push(wall);
						wall = createSprite(tilesize*10 + tilesize/2, tilesize*10.5, tilesize, tilesize);
						wall.addImage(wallsprite, tilesize, tilesize);
						walls.push(wall);
					}
					if(b == 0 || level[a][b-1] == 0 || level[a][b-1] == 3){
						wall = createSprite(tilesize/2, tilesize*5 + tilesize/2, tilesize, tilesize);
						wall.addImage(wallsprite, tilesize, tilesize);
						walls.push(wall);
					}
					if(b == level[b].length-1 || level[a][b+1] == 0 || level[a][b+1] == 3){
						wall = createSprite(tilesize*19.5, tilesize*5 + tilesize/2, tilesize, tilesize);
						wall.addImage(wallsprite, tilesize, tilesize);
						walls.push(wall);
					}
//boss door
				if(a > 0 && level[a-1][b] == 3 && keyboss == false){
					bossdoor = createSprite(tilesize*9 + tilesize/2, tilesize/2, tilesize, tilesize);
					bossdoor.addImage(bossdoorsprite, tilesize, tilesize);						
					bossdoors.push(bossdoor);
					bossdoor = createSprite(tilesize*10 + tilesize/2, tilesize/2, tilesize, tilesize);
					bossdoor.addImage(bossdoorsprite, tilesize, tilesize);
					bossdoors.push(bossdoor);
				}

			} init = false;
//pressure plate
			if (level[a][b] == 10 || level[a][b] == 5 && challenge == false){
			pressure = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
			pressure.addImage(pressure_off);
			plate = true;
	}

//health bar
			healthbar.forEach(heart => heart.remove());
			healthbar = [];
			for(var z = 0; z < health; z++){
				heart = createSprite(tilesize*(z+0.5), tilesize*0.5, tilesize, tilesize);
				heart.addImage("full", heart_hud);
				heart.addImage("empty", empty_hud);
				healthbar.push(heart);
			}
			for(var z = 0; z < maxhealth-health; z++){
				heart = createSprite(tilesize*(health+z+0.5), tilesize*0.5, tilesize, tilesize);
				heart.addImage("empty", empty_hud);
				heart.addImage("full", heart_hud);
				healthbar.push(heart);
			}
	}

//reward drops
	if (reward == true && enemynumber == 0 && (level[a][b] != 10 && level[a][b] != 9 && level[a][b] != 5 && level[a][b] != 4)){
		if (Math.random() > 0.2){
			coin_item = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
			coin_item.addImage(coin_sprite, tilesize, tilesize);
			drop = 1;
		} else {
			heart_item = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
			heart_item.addImage(heart_sprite, tilesize, tilesize);
			drop = 2;
		}
		reward = false;
	}
	if (reward == true && enemynumber == 0 && ((level[a][b] == 10 || level[a][b] == 5) && challenge == true) ||
		reward == true && enemynumber == 0 && (level[a][b] == 9 || level[a][b] == 4)){
		randomdrop = Math.random();
		if (randomdrop < 0.25){
			bonus_heart = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
			bonus_heart.addAnimation("default", bonus_heartsprite);
			drop = 3;
		}
		if (randomdrop >= 0.25 && randomdrop < 0.5){
			bonus_boots = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
			bonus_boots.addImage(bonus_bootssprite, tilesize, tilesize);
			drop = 4;
		}
		if (randomdrop >= 0.5 && randomdrop < 0.75){
			bonus_money = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
			bonus_money.addImage(bonus_moneysprite, tilesize, tilesize);
			drop = 5;
		}
		if (randomdrop >= 0.75 && randomdrop < 1){
			bonus_shop = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
			bonus_shop.addImage(bonus_shopsprite, tilesize, tilesize);
			drop = 6;
		}
		reward = false;
	}

//map transition
	if (char.position.y < 0 && a > 0){
		a -= 1;
		char.position.y = tilesize*10;
			levelposition();
	}
	if (char.position.y > tilesize*11 && a < level.length-1){
		a += 1;
		char.position.y = tilesize;
			levelposition();
	}
	if (char.position.x < 0 && b > 0){
		b -= 1;
		char.position.x = tilesize*19;
			levelposition();
	}
	if (char.position.x > tilesize*20 && b < level[b].length-1){
		b += 1;
		char.position.x = tilesize;
			levelposition();
	}


//doors
	if (enemynumber == 0 && level[a][b] != 6){
		doors.forEach(function(door){
			door.position.x = 0;
			door.position.y = 0;
			door.remove();
		});
		if (keyboss == true || a == 0 || level[a-1][b] != 3){
		bossdoors.forEach(function(bossdoor){
			bossdoor.position.x = 0;
			bossdoor.position.y = 0;
			bossdoor.remove();
			});
		}
	}
	if (enemynumber == 0 && level[a][b] == 6 && keyboss == true){
		doors.forEach(function(door){
			door.position.x = 0;
			door.position.y = 0;
			door.remove();
		});
	}

//movement
	if (keyDown('z')) {
		char.setSpeed(charspeed, 270);
		slowing = charspeed;
		if (dash == true){
			char.changeImage("dashup", char_dashup);
		} else {
			char.changeAnimation("up", char_up);
			char.animation.frameDelay=7;
		}
	}
	if (keyDown('q')) {
		char.setSpeed(charspeed, 180);
		slowing = charspeed;
		if (dash == true){
			char.changeImage("dashleft", char_dashleft);
		} else {
			char.changeAnimation("left", char_left);
			char.animation.frameDelay=7;
		}
	}
	if (keyDown('s')) {
		char.setSpeed(charspeed, 90);
		slowing = charspeed;
		if (dash == true){
			char.changeImage("dashdown", char_dashdown);
		} else {
			char.changeAnimation("down", char_down);
			char.animation.frameDelay=7;
		}
	}
	if (keyDown('d')) {
		char.setSpeed(charspeed, 0);
		slowing = charspeed;
		if (dash == true){
			char.changeImage("dashright", char_dashright);
		} else {
			char.changeAnimation("right", char_right);
			char.animation.frameDelay=7;
		}
	}
	if (keyDown('z') == 0 ||
		keyDown('q') == 0 ||
		keyDown('s') == 0 ||
		keyDown('d') == 0) {
			char.setSpeed(slowing);
				if(slowing>0){
					slowing -= 1.5;
				}
	}
	if(slowing <= 0 && charmovement == 0){
		char.changeAnimation("idle", char_idle);
		charmovement = 1;
		char.animation.frameDelay=16;
	}
	if(slowing > 0 && charmovement == 1){
		charmovement = 0;
	}
//diagonale
	if (keyDown('z') && keyDown('q')) {
		char.setSpeed(charspeed, -135);
		slowing = charspeed;
	}
	if (keyDown('z') && keyDown('d')) {
		char.setSpeed(charspeed, -45);
		slowing = charspeed;
	}
	if (keyDown('s') && keyDown('q')) {
		char.setSpeed(charspeed, -225);
		slowing = charspeed;
	}
	if (keyDown('s') && keyDown('d')) {
		char.setSpeed(charspeed, -315);
		slowing = charspeed;
	}
//dash
	if (keyDown(' ') && dash == false){
		charspeed = chardefaultspeed*2;
		dash = true;
		invincibility = true;
		setTimeout(function(){charspeed = chardefaultspeed/8;
			invincibility = false}, 200);
		setTimeout(function(){charspeed = chardefaultspeed;
			dash = false;}, 275);
	}

//attack
	if (mouseIsPressed && attack == 1) {
		weapon = createSprite(char.position.x, char.position.y);
		weapon.rotateToDirection = true;
		weapon.life = 15;
		weapon.visible=false;
		attack = 0;
		setTimeout(function(){weapon.visible = true;}, 10);
		setTimeout(function(){attack = 1;}, 700);
		weapon.addImage(sword);
	}

//weapon position
	if (attack == 0){
		weapon.position.x = char.position.x + 1.5*tilesize*((mouseX - char.position.x)
			/ Math.sqrt(Math.pow(mouseX-char.position.x, 2) + Math.pow(mouseY-char.position.y, 2)));
		weapon.position.y = char.position.y + 1.5*tilesize*((mouseY - char.position.y)
			/ Math.sqrt(Math.pow(mouseX-char.position.x, 2) + Math.pow(mouseY-char.position.y, 2)));
		attractionx = char.position.x + 3*tilesize*((mouseX - char.position.x)
			/ Math.sqrt(Math.pow(mouseX-char.position.x, 2) + Math.pow(mouseY-char.position.y, 2)));
		attractiony = char.position.y + 3*tilesize*((mouseY - char.position.y)
			/ Math.sqrt(Math.pow(mouseX-char.position.x, 2) + Math.pow(mouseY-char.position.y, 2)));
		weapon.attractionPoint(0.0001,attractionx, attractiony);
	}

//enemy follow
	if (enemymove == true){
	enemies1.forEach(function(enemy1){
	if(enemynumber > 0 && enemies1.length > 0 && Math.sqrt(Math.pow(Math.abs(enemy1.position.x-char.position.x),2)+
	  (Math.pow(Math.abs(enemy1.position.y-char.position.y),2))) < tilesize) {
				enemy1 => enemy1.limitSpeed (0);
		}
	});
	enemies1.forEach(function(enemy1){
	if(enemynumber > 0 && enemies1.length > 0 && Math.sqrt(Math.pow(Math.abs(enemy1.position.x-char.position.x),2)+
	  (Math.pow(Math.abs(enemy1.position.y-char.position.y),2))) >= tilesize) {
				enemy1.attractionPoint(tilesize/12, char.position.x, char.position.y);
				enemy1.limitSpeed(tilesize/12);
		}
	});
	enemies2.forEach(function(enemy2){
	if(enemynumber > 0 && enemies2.length > 0 && enemy2.position.x != -tilesize && enemy2.position.y != -tilesize &&
		Math.sqrt(Math.pow(Math.abs(enemy2.position.x-char.position.x),2)+
	  (Math.pow(Math.abs(enemy2.position.y-char.position.y),2))) > 5* tilesize) {
			enemy2.limitSpeed (0);
			if (Math.random() >  0.99){
				enemy_shot = createSprite(enemy2.position.x, enemy2.position.y, tilesize/4, tilesize/4);
				enemy_shot.addImage(enemy2shot);
				enemy2.aimx = char.position.x;
				enemy2.aimy = char.position.y;
				enemy_shot.attractionPoint(3, enemy2.aimx,  enemy2.aimy);
				enemy_shot.limitSpeed(3);
				enemy_shot.rotateToDirection = true;
				enemy_shot.life = 1500;
				enemy_shots.push(enemy_shot);
			}
		}
	if(enemynumber > 0 && enemies2.length > 0 && Math.sqrt(Math.pow(Math.abs(enemy2.position.x-char.position.x),2)+
	  (Math.pow(Math.abs(enemy2.position.y-char.position.y),2))) <= 5*tilesize) {
				enemy2.attractionPoint(tilesize/12, char.position.x, char.position.y);
				enemy2.limitSpeed(tilesize/12);
		}
	});
	enemies3.forEach(function(enemy3){
	if(enemynumber > 0 && enemies3.length > 0 && enemy3.position.x != -tilesize && enemy3.position.y != -tilesize &&
		Math.sqrt(Math.pow(Math.abs(enemy3.position.x-char.position.x),2)+
	  (Math.pow(Math.abs(enemy3.position.y-char.position.y),2))) > 5*tilesize) {
			if (Math.random() >  0.95){
				enemy_shot = createSprite(enemy3.position.x, enemy3.position.y, tilesize/2, tilesize/2);
				enemy_shot.addImage(enemy3shot);
				enemy3.aimx = char.position.x;
				enemy3.aimy = char.position.y;
				enemy_shot.attractionPoint(6, enemy3.aimx,  enemy3.aimy);
				enemy_shot.limitSpeed(6);
				enemy_shot.rotateToDirection = true;
				enemy_shot.life = 750;
				enemy_shots.push(enemy_shot);
			}
		}
	if(enemynumber > 0 && enemies3.length > 0 && Math.sqrt(Math.pow(Math.abs(enemy3.position.x-char.position.x),2)+
	  (Math.pow(Math.abs(enemy3.position.y-char.position.y),2))) >= tilesize) {
				enemy3.attractionPoint(tilesize/12, char.position.x+(Math.random()-0.5)*2*tilesize, char.position.y)+(Math.random()-0.5)*2*tilesize;
				enemy3.limitSpeed(tilesize/12);
		}
	if(enemynumber > 0 && enemies3.length > 0 && Math.sqrt(Math.pow(Math.abs(enemy3.position.x-char.position.x),2)+
	  (Math.pow(Math.abs(enemy3.position.y-char.position.y),2))) < tilesize) {
				enemy3.limitSpeed(0);
		}
	});
	}

//collisions
	char.collide(walls);
	char.collide(doors);
	char.collide(bossdoors);
	enemies1.collide(walls);
	enemies1.collide(enemies1);
	enemies1.collide(enemies2);
	enemies1.collide(doors);
	enemies1.collide(bossdoors);
	enemies2.collide(walls);
	enemies2.collide(enemies1);
	enemies2.collide(enemies2);
	enemies2.collide(doors);
	enemies2.collide(bossdoors);


//enemy kill
	if (attack == 0){
		weapon.collide(enemies1, kill);
		weapon.collide(enemies2, kill);
		weapon.collide(enemies3, kill);
	}


//challenge
	if (level[a][b] == 5 && init == false && char.overlap(pressure)){
				challenge = true;
				pressure.position.x = -tilesize;
				pressure.remove();
				doors.forEach(door => door.remove());
				walls.forEach(wall => wall.remove());
				if (depth == 1){
					room = room1_challengeon;
				}
				if (depth == 2){
					if (Math.random >= 0.5){
						room = room1_challengeon;
					} else {
						room = room2_challengeon;
					}
				}
				if (depth == 3){
					room = room3_challengeon;
				}
				init = true;
			}

//shop
	if (level[a][b] == 12 || level[a][b] == 7){
		if (init == true){
		itemdisplay(randomshop1);
		itemdisplay(randomshop2);
		shopdisplay = createSprite(tilesize*10, tilesize*4.5, tilesize, tilesize);
		shopdisplay.addAnimation("default", shopsprite);
		shopdisplay.animation.frameDelay = 60;
		shopitems.push(shopdisplay);
		}
		char.collide(shopdisplay);
		if (shopitems.length >= 5 && char.overlap(shopitems[0]) && money >= itemprice && itemprice == 10||
			shopitems.length >= 4 && char.overlap(shopitems[0]) && money >= itemprice && itemprice < 10){
			if (randomshop1 < 1){
				randomshop1 += 1;
				buy(randomshop1, 1);
			} else if (randomshop2 < 1){
				randomshop2 += 1;
				buy(randomshop2, 1);
			}
		}
		if (shopitems.length == 9 && char.overlap(shopitems[4]) && money >= itemprice && itemprice == 10 ||
			shopitems.length == 8 && char.overlap(shopitems[3]) && money >= itemprice && itemprice < 10){
			randomshop2 += 1;
			buy(randomshop2, 2);
		}
	}

//boss room
	if (depth == 1){
		if (level[a][b] == 3 && init == false && bossfight == false && levelcomplete == false){
			boss = createSprite(tilesize*10, tilesize*3, tilesize, tilesize);
			boss.addAnimation("idle", boss1_idle);
			boss.addAnimation("jump", boss1_jump);
			boss.animation.frameDelay=6;
			bossfight = true;
			setTimeout(boss1_attack, 750);
			boss_timer = 0;
			boss_health = 10;
			for(var n = 0; n < boss_health; n++){
				boss_life = createSprite(tilesize*(10-boss_health/2)+tilesize*(n+0.5), tilesize*10.5, tilesize, tilesize);
				boss_life.addImage("heart", boss_heart);
				boss_life.addImage("empty", boss_empty);
				boss_healthbar.push(boss_life);
			}
		}
		if(bossfight == true){
			boss.collide(walls);
			boss.collide(doors);
			char.overlap(boss);
			boss_timer += 2*Math.PI/100;
			boss_speed = Math.cos(boss_timer)*tilesize/4;
			if(boss_attack == true){
				boss.attractionPoint(boss_speed, char.position.x, char.position.y);
				boss.limitSpeed (boss_speed);
			}
			if(boss_attack == false){
				boss.limitSpeed (0);
			}
			if(attack == 0 && weapon.overlap(boss) && bossinv == false){
				bossinv = true;
				boss_healthbar[boss_health-1].changeImage("empty");
				setTimeout(function(){
					bossinv = false;
				}, 500);
				boss_health -= 1;
			}
			if (boss_health == 0){
				boss_healthbar.forEach(boss_life => boss_life.remove());
				boss_healthbar = [];
				boss.position.x = -2*tilesize;
				bossfight = false;
				boss.remove();
				levelcomplete = true;
				trapdoor = createSprite(tilesize*10, tilesize*3, tilesize, tilesize);
				trapdoor.addImage(trapdoorsprite, tilesize, tilesize);
			}
		}
	}

	if (depth == 2){
		if (level[a][b] == 3 && init == false && bossfight == false && levelcomplete == false){
			bosses = new Group();
			bossrank = 1;
			for (var m = 0; m < 15; m++){
				boss = createSprite(tilesize*10.5, tilesize*3, tilesize, tilesize);
				boss.addAnimation("idle", boss2_idle);
				bosses.push(boss);
			}
			bossfight = true;
			boss_health = 15;
			for(var n = 0; n < boss_health; n++){
				boss_life = createSprite(tilesize*(10-boss_health/2)+tilesize*(n+0.5), tilesize*10.5, tilesize, tilesize);
				boss_life.addImage("heart", boss_heart);
				boss_life.addImage("empty", boss_empty);
				boss_healthbar.push(boss_life);
			}
		}
		if(bossfight == true){
			bosses[0].attractionPoint(tilesize/(Math.sqrt(boss_health)*6), char.position.x, char.position.y);
			bosses[0].limitSpeed(tilesize/(Math.sqrt(boss_health)*6));
			if (bossrank < 15){
					bosses[bossrank].attractionPoint(tilesize/(Math.sqrt(boss_health)*6), bosses[bossrank-1].position.x, bosses[bossrank-1].position.y);
					bosses[bossrank].limitSpeed(tilesize/(Math.sqrt(boss_health)*6));
					bossrank += 1;
				} else {
					bossrank = 1;
				}
			bosses.collide(walls);
			bosses.collide(doors);
			char.overlap(bosses);
			if(attack == 0 && weapon.overlap(bosses) && bossinv == false){
				bossinv = true;
				boss_healthbar[boss_health-1].changeImage("empty");
				setTimeout(function(){
					bossinv = false;
				}, 500);
				boss_health -= 1;
			}
			if (boss_health == 0){
				boss_healthbar.forEach(boss_life => boss_life.remove());
				boss_healthbar = [];
				bosses.forEach(boss => boss.position.x = -tilesize);
				bosses.forEach(boss =>boss.remove());
				bossfight = false;
				levelcomplete = true;
				trapdoor = createSprite(tilesize*10, tilesize*3, tilesize, tilesize);
				trapdoor.addImage(trapdoorsprite, tilesize, tilesize);
			}
		}
	}

	if (depth == 3){
		if (level[a][b] == 3 && init == false && bossfight == false && levelcomplete == false){
			bossfight = true;
			shop = createSprite(tilesize*10, tilesize*2, tilesize, tilesize);
			shop.addAnimation("default", shopsprite);
			shop.animation.frameDelay = 60;
			victorytext = createSprite(tilesize*10, tilesize, tilesize, tilesize);
			victorytext.addImage("1", text1);
			victorytext.addImage("2", text2);
			victorytext.addImage("3", text3);
			victorytext.addImage("4", text4);
			victorytext.addImage("5", text5);
			victorytext.addImage("6", text6);
			victorytext.addImage("7", text7);
			setTimeout(function(){
				victorytext.changeImage("2", text2);
			}, 5000);
			setTimeout(function(){
				victorytext.changeImage("3", text3);
			}, 10000);
			setTimeout(function(){
				victorytext.changeImage("4", text4);
			}, 15000);
			setTimeout(function(){
				victorytext.changeImage("5", text5);
			}, 20000);
			setTimeout(function(){
				victorytext.changeImage("6", text6);
				levelcomplete = true;
			}, 25000);
			setTimeout(function(){
				victorytext.changeImage("7", text7);
			}, 30000);
			score = millisecond;
			confettis = [];
			for (var c = 0; c < 300; c++){
				confetti = createSprite(tilesize*20*Math.random(), -tilesize*11*3*Math.random()-tilesize/4, tilesize/4, tilesize/4);
				confettis.push(confetti);
			}
		}
		if (bossfight == true){
			char.collide(shop);
		}
		if (levelcomplete == true){
			textSize(tilesize);
  			textAlign(CENTER, CENTER);
			text('Congratulations !\nYou finished the game in:\n' + Math.floor(score/1000/60) + ' mins ' + (Math.floor(score/1000)-Math.floor(score/1000/60)*60)  + ' secs', tilesize*10,tilesize*5.5);
			confettis.forEach(function(confetti){
				confetti.position.y += tilesize/12;
				confetti.position.x += (Math.random()-0.5)*5;
				if (confetti.position.y > tilesize*11){
					confetti.remove();
				}
			})
		}
	}

	if (depth == 0){
		if (level[a][b] == 3 && init == false && bossfight == false && levelcomplete == false){
			boss = createSprite(tilesize*10, tilesize*1.5, tilesize, tilesize);
			boss.addImage("idle", bosss_idle);
			bossfight = true;
			boss_swords = new Group();
			boss_health = 3;
			bossinv = true;
			bossintro = 0;
			ready = 0;
			for (var n = 0; n<2; n++){
				boss_sword = createSprite(boss.position.x, boss.position.y-tilesize);
				boss_sword.addImage("default", bosss_sword);
				boss_sword.addImage("small", bosss_ssword);
				boss_sword.changeImage("small", bosss_ssword);
				boss_swords.push(boss_sword);
			}
			setTimeout(function(){
				boss_swords.forEach(boss_sword => boss_sword.remove());
				boss_swords = new Group();
				bossintro = 3;
				ready = 3;
			}, 20000);
			setTimeout(function(){
				boss_swords.forEach(boss_sword => boss_sword.remove());
				boss_swords = new Group();
				bossintro = 5;
				bossinv = false;
			}, 37500);
			for(var n = 0; n < boss_health; n++){
				boss_life = createSprite(tilesize*(10-boss_health/2)+tilesize*(n+0.5), tilesize*10.5, tilesize, tilesize);
				boss_life.addImage("heart", boss_heart);
				boss_life.addImage("empty", boss_empty);
				boss_healthbar.push(boss_life);
			}
		}
		if(bossfight == true){
			if(bossintro == 0){
				setTimeout(function(){
					boss_swords.forEach(function(boss_sword){
						if(boss_sword.position.y < tilesize*2.5){
							boss_sword.position.y += tilesize/75;
						}
						if(boss_sword.rotation < 90){
							boss_sword.rotation += 0.61;
						}
						if(boss_sword.position.y >= tilesize*2.5 && boss_sword.rotation >= 90){
						 bossintro = 1;
						}
					});
				}, 1000);
			}
			if (bossintro == 1){
				setTimeout(function(){
					if(boss_swords[0].position.x > tilesize*1.5){
						boss_swords[0].position.x -= tilesize/20;
					}
					if(boss_swords[1].position.x < tilesize*18.5){
						boss_swords[1].position.x += tilesize/20;
					} else {
						setTimeout(function(){
							boss_swords[0].position.y += tilesize/5;
							boss_swords[1].position.y += tilesize/5;
							boss_swords[0].changeImage("default", bosss_sword);
							boss_swords[1].changeImage("default", bosss_sword);
							boss_swords[0].setDefaultCollider();
							boss_swords[1].setDefaultCollider();
						}, 250);	
					bossintro = 2;
					}
				}, 250);
			}
			if (bossintro == 2){
				boss_attack = true;
				bosss_attack1(boss_swords[0]);
				bosss_attack1(boss_swords[1]);
			}
			if (bossintro == 3){
				boss_attack = true;
				bosss_attack2();
			}
			boss.collide(walls);
			boss.collide(doors);
			char.overlap(boss);
			if(attack == 0 && weapon.overlap(boss) && bossinv == false){
				bossinv = true;
				boss_healthbar[boss_health-1].changeImage("empty");
				boss_health -= 1;
			}
			if (boss_health == 0){
				boss_healthbar.forEach(boss_life => boss_life.remove());
				boss_healthbar = [];
				boss.position.x = -2*tilesize;
				bossfight = false;
				boss.remove();
				levelcomplete = true;
			}
		}
	}

//next level
	if (levelcomplete == true && depth > 0 && depth < 3 && char.overlap(trapdoor)){		
		depth += 1;
		if (depth == 2){
			wallsprite = loadImage("sprites/1920x1080/depth2/wall.png");
			doorsprite = loadImage("sprites/1920x1080/depth2/door.png");
			bossdoorsprite = loadImage("sprites/1920x1080/depth2/bossdoor.png");
			pressure_on = loadImage("sprites/1920x1080/depth2/pressure_on.png");
			trapdoorsprite = loadImage("sprites/1920x1080/depth2/trapdoor.png");
			bg = loadImage("sprites/1920x1080/depth2/floor.png");
			win1_music.stop();
			default2_music.play();
			default2_music.loop();
		}
		if (depth == 3){
			wallsprite = loadImage("sprites/1920x1080/depth3/wall.png");
			doorsprite = loadImage("sprites/1920x1080/depth3/door.png");
			bossdoorsprite = loadImage("sprites/1920x1080/depth3/bossdoor.png");
			pressure_on = loadImage("sprites/1920x1080/depth3/pressure_on.png");
			trapdoorsprite = loadImage("sprites/1920x1080/depth3/trapdoor.png");
			bg = loadImage("sprites/1920x1080/depth3/floor.png");
			win2_music.stop();
			default3_music.play();
			default3_music.loop();
		}
		trapdoor.position.x = -tilesize;
		trapdoor.remove();
		char.position.x = tilesize*10;
		char.position.y = tilesize*5.5;
		level[a = 2][b = 2] = 1;
		level = [[8,8,8,8,8],
				 [8,8,3,8,8],
				 [8,8,1,8,8],
				 [8,8,8,8,8],
				 [8,8,8,8,8]];
		mapgeneration();
		keyboss = false;
		plate = false;
		challenge = false;
		levelcomplete = false;
		randomshop1 = Math.random();
		randomshop2 = Math.random();
		levelposition();
	}

//key pickup
	if (enemynumber == 0 && level[a][b] == 6 && keyboss == false && char.collide(keyitem)){
		keyitem.remove();
		keyboss = true;
	}

//item pickup
	if (enemynumber == 0 && drop == 1 && char.collide(coin_item)){
		if (money < 99){
			money += 1;
		}
		coin_item.position.x = -tilesize;
		coin_item.remove();
		drop = 0;
	}
	if (enemynumber == 0 && drop == 2 && char.collide(heart_item)){
		if (health < maxhealth){
			healthbar[health].changeImage("full", heart_hud);
			health += 1;
		}
		heart_item.position.x = -tilesize;
		heart_item.remove();
		drop = 0;
	}
	if(enemynumber == 0 && drop == 3 && char.collide(bonus_heart)){
		bonus_heart.position.x = -tilesize;
		bonus_heart.remove();
		addheart();
	}
	if(enemynumber == 0 && drop == 4 && char.collide(bonus_boots)){
		bonus_boots.position.x = -tilesize;
		bonus_boots.remove();
		addboots();
	}
	if(enemynumber == 0 && drop == 5 && char.collide(bonus_money)){
		bonus_money.position.x = -tilesize;
		bonus_money.remove();
		addmoney();
	}
	if(enemynumber == 0 && drop == 6 && char.collide(bonus_shop)){
		bonus_shop.position.x = -tilesize;
		bonus_shop.remove();
		addshop();
	}

//char hit
	if(invincibility == false && char.overlap(enemies1) ||
	   invincibility == false && char.overlap(enemies2) ||	   
	   invincibility == false && char.overlap(enemy_shots) ||
	   invincibility == false && char.overlap(enemies3) ||
	   invincibility == false && bossfight == true && depth == 1 && char.overlap(boss) ||
	   invincibility == false && bossfight == true && depth == 2 && bosses.length > 0 && char.overlap(bosses) ||
	   invincibility == false && bossfight == true && depth == 0 && boss_swords.length > 0 && char.overlap(boss_swords)){
			invincibility = true;
			setTimeout(function() {
				invincibility = false
			}, 1000);
			health -= 1;
			healthbar[health].changeImage("empty", empty_hud);
			if(health == 0){
					gameon = false;
			}
		}

//map
	if (keyDown(77)) {
			for(var c = 0; c < level.length; c++){
			for(var d = 0; d < level.length; d++){
			if (level[d][c]==1) {
			    spawn_map = createImg("sprites/1920x1080/spawn_map.png");
			    spawn_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    spawn_map.size(windowWidth/20,windowHeight/11);
			    mapa.push(spawn_map);
				}
			if (level[d][c] >= 2 && level[d][c] < 3) {
			    battle_map = createImg("sprites/1920x1080/battle_map.png");
			    battle_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    battle_map.size(windowWidth/20,windowHeight/11);
			    mapb.push(battle_map);
				}
			if (level[d][c]==3) {
			    boss_map = createImg("sprites/1920x1080/boss_map.png");
			    boss_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    boss_map.size(windowWidth/20,windowHeight/11);
			    mapc.push(boss_map);
				}
			if (level[d][c]==4) {
			    treasure_map = createImg("sprites/1920x1080/treasure_map.png");
			    treasure_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    treasure_map.size(windowWidth/20,windowHeight/11);
			    mapd.push(treasure_map);
				}
			if (level[d][c]==5) {
			    challenge_map = createImg("sprites/1920x1080/challenge_map.png");
			    challenge_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    challenge_map.size(windowWidth/20,windowHeight/11);
			    mape.push(challenge_map);
				}
			if (level[d][c]==6) {
			    key_map = createImg("sprites/1920x1080/key_map.png");
			    key_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    key_map.size(windowWidth/20,windowHeight/11);
			    mapf.push(key_map);
				}
			if (level[d][c]==7) {
			    shop_map = createImg("sprites/1920x1080/shop_map.png");
			    shop_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    shop_map.size(windowWidth/20,windowHeight/11);
			    mapg.push(shop_map);
				}
			if (level[d][c] > 7) {
			    unknown_map = createImg("sprites/1920x1080/unknown_map.png");
			    unknown_map.position(windowWidth/2+c*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+d*(windowHeight/11)-(windowHeight/11)*level.length/2);
			    unknown_map.size(windowWidth/20,windowHeight/11);
			    maph.push(unknown_map);
				}
			}
		}
		player_map = createImg("sprites/1920x1080/player_map.png");
		player_map.position(windowWidth/2+b*(windowWidth/20)-(windowWidth/20)*level.length/2,
			    	windowHeight/2+a*(windowHeight/11)-(windowHeight/11)*level.length/2);
		player_map.size(windowWidth/20,windowHeight/11);
		mapz.push(player_map);
//keyboss display
			keyboss_map = createImg("sprites/1920x1080/key.png");
			keyboss_map.position(windowWidth/2+(level.length/2+1)*(windowWidth/20),
			    	windowHeight/2-1.5*windowHeight/11);
			keyboss_map.size(windowWidth/20,windowHeight/11);
			mapy.push(keyboss_map);		
		if(keyboss == true){
			keyboss_map = createImg("sprites/1920x1080/key_owned.png");
			keyboss_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    	windowHeight/2-1.5*windowHeight/11);
			keyboss_map.size(windowWidth/10,windowHeight/11);
			mapy.push(keyboss_map);
		} else {
			keyboss_map = createImg("sprites/1920x1080/key_missing.png");
			keyboss_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    	windowHeight/2-1.5*windowHeight/11);
			keyboss_map.size(windowWidth/10,windowHeight/11);
			mapy.push(keyboss_map);
		}
//money display
		money_map = createImg("sprites/1920x1080/coin_item.png");
		money_map.position(windowWidth/2+(level.length/2+1)*(windowWidth/20),
			windowHeight/2+1.5*windowHeight/11);
		money_map.size(windowWidth/20,windowHeight/11);
		mapx.push(money_map);
		if (Math.floor(money/10) == 0){
			money_map = createImg("sprites/1920x1080/numbers/0.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 1){
			money_map = createImg("sprites/1920x1080/numbers/1.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 2){
			money_map = createImg("sprites/1920x1080/numbers/2.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 3){
			money_map = createImg("sprites/1920x1080/numbers/3.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 4){
			money_map = createImg("sprites/1920x1080/numbers/4.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 5){
			money_map = createImg("sprites/1920x1080/numbers/5.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 6){
			money_map = createImg("sprites/1920x1080/numbers/6.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 7){
			money_map = createImg("sprites/1920x1080/numbers/7.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 8){
			money_map = createImg("sprites/1920x1080/numbers/8.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (Math.floor(money/10) == 9){
			money_map = createImg("sprites/1920x1080/numbers/9.png");
			money_map.position(windowWidth/2+(level.length/2+2)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 0){
			money_map = createImg("sprites/1920x1080/numbers/0.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 1){
			money_map = createImg("sprites/1920x1080/numbers/1.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 2){
			money_map = createImg("sprites/1920x1080/numbers/2.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 3){
			money_map = createImg("sprites/1920x1080/numbers/3.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 4){
			money_map = createImg("sprites/1920x1080/numbers/4.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 5){
			money_map = createImg("sprites/1920x1080/numbers/5.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 6){
			money_map = createImg("sprites/1920x1080/numbers/6.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 7){
			money_map = createImg("sprites/1920x1080/numbers/7.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 8){
			money_map = createImg("sprites/1920x1080/numbers/8.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
		if (money - Math.floor(money/10)*10 == 9){
			money_map = createImg("sprites/1920x1080/numbers/9.png");
			money_map.position(windowWidth/2+(level.length/2+3)*(windowWidth/20),
			    windowHeight/2+1.5*windowHeight/11);
			money_map.size(windowWidth/20,windowHeight/11);
			mapx.push(money_map);
		}
	}
		else {
			clearmap();
		}

//display
	drawSprites();

	if (depth == 2){
//battle room 1
room1_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
			  	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			  	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [2,0,0,0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

room1_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
//battle room 2
room2_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

room2_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
//battle room 3
room3_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

room3_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

//battle room 4
room4_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

room4_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
//battle room 5
room5_enemyon = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0,0,0,1],
			 	     [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				     [1,0,0,0,0,0,0,0,1,0,3,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
			 	     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				     [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];

room5_enemy = [[1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1],
		  	 	   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
				   [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
				   [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
			 	   [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
				   [1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1]];
}
	}
	if (gameon == false){
		gameover.position(0, 0);
		gameover.size(windowWidth,windowHeight);
	}
}

//map remove
function clearmap (){
	mapa.forEach(spawn_map => spawn_map.remove());
	mapa = [];
	mapb.forEach(battle_map => battle_map.remove());
	mapb = [];
	mapc.forEach(boss_map => boss_map.remove());
	mapc = [];
	mapd.forEach(treasure_map => treasure_map.remove());
	mapd = [];
	mape.forEach(challenge_map => challenge_map.remove());
	mape = [];
	mapf.forEach(key_map => key_map.remove());
	mapf = [];
	mapg.forEach(shop_map => shop_map.remove());
	mapg = [];
	maph.forEach(unknown_map => unknown_map.remove());
	maph = [];
	mapx.forEach(money_map => money_map.remove());
	mapx = [];
	mapy.forEach(keyboss_map => keyboss_map.remove());
	mapy = [];
	mapz.forEach(player_map => player_map.remove());
	mapz = [];
}


//heart item
function addheart() {
	if (maxhealth < 9){
		heart = createSprite(tilesize*(maxhealth+0.5), tilesize*0.5, tilesize, tilesize);
		heart.addImage("empty", empty_hud);
		heart.addImage("full", heart_hud)
		healthbar.push(heart);
		healthbar[health].changeImage("full", heart_hud);
		maxhealth += 1;
		health +=1
	} else {
		healthbar.forEach(heart => heart.remove());
		healthbar = [];
		health = maxhealth;
		for(var z = 0; z < maxhealth; z++){
			heart.changeImage("full", heart_hud);
			healthbar.push(heart);
		}
	}
	shopreset();
}

//boots item
function addboots(){
	chardefaultspeed += tilesize/30;
	charspeed = chardefaultspeed;
	shopreset();
}

//money item
function addmoney(){
	money += Math.floor(Math.random()*7)+8;
	if (money > 99){
		money = 99;
	}
	shopreset();
}

function addshop(){
	itemprice -= Math.floor(Math.random()*3)+1;
	shopreset();
}

function shopreset(){
	if (level[a][b] == 7){
		walls.forEach(wall => wall.remove());
		shopitems.forEach(shopdisplay => shopdisplay.remove());
		shopitems = [];
		init = true;
		itemdisplay(randomshop1);
		itemdisplay(randomshop2);
		shopdisplay = createSprite(tilesize*10, tilesize*4.5, tilesize, tilesize);
		shopdisplay.addAnimation("default", shopsprite);
		shopdisplay.animation.frameDelay = 60;
		shopitems.push(shopdisplay);
	}
}

//map generation
function mapgeneration(){
	treasurex = Math.floor(Math.random()*4);
	treasurey = Math.floor(Math.random()*4);
	while (treasurex == 2 && treasurey == 1 ||
		treasurex == 2 && treasurey == 2){
		treasurex = Math.floor(Math.random()*4);
		treasurey = Math.floor(Math.random()*4);
	}
		level[treasurey][treasurex] = 9;
	challengex = Math.floor(Math.random()*4);
	challengey = Math.floor(Math.random()*4);
	while (challengex == 2 && challengey == 1 ||
		challengex == 2 && challengey == 2 ||
		challengex == treasurex && challengey == treasurey){
		challengex = Math.floor(Math.random()*4);
		challengey = Math.floor(Math.random()*4);
	}
		level[challengey][challengex] = 10;
	keyx = Math.floor(Math.random()*4);
	keyy = Math.floor(Math.random()*4);
	while (keyx == 2 && keyy == 1 ||
		keyx == 2 && keyy == 2 ||
		keyx == treasurex && keyy == treasurey ||
		keyx == challengex && keyy == challengey){
		keyx = Math.floor(Math.random()*4);
		keyy = Math.floor(Math.random()*4);
	}
		level[keyy][keyx] = 11;
	shopx = Math.floor(Math.random()*4);
	shopy = Math.floor(Math.random()*4);
	while (shopx == 2 && shopy == 1 ||
		shopx == 2 && shopy == 2 ||
		shopx == treasurex && shopy == treasurey ||
		shopx == challengex && shopy == challengey ||
		shopx == keyx && shopy == keyy){
		shopx = Math.floor(Math.random()*4);
		shopy = Math.floor(Math.random()*4);
	}
		level[shopy][shopx] = 12;
}

//shop system
function buy(itemchance, itemchoose){
	if (itemchance < 1.25){
		addheart();
	}
	if (itemchance >= 1.25 && itemchance < 1.5){
		addboots();
	}
	if (itemchance >= 1.5 && itemchance < 1.75){
		addmoney();
	}
	if (itemchance >= 1.75){
		addshop();
	}
	money -= itemprice;
	if (init == false && itemchoose == 1 && itemprice == 10){
		shopitems[0].position.x = -tilesize;
		shopitems[0].remove();
		shopitems[1].remove();
		shopitems[2].remove();
		shopitems[3].remove();
	}
	if (init == false && itemchoose == 1 && itemprice < 10){
		shopitems[0].position.x = -tilesize;
		shopitems[0].remove();
		shopitems[1].remove();
		shopitems[2].remove();
	}
	if (init == false && itemchoose == 2 && itemprice == 10){
		shopitems[4].position.x = -tilesize;
		shopitems[4].remove();
		shopitems[5].remove();
		shopitems[6].remove();
		shopitems[7].remove();
	}
	if (init == false && itemchoose == 2 && itemprice < 10){
		shopitems[3].position.x = -tilesize;
		shopitems[3].remove();
		shopitems[4].remove();
		shopitems[5].remove();
	}
}

//map update && dungeon randomization
function levelposition(){
	doors.forEach(door => door.remove());
	bossdoors.forEach(bossdoor => bossdoor.remove());
	enemies1.forEach(enemy1 => enemy1.remove());
	enemies2.forEach(enemy2 => enemy2.remove());
	enemy_shots.forEach(function(enemy_shot){
	enemy_shot.position.x = -tilesize;
	enemy_shot.remove()
	});
	enemies3.forEach(enemy3 => enemy3.remove());
	walls.forEach(wall => wall.remove());
	shopitems.forEach(shopdisplay => shopdisplay.remove());
	shopitems = [];
	reward = false;
	if (drop == 1){
		coin_item.position.x = -tilesize;
		coin_item.remove();
	}
	if (drop == 2){
		heart_item.position.x = -tilesize;
		heart_item.remove();
	}
	if (drop == 3){
		bonus_heart.position.x = -tilesize;
		bonus_heart.remove();
	}
	if (drop == 4){
		bonus_boots.position.x = -tilesize;
		bonus_boots.remove();
	}
	if (drop == 5){
		bonus_money.position.x = -tilesize;
		bonus_money.remove();
	}	
	if (drop == 6){
		bonus_shop.position.x = -tilesize;
		bonus_shop.remove();
	}
	if (plate == true && level[a][b] != 5 && level[a][b] != 10){
		pressure.position.x = -tilesize;
		pressure.remove();
		plate = false;
	}
	if (depth == 1){
		bg = loadImage("sprites/1920x1080/depth1/floor.png");
	}
	if (depth == 2){
		bg = loadImage("sprites/1920x1080/depth2/floor.png");
	}
	if (depth == 3){
		bg = loadImage("sprites/1920x1080/depth3/floor.png");
	}
	if (level[a][b] == 1){
		room = room_spawn;
	}
		if (level[a][b] < 2.2 && level[a][b] >= 2){
			room = room1_enemy;
		}
		if (level[a][b] < 2.4 && level[a][b] >= 2.2){
			room = room2_enemy;
		}
		if (level[a][b] < 2.6 && level[a][b] >= 2.4){
			room = room3_enemy;
		}
		if (level[a][b] < 2.8 && level[a][b] >= 2.6){
			room = room4_enemy;
		}
		if (level[a][b] < 3 && level[a][b] >= 2.8){
			room = room5_enemy;
		}
	if (level[a][b] == 3){
		room = room1_boss;
	}
	if (level[a][b] == 4){
		room = room_spawn;
	}
	if (level[a][b] == 5){
		if (depth == 1){
			bg = loadImage("sprites/1920x1080/depth1/pressure_on.png");
		}
		if (depth == 2){
			bg = loadImage("sprites/1920x1080/depth2/pressure_on.png");
		}
		if (depth == 3){
			bg = loadImage("sprites/1920x1080/depth3/pressure_on.png");
		}
		room = room1_challenge;
	}
	if (level[a][b] == 6){
		room = room1_key;
	}
	if (level[a][b] == 7){
		room = room_shop;
	}
	if (level[a][b] == 8){
		level[a][b] = 2 + Math.random();
		if (Math.random() > 0.5){
			reward = true;
		}
		if (level[a][b] < 2.2 && level[a][b] >= 2){
			room = room1_enemyon;
		}
		if (level[a][b] < 2.4 && level[a][b] >= 2.2){
			room = room2_enemyon;
		}
		if (level[a][b] < 2.6 && level[a][b] >= 2.4){
			room = room3_enemyon;
		}
		if (level[a][b] < 2.8 && level[a][b] >= 2.6){
			room = room4_enemyon;
		}
		if (level[a][b] < 3 && level[a][b] >= 2.8){
			room = room5_enemyon;
		}
	}
	if (level[a][b] == 9){
		reward = true;
		level[a][b] = 4;
		room = room_spawn;
	}
	if (level[a][b] == 10){
		reward = true;
		level[a][b] = 5;
		if (depth == 1){
			bg = loadImage("sprites/1920x1080/depth1/pressure_on.png");
		}
		if (depth == 2){
			bg = loadImage("sprites/1920x1080/depth2/pressure_on.png");
		}
		if (depth == 3){
			bg = loadImage("sprites/1920x1080/depth3/pressure_on.png");
		}
	}
	if (level[a][b] == 11){
		level[a][b] = 6;
		room = room1_keyon;
		if (keyboss == false);
		keyitem = createSprite(tilesize*10, tilesize*5.5, tilesize, tilesize);
		keyitem.addImage(keysprite);
	}
	if(level[a][b] == 12){
		level[a][b] = 7;
		room = room_shop;
		randomshop1 = Math.random();
		randomshop2 = Math.random();
	}
	init = true;
}

//enemy kill
function kill(weapon, enemy) {
	enemy.position.x = -tilesize;
	enemy.position.y = -tilesize;
	enemy.remove();
	enemynumber -= 1;
}

//shop display
function itemdisplay(itemchance){
	positemy = 6.5*tilesize;
	if (shopitems.length == 0){
		positemx = tilesize*8;
	}
	if (shopitems.length == 0 && randomshop1 > 1 ||
		shopitems.length == 0 && randomshop2 > 1){
		positemx = tilesize*10;
	}
	if (shopitems.length >= 3 && shopitems.length < 6){
		positemx = tilesize*12;
	}
	if (itemchance < 1){
		shopdisplay = createSprite(positemx, positemy, tilesize, tilesize);
		if(itemchance < 0.25){
		shopdisplay.addAnimation("default", bonus_heartsprite);
		}
		if(itemchance < 0.5 && itemchance >= 0.25){
		shopdisplay.addImage(bonus_bootssprite, tilesize, tilesize);
		}
		if(itemchance < 0.75 && itemchance >= 0.5){
		shopdisplay.addImage(bonus_moneysprite, tilesize, tilesize);
		}
		if(itemchance >= 0.75){
		shopdisplay.addImage(bonus_shopsprite, tilesize, tilesize);
		}
		shopitems.push(shopdisplay);
		if (itemprice == 10){
			shopdisplay = createSprite(positemx-tilesize, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number1, tilesize, tilesize);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number0, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 9){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number9, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 8){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number8, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 7){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number7, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 6){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number6, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 5){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number9, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 4){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number9, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 3){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number3, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 2){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number2, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 1){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number1, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
		if (itemprice == 0){
			shopdisplay = createSprite(positemx-tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(coin_sprite);
			shopitems.push(shopdisplay);
			shopdisplay = createSprite(positemx+tilesize/2, positemy+tilesize, tilesize, tilesize);
			shopdisplay.addImage(number0, tilesize, tilesize);
			shopitems.push(shopdisplay);
		}
	}
}

//boss 1 attack
function boss1_attack(){
	if (bossfight == true){
		boss_attack = true;
		boss_timer = 0;
		boss.changeAnimation("jump", boss1_jump);
		setTimeout(function(){
			boss_attack = false;
		boss.changeAnimation("idle", boss1_idle);
		}, 500);
		setTimeout(function(){
		}, 1500);
		setTimeout(boss1_attack, 2000);
	}
}

//boss secret attack 1
function bosss_attack1(sword){
	if (boss_attack == true){
		if (ready <= 1 && boss_swords.length == 2 && boss_swords[0].position.x <= tilesize*1.5 && boss_swords[1].position.x >= tilesize*18.5 ||
			ready <= 1 && boss_swords.length == 2 && boss_swords[1].position.x <= tilesize*1.5 && boss_swords[0].position.x >= tilesize*18.5){
			ready += 0.5;
		setTimeout(function(){ready = 0},1500);
		sword.parameter = sword.position.x;
		}
		setTimeout(function(){
				if (boss_swords.length == 2 && sword.parameter < tilesize*1.5 && sword.position.y > tilesize*5){
					sword.position.x += tilesize/7.5;
				}
				if (boss_swords.length == 2 && sword.parameter > tilesize*18.5 && sword.position.y > tilesize*5){
					sword.position.x -= tilesize/7.5;
				}
			},500);
			}
		setTimeout(function(){
			sword.position.y -=	tilesize/10;
			boss_attack = false;
		}, 10000);
}

//boss secret attack 2
function bosss_attack2(){
	if (boss_attack == true){
		setTimeout(function(){
			boss_attack = false;
		}, 10000);
		middle = tilesize*10+(Math.random()-0.5)*tilesize*4;
		if(ready == 3){
			ready = 4;
			for(var n = 0; n < 50; n++){
				middle += tilesize*(Math.random()-0.5)*2;
				boss_sword = createSprite(middle-tilesize*6.5, -tilesize*2*(n+1), tilesize, tilesize);
				boss_sword.addImage("sword", bosss_sword);
				boss_swords.push(boss_sword);
				boss_sword = createSprite(middle+tilesize*6.5, -tilesize*2*(n+1), tilesize, tilesize);
				boss_sword.addImage("sword", bosss_sword);
				boss_sword.rotation = 180;
				boss_swords.push(boss_sword);
			}
		}
		setTimeout(function(){
		if(boss_swords.length == 100){
			boss_swords.forEach(boss_sword => boss_sword.position.y += tilesize/7.5);
		}
		}, 1000);
	}
}