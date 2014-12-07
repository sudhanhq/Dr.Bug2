using UnityEngine;
using System.Collections;

public class FreezeObject : MonoBehaviour {

	// Use this for initialization
	void OnCollisionEnter () {
	rigidbody.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;
	//Destroy (col.gameObject )
	}
	

}
