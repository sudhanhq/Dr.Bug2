#pragma strict
var enemy :  Transform;
var spawnlimit= 5;
var waitforsec:int= 10;
private var EnemyCount:GameObject[];
private var target : Transform;
var triggerdistance = 20;
var NestNum=0;
function Start () {
	
	
		InvokeRepeating("spawn", 0, waitforsec);
		target = GameObject.FindWithTag("Player").transform; //target the 
}

function Update () {

	
	

	
}

function spawn()
{	
	var distance= Vector3.Distance(transform.position, target.position);

	if (distance <= triggerdistance)
	{
	
	EnemyCount= GameObject.FindGameObjectsWithTag("EnemyN" + NestNum);
		
	if (EnemyCount.Length< spawnlimit)
		{
		var pos =transform.position;
		pos= Vector3(transform.position.x,1,transform.position.z);
		var enemy:Transform = Instantiate(enemy,pos, transform.rotation );
		enemy.tag="EnemyN"  + NestNum;
	

		//enemy.rigidbody.AddForce(enemy.transform.forward * 1.0);
		
		
		//Debug.Log(EnemyCount.Length);
	
		}
	}
}