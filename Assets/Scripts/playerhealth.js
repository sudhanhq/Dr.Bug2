#pragma strict

public var dieanimation: AnimationClip;
var check:int = 1;

function Start () {

}

function Update () {

if (Healthbar.HealthStatus >100){

if (check==1){
check +=1;


dieani();
Healthbar.HealthStatus =0;

}
}
}

function dieani(){

if (Application.loadedLevelName== "Level1"){

Application.LoadLevel("Level1");
}

if (Application.loadedLevelName== "Level2_Scene"){

Application.LoadLevel("Level2_Scene");
}

if (Application.loadedLevelName== "Level3"){

Application.LoadLevel("Level3");
}
//animation.Play("player_die");

//yield WaitForSeconds(2);

//Destroy(gameObject, 2);

}

