using UnityEngine;
using System.Collections;

public class NewGame : MonoBehaviour {

	public void StartGame(int Levelnum){

		Application.LoadLevel(Levelnum);
	}


	public void StartGame2(){
		
		Application.LoadLevel("Level2_Scene");
	}


	public void StartGame3(){
		
		Application.LoadLevel("Level3");
	}

}
