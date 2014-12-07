#pragma strict

var movementSpeed : float = 5;
var rotationSpeed : float = 10;


function Start () {


}

function Update () {

//transform.position.x += movementSpeed * Input.GetAxis("Horizontal") * Time.deltaTime;


if (Input.GetKey(KeyCode.UpArrow))
{
transform.position += transform.forward * movementSpeed * Time.deltaTime;
}
if (Input.GetKey(KeyCode.DownArrow))
{
transform.position -= transform.forward * movementSpeed * Time.deltaTime;
}





if(Input.GetKey(KeyCode.RightArrow)){
//transform.rotation.y += rotationSpeed * Time.deltaTime;

transform.Rotate(Vector3.up * rotationSpeed);
}

if(Input.GetKey(KeyCode.LeftArrow)){
//transform.rotation.y -= rotationSpeed * Time.deltaTime;

transform.Rotate(Vector3.down * rotationSpeed);
}

/*
if(Input.GetKey(KeyCode.UpArrow)){
transform.position.z += movementSpeed * Time.deltaTime;
}

if(Input.GetKey(KeyCode.DownArrow)){
transform.position.z -= movementSpeed * Time.deltaTime;
}

if(Input.GetKey(KeyCode.Space)){
transform.position.y += movementSpeed * Time.deltaTime;
}

*/


}



/* Extra

transform.position += Camera.main.transform.forward * movementSpeed * Time.deltaTime;
transform.position -= Camera.main.transform.forward * movementSpeed * Time.deltaTime;

*/