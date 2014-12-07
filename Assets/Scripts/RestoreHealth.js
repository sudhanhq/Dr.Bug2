#pragma strict
 public var restore_health : AudioClip; 


var HealthRestored:int=20;
function Start () {

}

function Update () {

}
  function OnTriggerEnter (info : Collider) 
    {
	
    	if (info.tag=="Player")
    	{
    	
    		if (Healthbar.HealthStatus > 0 )
    			Healthbar.HealthStatus-=HealthRestored;
    	
    		//audio.clip = restore_health;
    		//audio.Play();
    		audio.PlayOneShot(restore_health);
    		Destroy(transform.gameObject,0);
    	
    		var player = GameObject.Find("Player");
           
            
            //player.transform.animation.Play("player_die");
    	}
    	

    }