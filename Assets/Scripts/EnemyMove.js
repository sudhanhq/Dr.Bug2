    private var target : Transform;
    var moveSpeed = 3;
    var rotationSpeed = 3;
    var retreatLength = 8;
    var damageCaused = 10;
    private var moveback = false;
    private var startposition : Vector3;
    private var myTransform : Transform; //current transform data of this enemy
    public var dead_audio : AudioClip; 
    public var player_damage_audio : AudioClip; 
      
    function Awake()
    {
    //myTransform = transform; //cache transform data for easy access/preformance
    }
     
    function Start()
    {
    target = GameObject.FindWithTag("Player").transform; //target the player
    
    }
     
    function Update () 
    {
     myTransform = transform;
     if (myTransform.position.y >.1 )    
     myTransform.position=Vector3(myTransform.position.x,.1,myTransform.position.z);
     else
     myTransform.position=Vector3(myTransform.position.x,myTransform.position.y ,myTransform.position.z);
    	
    //changed target when light bomb is triggered
    if (GameObject.FindWithTag("bomb")!=null)
   	{
   		target = GameObject.FindWithTag("bomb").transform;
   	}
   	else
   		target = GameObject.FindWithTag("Player").transform; //target the player
     
    
   
    
    var tpos=  target.position;
    tpos=Vector3(target.position.x,0.1,target.position.z);
    
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(tpos - myTransform.position), rotationSpeed*Time.deltaTime);
    

     	
	    if (moveback==false)
	    {
	    	//move towards the player
	    	myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
	    	
	    	//play attack animation when near player
	    	if (Vector3.Distance(myTransform.position, target.position) < 3)
		     	{
		     		//animation.wrapMode=
		     		animation.Play("Attack");
		     	}
		    
	    }
	    else
	    {	
	    	animation.Play("Run");
	    	//move away from player	
	    	myTransform.position -= myTransform.forward * moveSpeed * Time.deltaTime;	    	
   	
		    if (Vector3.Distance(myTransform.position,startposition ) > retreatLength)
			    {  
			    	//variable to return to player
			    	moveback=false;
			    	
			    }
	
	    	
	    }
	   
	  
     
     
    }
    function OnTriggerEnter (info : Collider) 
    {
		if(  info.tag=="bomb")
		{
			moveback=true;
    		startposition = myTransform.position;
		}
    	if (info.tag=="Player")
    	{
    		moveback=true;
    		startposition = myTransform.position;
    		
    		audio.clip = player_damage_audio;
    		audio.Play();
     		
     		Healthbar.HealthStatus+=damageCaused;
     		
     	
    	}
    	

    	
    	if (info.tag=="Bullets" )
    	{
    		animation.Play("Death");
    		//yield WaitForSeconds(1);
    		audio.clip = dead_audio;
    		audio.Play();
    		Destroy(gameObject,1);
    	}
    	
    	
    	

    }
	function OnParticleCollision(other : GameObject) {

		if (other.tag =="spray")
		{
			animation.Play("Death");
			//myTransform.
			Destroy(transform.gameObject, 1);
		}
	}
	