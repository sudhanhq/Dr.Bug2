#pragma strict
//var player : Transform;
//var dist:float;

function Start () {

}

function Update () {



}

function OnTriggerEnter(info:Collider){

if(info.gameObject.tag=="Player"){

Destroy(gameObject);

//GetComponent(MeshRenderer).enabled=false;

}

}