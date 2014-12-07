using UnityEngine;
using System.Collections;


public class throw_animaiton : MonoBehaviour {
	private AnimationState shoot;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetMouseButtonDown (0)) {
						//animation["Throw"].wrapMode = WrapMode.Once;
						//animation["Throw"].layer = 1;
						//shoot = animation["Throw"];
			            //animation["throw"].speed = 0.1f; 

						//animation["spray_anim"].speed = 0.1f; 
						throwani();
						//animation.Play("spray_anim");
				}

	

	}
	
	
	void throwani(){
	
	animation.Play("throw");
	}
}
