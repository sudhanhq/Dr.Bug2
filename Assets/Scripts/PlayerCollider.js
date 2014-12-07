    //var target : Transform;
    var moveSpeed = 3;
    var rotationSpeed = 3;
    var retreatLength = 8;
    static var moveback = false;
    private var startposition : Vector3;
    var myTransform : Transform; //current transform data of this enemy
     
    function Awake()
    {
    myTransform = transform; //cache transform data for easy access/preformance
    }
     
         
    function Update () 
    {
    //changed target when light bomb is triggered
      
 //   myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
//    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
     
	    if (moveback==false)
	    {
	    	//move towards the player
	    	myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
	    }
	    else
	    {	
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
 
    	if (info.name=="Terrain")
    	{
    		moveback=true;
    		startposition = transform.position;
     			
    	}

    }
	