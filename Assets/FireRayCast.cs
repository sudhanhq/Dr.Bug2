using UnityEngine;
using System.Collections;




public class FireRayCast : MonoBehaviour {
	public GameObject bulletObject;
	public GameObject aimCursor;
	public Transform fireFrom;
	public float shotSpeed = 20.0f;
	public Texture2D crosshairImage; //crosshair images go here
	Vector3 shootToward;
	
	
	void Update () {
		RaycastHit rhInfo;
		
		Ray mouseRay = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		if(Physics.Raycast(mouseRay, out rhInfo, 150.0f)) {
			shootToward = rhInfo.point;
		} else {
			shootToward = mouseRay.origin + mouseRay.direction * 50.0f;
		}
		if(aimCursor != null) {
			aimCursor.transform.position = shootToward;
		}
		transform.LookAt(shootToward);
		
		/*if( Input.GetMouseButtonDown(0) )
		{
			GameObject shotGO = (GameObject)Instantiate(bulletObject, fireFrom.position, fireFrom.rotation);
			Vector3 deltaPos = shootToward - shotGO.transform.position;
			shotGO.rigidbody.velocity = deltaPos.normalized * shotSpeed;
			
		}*/
	}
	
	
	
	void OnGUI()	
	{
		{
			
			//Vector3 screenPos = myCamera.WorldToScreenPoint(myTransform.position);
			//shootToward.y = Screen.height - shootToward.y; //The y coordinate on screenPos is inverted so we need to set it straight
			//GUI.DrawTexture(new Rect(shootToward.x, shootToward.y, crosshairImage.width/8, crosshairImage.height/8), crosshairImage);
			
			//float xMin = (Screen.width - Input.mousePosition.y) - (crosshairImage.width / 8);
			//float yMin = (Screen.height - Input.mousePosition.x) - (crosshairImage.height / 8);
			//float xMin = Input.mousePosition.x;
			//float yMin = Input.mousePosition.y;
			
			//GUI.DrawTexture(new Rect(xMin, yMin, crosshairImage.width/8, crosshairImage.height/8), crosshairImage);
			
		}
	}
	
	
	
	
	
	
	
	
}
