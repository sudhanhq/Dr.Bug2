#pragma strict

var AngleY : float = 90.0;
private var targetValue : float=0.0;
private var currentValue : float=0.0;
private var easing : float=0.05;
var hinge :GameObject;


function Update () {
	currentValue = currentValue + (targetValue - currentValue) * easing;
	hinge.transform.rotation= Quaternion.identity;
	hinge.transform.Rotate(0,currentValue,0);

}

function OnTriggerEnter(other : Collider){
targetValue = AngleY;
currentValue = 0;
}