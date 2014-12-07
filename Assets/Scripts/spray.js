#pragma strict
var movementSpeed:float = 5;
var rotationSpeed:float = 10;

var idleAnimation : AnimationClip;
var walkAnimation : AnimationClip;
var runAnimation : AnimationClip;
var jumpPoseAnimation : AnimationClip;
var sprayAnimation : AnimationClip;


function Start () {
animation["Spray"].layer = 1;
animation["Spray"].wrapMode = WrapMode.Once;
}

function Update () {

	if (Input.GetKey(KeyCode.UpArrow))
	{
	animation.Play("walkLikeMan");
	transform.position += transform.forward * movementSpeed * Time.deltaTime;
	}
	if (Input.GetKey(KeyCode.DownArrow))
	{
	animation.Play("walkLikeMan");
	transform.position -= transform.forward * movementSpeed * Time.deltaTime;
	}

if (Input.GetKeyDown("w")){
	animation.Play("Spray");
	//animation.Play("idle");
	}
//animation.Play("idleBugMan");
}