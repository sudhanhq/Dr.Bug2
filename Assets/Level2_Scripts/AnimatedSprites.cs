using UnityEngine;
using System.Collections;

public class AnimatedSprites : MonoBehaviour {

	public int uvAnimationTileX = 4;        //Here you can place the number of columns of your sheet.
	
	//The above sheet has 4.
	
	public int uvAnimationTileY = 4;        //Here you can place the number of rows of your sheet.
	
	//The above sheet has 4.
	
	public float framesPerSecond = 10.0f;
	
	void Update ()
	{
		//Calculate index.
		
		int index = (int)(Time.time * framesPerSecond);
		
		//Repeat when exhausting all frames.
		
		index = index % (3 * 1);
		
		//Size of every tile.
		
		Vector2 size = new Vector2 ((1.0f / uvAnimationTileX), (1.0f / uvAnimationTileY));
		
		//Split into horizontal and vertical index.
		
		float uIndex = index % uvAnimationTileX;
		
		float vIndex = index / uvAnimationTileX;
		
		//Build offset.
		
		Vector2 offset = new Vector2 (uIndex * size.x, 1.0f - size.y - vIndex * size.y);
		
		renderer.material.SetTextureOffset ("_MainTex", offset);
		
		renderer.material.SetTextureScale ("_MainTex", size);
	}
}
