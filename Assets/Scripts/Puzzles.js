#pragma strict
import UnityEngine.UI;

var obText1: Text;
var obText2: Text;
var bridge: GameObject;
var ob1: GameObject;
var ob2: GameObject;
var toolText1: Text;
var toolText2: Text;
var toolText3: Text;
//var endLevelPanel: GameObject;
//static var showPanel:boolean=false;


public var blocked : AudioClip;

function Awake(){
if (Application.loadedLevelName== "Level1")
{
	toolText3.enabled = false;

	obText1.enabled = false;
	obText2.enabled = false;
	toolText1.enabled = false;
	toolText2.enabled = false;
	toolText3.enabled = false;
}
}

function Start () {
if (Application.loadedLevelName== "Level1")
{
	obText1.enabled = false;
	obText2.enabled = false;
	toolText1.enabled = false;
	toolText2.enabled = false;
	toolText3.enabled = false;
}
//endLevelPanel.SetActive(false);
}

function Update () {




}

function OnTriggerEnter (info : Collider) 
    {
    		audio.clip = blocked;
    		audio.Play();
	
    	if (info.tag=="ob1" && GameMaster.objectNumber != 1)
    	{
    		obText1.enabled = true;
    		yield WaitForSeconds(2);
    		obText1.enabled = false;
    		
    	}
    	
    	if (info.tag=="ob2" && GameMaster.objectNumber != 2)
    	{
    		obText2.enabled = true;
    		yield WaitForSeconds(2);
    		obText2.enabled = false;
    	}
    	
    	if (info.tag=="ob1" && GameMaster.objectNumber == 1)
    	{
    		ob1.SetActive(false);
    	}
    	
    	if (info.tag=="ob2" && GameMaster.objectNumber == 2)
    	{
    		bridge.transform.position.y = 0.5;
    		ob2.SetActive(false);
    	}
    	
    	
    	
    	if (info.tag=="tool1")
    	{
    		GameMaster.objectNumber =1;
    		toolText1.enabled = true;
    		yield WaitForSeconds(3);
    		toolText1.enabled = false;
    		
    	}
    	
    	
    	if (info.tag=="tool2")
    	{
    	GameMaster.objectNumber =2;
    	toolText2.enabled = true;
    	yield WaitForSeconds(3);
    	toolText2.enabled = false;
    	
    	
    	}
    	
    	if (info.tag=="tool3")
    	{
    	GameMaster.objectNumber =3;
    	toolText3.enabled = true;
    	yield WaitForSeconds(3);
    	toolText3.enabled = false;
    	
    	
    	}
    	
    	if (info.tag=="Tent")
    	{
    		Application.LoadLevel("Scene1to2");
    		//Screen.showCursor = true;
    		
    	}
    	
    	 	
    	
      	
   }
   
 
