
var carX = 75;
var carY = 75;
var carAng = 0;
var carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;


function carReset(){
	for(var eachRow = 0; eachRow<TRACK_ROWS; eachRow++){
		for(var eachColumn=0; eachColumn<TRACK_COLUMNS; eachColumn++){
			var arrayIndex = columnRowToArrayIndex(eachColumn, eachRow);
			if(trackGrid[arrayIndex] == TRACK_PLAYERSTART){
				trackGrid[arrayIndex] = TRACK_ROAD;
				carAng = -Math.PI/2;
				carX = eachColumn * TRACK_W + TRACK_W/2;
				carY = eachRow * TRACK_H; + TRACK_H/2;
			}
		}
	}
}

	function carMove(){
		carSpeed *= GROUNDSPEED_DECAY_MULT;

		if(keyHeld_Gas){
			carSpeed += DRIVE_POWER;
		}

		if(keyHeld_Reverse){
			carSpeed -= REVERSE_POWER;
		}

		if(Math.abs(carSpeed) > MIN_SPEED_TO_TURN){
			if(keyHeld_TurnLeft){
				carAng -= TURN_RATE;
			}

			if(keyHeld_TurnRight){
			carAng += TURN_RATE;
			}
		}

	

		carX += Math.cos(carAng) * carSpeed;
		carY += Math.sin(carAng) * carSpeed;
	}

	function carDraw(){
		drawBitMapCenteredWithRotation(carPic, carX,carY, carAng);
}