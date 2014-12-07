#pragma strict

var barDisplay : float = 0; 
var pos : Vector2 = new Vector2(20,40); 
var size : Vector2 = new Vector2(200,20); 

static var HealthStatus : float =0;


private var currentStyle: GUIStyle  = null;
private var currentStyle2: GUIStyle  = null;

function Start () {

}

function Update () {
	 //barDisplay = HealthStatus; 
}
function OnGUI() {

 // draw the background:
  InitStyles();
  GUI.Label(Rect (Screen.width / 2 - size.x / 2,pos.y+0	, size.x, size.y),"<b>0                                         100</b>");
 GUI.BeginGroup (new Rect (Screen.width / 2 - size.x / 2, pos.y, size.x, size.y));

     GUI.Box (Rect (0,0, size.x, size.y),"",currentStyle);
 	 
 	 
     // draw the filled-in part:
     GUI.BeginGroup (new Rect (0, 0, size.x - (HealthStatus * 2), size.y));
         GUI.Box (Rect (0,0, size.x, size.y),"",currentStyle2 );
     GUI.EndGroup ();
 
 GUI.EndGroup ();
 
}
function InitStyles()
{
	 if( currentStyle == null )
    {
        currentStyle = new GUIStyle( GUI.skin.box );
        currentStyle.normal.background = MakeTex( 2, 2, new Color( 1f, 0f, 0f, 0.2f ) );
        
        currentStyle2 = new GUIStyle( GUI.skin.box );
        currentStyle2.normal.background = MakeTex( 2, 2, new Color( 0f, 1f, 0f, 0.5f ) );
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
