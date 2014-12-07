#pragma strict

var pos : Vector2 = new Vector2(200,40); 
var size : Vector2 = new Vector2(200,20); 
var runningTime:float=0;
private var Showvar:boolean=false;
private var currentStyle: GUIStyle  = null;
private var currentStyle2: GUIStyle  = null;
private var origvalue:float;
private var origspeed;
function Start () {
	origvalue=runningTime;
	origspeed = ThirdPersonController.runspeed;
}
function Update () {
	 //barDisplay = HealthStatus; 
	

		if (Input.GetKey (KeyCode.LeftShift) || Input.GetKey (KeyCode.RightShift))
		{
			runningTime -= Time.deltaTime;
			Showvar=true;
			ThirdPersonController.runspeed=origspeed;
			if (runningTime<=0)		
			{
				ThirdPersonController.runspeed=0;
				runningTime=0;
			}
		}

	else if (runningTime!=origvalue && Input.GetKey(KeyCode.LeftShift)==false && Input.GetKey (KeyCode.RightShift)==false )
	{
		runningTime += Time.deltaTime/3;
		if (runningTime>=origvalue)		
		{
		Showvar=false;
		runningTime=origvalue;
		}
	}

	
}
function OnGUI() {
	
  if (Showvar==true)
  {
 	// draw the background:
  	InitStyles();
  	GUI.Label(Rect (Screen.width / 2 - size.x / 2,pos.y+0	, size.x, size.y),"");
 	GUI.BeginGroup (new Rect (Screen.width / 2 - size.x / 2, pos.y, size.x, size.y));

     GUI.Box (Rect (0,0, size.x, size.y),"",currentStyle);
     // draw the filled-in part:
     GUI.BeginGroup (new Rect (0, 0, size.x -  (size.x -((runningTime/origvalue)*size.x)), size.y));
         GUI.Box (Rect (0,0, size.x, size.y),"",currentStyle2 );
     GUI.EndGroup ();
 
 	GUI.EndGroup ();
 	}
 
}
function InitStyles()
{
	 if( currentStyle == null )
    { 
        currentStyle = new GUIStyle( GUI.skin.box );
        currentStyle.normal.background = MakeTex( 2, 2, new Color( 0f, 0f, 0f, .5f ) );
        
        currentStyle2 = new GUIStyle( GUI.skin.box );
        currentStyle2.normal.background = MakeTex( 2, 2, new Color( 0f, 1f, 0.0f, 0.5f ) );
    }
}
function MakeTex(width:int, height:int, col:Color )
{
	var pix : Color[] = new Color[width * height];
    for( var i = 0; i < pix.Length; ++i )
    {
        pix[ i ] = col;
    }
    var result : Texture2D = new Texture2D( width, height );
    result.SetPixels( pix );
    result.Apply();
    return result;
}
