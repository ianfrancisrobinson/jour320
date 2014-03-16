$("#fwd").click(advance);
$('#back').click(rewind);

var starter=1;
function addOne(){
	if(starter>2){
		//do nothing
	}
	else{
		starter++; //add one to itself. Could do starter = starter + 1
	}
}

var finisher=1;
function subtractOne(){
	if(finisher<4){
		//do nothing
	}
	else{
		finisher--; //add one to itself. Could do starter = starter + 1
	}
}

function advance(){
	$(".BarrierOnePhoto").attr("src","photo3.jpg");
	$(".caption").html("MARS");
	addOne();
	$(".counter").html(starter);
}

function rewind(){
	$(".BarrierOnePhoto").attr("src","photo2.jpg");
	$(".caption").html("Title IX");
	subtractOne();
	$(".counter").html(finisher);
}