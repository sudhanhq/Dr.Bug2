#pragma strict
var spray :  Transform;
var bomb : GameObject;
var bullet:Transform;

internal var fireDelay : float;
var Bspeed : float =10;
var Bdistance : float = 5;
var roteOffire : float = 1;
static var Bomblimit : int;
static var Spraylimit : int;
static var StoneCount : int;
static var CurrentWeapon : int;
var bomblimit= 5;
var spraylimit= 5;
var stonecount=0;
var currentweapon:int=1;
function Start () {

Bomblimit=bomblimit;
Spraylimit=spraylimit;
StoneCount=stonecount;

}

function Update () {
	var clone : GameObject;
		/// play spray effect
		
		if(Input.GetButton("Weapon1"))
		{
			currentweapon=1;
		}
		else if(Input.GetButton("Weapon2"))
		{
			currentweapon=2;
		}
		else if(Input.GetButton("Weapon3"))
		{
			currentweapon=3;
		}
		CurrentWeapon=currentweapon;
		
		
		if(Input.GetButton("Fire1") && currentweapon==1)
		{
			if (Spraylimit>0)
			{
				if (GameObject.FindWithTag("spray")==null)
				{
					var pieceRotation = Quaternion.AngleAxis(20, Vector3.up);
					var effect = Instantiate(spray,transform.position, transform.rotation);
					Destroy(effect.gameObject, 3);
					Spraylimit=Spraylimit-1;
				}
			}
		}
		
	
		
			if(Input.GetButton("Fire1") && Time.time > fireDelay && currentweapon==2)
			{
				//limit bomb in a level
				if (Bomblimit>0)
				{
					fireDelay = Time.time + roteOffire;
					clone  = Instantiate (bomb, transform.position, transform.rotation);
					clone.rigidbody.velocity = transform.TransformDirection(Vector3 (0,Bdistance,Bspeed));
					//Physics.IgnoreCollision(clone.collider, transform.root.collider);				
					Bomblimit=Bomblimit-1;
			
				}
			}
			
			if (Input.GetButton("Fire1") && Time.time > fireDelay && currentweapon==3)
			{
				if( StoneCount >0)
				{
				fireDelay = Time.time + roteOffire;
				var shoot = Instantiate(bullet, transform.position, transform.rotation);
			    shoot.rigidbody.AddForce(shoot.transform.forward * 1000.0);
				//clone.velocity = transform.TransformDirection (Vector3.forward * 10);
				StoneCount=StoneCount-1;
				Destroy(shoot.gameObject, 2);
				}
			}	

		
}
