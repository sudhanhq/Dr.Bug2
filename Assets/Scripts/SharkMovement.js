#pragma strict
private var target : Transform;
private var ztarget:int=0;
private var maxtarget:int=0;
var attackspeed=5;
var normalspeed=2;
var triggerdistance=10;
private var isactive:boolean=false;
private var isattacking:boolean=false;
function Start () {
   target = GameObject.FindWithTag("Player").transform; //target the player
    isactive=false;
    isattacking=false;
}

function Update () {
	
	
	
	
	if (WaterCollider.inWater==true)
	{
	   
	 ztarget=Vector3.Distance(target.position,transform.position);
	 	
	
     if (transform.position.y >0 )  
     {  
     transform.position=Vector3(transform.position.x,0,transform.position.z);
     Debug.Log(  transform.position);
     }
     else
     transform.position=Vector3(transform.position.x,transform.position.y ,transform.position.z);
    	
	 	
		if (ztarget < triggerdistance && isattacking==false)
		{		
			isactive=true;
			var tpos=  target.position;   
		    transform.rotation = Quaternion.Slerp(transform.rotation,
		    Quaternion.LookRotation(tpos - transform.position), 1*Time.deltaTime);
		   	transform.position += transform.forward * normalspeed * Time.deltaTime;
	
			//transform.position+=Vector3.forward  *normalspeed* Time.deltaTime;
		
		}
		if (ztarget>= (triggerdistance*1.8) && isattacking==false && isactive == true)
		{
			isattacking=true;
	
		}
		
		if (isactive==true && isattacking==true )
		{
	
	
			tpos=  target.position;   
		    transform.rotation = Quaternion.Slerp(transform.rotation,
		    Quaternion.LookRotation(tpos - transform.position), Time.deltaTime);
		   	transform.position += transform.forward * attackspeed*  Time.deltaTime;
		
		}
	}
	else
	{
		isactive=false;
		isattacking=false;
	}
}

function OnTriggerEnter (info : Collider) 
{
	if (info.name == "Player")
	{
		Healthbar.HealthStatus+=100;

	}
} 