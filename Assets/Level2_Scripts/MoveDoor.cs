using UnityEngine;
using System.Collections;

public class MoveDoor : MonoBehaviour {

	void SetTransformX(){
		transform.position = new Vector3(0,-3.0f,0);
	}
	void OnTriggerEnter (){
	SetTransformX();
	}

	//void OnTriggerExit (){
	//	transform.position = new Vector3(841.48f,3.44f,702.11f);
	//}



}
