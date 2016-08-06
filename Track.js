

const TRACK_W = 40; 
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLUMNS = 20;
const TRACK_ROWS = 15; 
var trackGrid = [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
				 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4,
				 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0, 0, 0, 1, 4,
				 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 0, 0, 0, 1, 4,
				 1, 0, 0, 5, 4, 4, 1, 0, 0, 1, 1, 4, 4, 4, 1, 1, 0, 0, 1, 4,
				 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 1, 4, 4, 1, 0, 0, 1, 4,
				 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 4,
				 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 1, 4,
				 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
				 1, 0, 2, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
				 1, 1, 1, 5, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
				 0, 3, 0, 0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 4,
				 0, 3, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 0, 1, 1, 4,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4];
const TRACK_ROAD = 0;
const TRACK_WALL= 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;

	function isObstacleAtColumnRow(column, row){
		if(column >= 0 && column < TRACK_COLUMNS && row >= 0 && row < TRACK_ROWS){
				var trackIndexUnderCoordinate = columnRowToArrayIndex(column, row);
				return (trackGrid[trackIndexUnderCoordinate] != TRACK_ROAD);
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

	   		if(isObstacleAtColumnRow(carTrackColumn, carTrackRow)){
	   			carSpeed *= -0.5;
	   	} //end of track found
	} // end of valid column and row
} // end of carTrackHandling func

function columnRowToArrayIndex(column, row){
	return column + TRACK_COLUMNS * row;
}

function drawTracks(){

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;

	for(var eachRow = 0; eachRow<TRACK_ROWS; eachRow++){
		for(var eachColumn=0; eachColumn<TRACK_COLUMNS; eachColumn++){
			var tileKindHere = trackGrid[arrayIndex];
			var useImg = trackPics[tileKindHere];
			canvasContext.drawImage(useImg,drawTileX,drawTileY);

			drawTileX += TRACK_W;
			arrayIndex++;
		} // end of for each column
		drawTileX = 0;
		drawTileY += TRACK_H;
	}	//end of for each row

} // end of drawTracks func