#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (info : Collider) 
{

if (info.name == "Player")
	{

	Application.LoadLevel("GameComplete");
	}	
}