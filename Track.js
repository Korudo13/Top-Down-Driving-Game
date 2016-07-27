
const TRACK_W = 40; 
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLUMNS = 20;
const TRACK_ROWS = 15; 
var trackGrid = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
				 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
				 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
				 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1,
				 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1,
				 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
				 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 0, 2, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const TRACK_ROAD = 0;
const TRACK_WALL= 1;
const TRACK_PLAYERSTART = 2;

	function isWallAtColumnRow(column, row){
		if(column >= 0 && column < TRACK_COLUMNS && row >= 0 && row < TRACK_ROWS){
				var trackIndexUnderCoordinate = columnRowToArrayIndex(column, row);
				return (trackGrid[trackIndexUnderCoordinate] == TRACK_WALL);
		} else {
			return false;
		}
	}

		function carTrackHandling(){
		var carTrackColumn = Math.floor(carX / TRACK_W);
		var carTrackRow = Math.floor(carY / TRACK_H);
		var trackIndexUnderCar = columnRowToArrayIndex(carTrackColumn, carTrackRow);
	
		if(carTrackColumn >= 0 && carTrackColumn < TRACK_COLUMNS &&
	   		carTrackRow >= 0 && carTrackRow < TRACK_ROWS){

	   		if(isWallAtColumnRow(carTrackColumn, carTrackRow)){
	   			carSpeed *= -0.5;
	   	} //end of track found
	} // end of valid column and row
} // end of carTrackHandling func

function columnRowToArrayIndex(column, row){
	return column + TRACK_COLUMNS * row;
}

function drawTracks(){

	for(var eachRow = 0; eachRow<TRACK_ROWS; eachRow++){
		for(var eachColumn=0; eachColumn<TRACK_COLUMNS; eachColumn++){

			var arrayIndex = columnRowToArrayIndex(eachColumn, eachRow);

			if(trackGrid[arrayIndex] == TRACK_WALL){
			colorRect(TRACK_W*eachColumn,TRACK_H*eachRow, 
				TRACK_W-TRACK_GAP,TRACK_H-TRACK_GAP, 'blue');
			} // end of this track here

		} // end of for each column
	}	//end of for each row
} // end of drawTracks func