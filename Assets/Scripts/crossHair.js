var crosshairTex : Texture2D; //crosshair images go here
 
var position : Rect; //position of the crosshair image
 
static var OriginalOn = true;
 
function Update(){
 
position = Rect((Screen.width - crosshairTex.width) / 2, (Screen.height - crosshairTex.height) /2, crosshairTex.width, crosshairTex.height); //determines width/height of our crosshair GUI texture
 
}
 
function OnGUI()
 
{
 
if(OriginalOn == true)
 
{
 
GUI.DrawTexture(position, crosshairTex); //"draws" crosshair texture
 
Screen.showCursor = false; //disables cursor from being visible
 
}
 
}