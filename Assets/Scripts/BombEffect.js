#pragma strict
var ExplodeEffect : Transform;
var savedTime: float;
var bombTime: float= 8;
function Start () {
savedTime = Time.time;
}

function Update () {
	
		//play exploding effect
	/*if (transform.rigidbody.IsSleeping())
	{
	

		if (GameObject.FindWithTag("ExplodeEffect")==null)
		{
			var explodeeffect = Instantiate(ExplodeEffect,transform.position,transform.rotation);				
			Destroy(explodeeffect.gameObject, 3);	
			
			Destroy(transform.gameObject,1);
			
		}
	
	}*/
	if(Time.time - savedTime >= bombTime)
	{
		if (GameObject.FindWithTag("ExplodeEffect")==null)
		{
			var explodeeffect = Instantiate(ExplodeEffect,transform.position,transform.rotation);				
			Destroy(explodeeffect.gameObject, 3);	
			
			Destroy(transform.gameObject,1);
		}
	}

	
}