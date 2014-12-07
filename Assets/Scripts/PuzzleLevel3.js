#pragma strict
import UnityEngine.UI;


var bridge: GameObject;
var bridge2: GameObject;
//var ob2: GameObject;
//static var showPanel:boolean=false;


public var blocked : AudioClip;

function Start () {
}

function Update () {


}

function OnTriggerEnter (info : Collider) 
    {
    		audio.clip = blocked;
    		audio.Play();
		
    	if (info.tag=="tool3")
    	{
    	bridge.SetActive(false);
    	bridge2.transform.position.y = (-0.23);

    	//GameMaster.objectNumber = 2;
    	//toolText2.enabled = true;
    	yield WaitForSeconds(3);
    	//toolText2.enabled = false;
    	
    	}
    	
   }