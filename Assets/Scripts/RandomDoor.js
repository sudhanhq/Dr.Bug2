#pragma strict
private var doornumber="";

function Start () {

doornumber = Random.Range(1,9).ToString();
	Debug.Log(doornumber);
}

function Update () {

}
function OnTriggerEnter (info : Collider) 
{
	if (info.name=="Player")
	{
	 
		 if (transform.tag.EndsWith(doornumber)==true)
		 {
	
		Application.LoadLevel("NightScene");
		
		}
	
	}


}