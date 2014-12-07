using UnityEngine;
using System.Collections;

public class startingPosition : MonoBehaviour {

	

		void SetTransformX(){
			transform.position = new Vector3(870.657f,0.4329f,706.175f);
		}
		void OnTriggerEnter (){
			SetTransformX();
		}

	}

