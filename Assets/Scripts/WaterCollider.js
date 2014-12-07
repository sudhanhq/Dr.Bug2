#pragma strict
private var counter = 0;
var mcamera:Camera;
static var inWater = false;
private var origFOV:float;
function Start () {
	origFOV=mcamera.fieldOfView;
}


function Update () {


if (inWater == true)
	{
	counter++;

	Healthbar.HealthStatus+=(0.08);
	
	}
}


function OnTriggerEnter (info : Collider) 
{
	if (info.name == "Player")
	{
	inWater = true;
	mcamera.fieldOfView=82;
	}
}    


function OnTriggerExit (info : Collider) 
{
	if (info.name == "Player")
	{
	inWater = false;
		mcamera.fieldOfView=origFOV;
	}
}    