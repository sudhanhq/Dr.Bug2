#pragma strict

static var objectNumber:int = 0;
static var levelNumber:int;
var bomb : Texture;
var Stone : Texture;
var Spray : Texture;

public var dieAnimation : AnimationClip;

var offsetY : float = 5;
var offsetX : float = 5;
var sizeX : float = 150;
var sizeY : float = 100;



function Awake(){



}

function Update(){

if (Input.GetKey(KeyCode.P)){

Application.LoadLevel("Leve3a");
}



}
function OnGUI() {
	
		var currentW=WeaponControl.CurrentWeapon;
		var dist:float=1;
		var dist2:float=1;	
		var dist3:float=1;
		
		var distx:float=1;	
		var distx2:float=1;	
		var distx3:float=1;	
		var text : String ="";
		text="<size=14><color=cyan><b>Weapons:</b></color></size> \r\n";
		
		
		var Sammo : String ="";
		var Num : String="";
		if (currentW==1)
		{	
			Sammo="<size=20><color=gray><b>"+ WeaponControl.Spraylimit + "</b></color></size> \r\n";			
			Num="<size=20><color=gray><b>1-</b></color></size> \r\n";	
			dist=2;
			distx=1.5;
		}
		else
		{
			Sammo="<size=18><color=gray>"+ WeaponControl.Spraylimit + "</color></size> \r\n";			
			Num="<size=18><color=gray>1-</color></size> \r\n";	

		}
		
		var Bammo : String ="";
		var Num1 : String="";
		if (currentW==2)
		{
			Bammo="<size=20><color=cyan><b>"+ WeaponControl.Bomblimit + "</b></color></size> \r\n";	
			Num1="<size=20><color=cyan><b>2-</b></color></size> \r\n";	
	
			dist2=2;
			distx2=1.5;
		}
		else
		{
			Bammo="<size=18><color=cyan>"+ WeaponControl.Bomblimit + "</color></size> \r\n";	
			Num1="<size=18><color=cyan>2-</color></size> \r\n";	

		}
		
		var Stammo : String ="";
		var Num2 : String="";
		if (currentW==3)
		{		
			Stammo="<size=20><color=Yellow><b>"+ WeaponControl.StoneCount + "</b></color></size> \r\n";		
			Num2="<size=20><color=Yellow><b>3-</b></color></size> \r\n";	
			dist3=2;
			distx3=1.5;
		}
		else
		{
			Stammo="<size=18><color=Yellow>"+ WeaponControl.StoneCount + "</color></size> \r\n";		
			Num2="<size=18><color=Yellow>3-</color></size> \r\n";
		}
		
		
		GUI.BeginGroup (new Rect(offsetX, offsetY, sizeX, sizeY),text );
		
		GUI.Label(new Rect(0,30, 30*dist, 30*dist),Num);
		GUI.Label(new Rect(18*distx,30, 30*dist, 30*dist),Spray);
		GUI.Label(new Rect(45*distx,30, 30*dist, 30*dist),Sammo);
		
		GUI.Label(new Rect(0,60, 30*dist2, 30*dist2),Num1);
		GUI.Label(new Rect(18*distx2,60, 30*dist2, 30*dist2),bomb);
		GUI.Label(new Rect(45*distx2,60, 30*dist2, 30*dist2),Bammo);
		
		GUI.Label(new Rect(0,90, 30*dist3, 30*dist3),Num2);
		GUI.Label(new Rect(18*distx3,90, 30*dist3, 30*dist3),Stone);
		GUI.Label(new Rect(45*distx3,90, 30*dist3, 30*dist3),Stammo);
		     GUI.EndGroup ();
		GUI.skin.box.alignment = TextAnchor.UpperLeft;
	}
	
	
