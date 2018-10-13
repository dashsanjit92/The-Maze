var isQuit=false;
var isHighScore=false;
var sound:AudioSource;
/*function Start()
{
renderer.material.color = Color.red;
}
function Update()
{
renderer.material.color = Color.red;
}
*/


function OnMouseEnter () 
{
 renderer.material.color = Color.red;
 audio.Play();
}

function OnMouseExit() 
{
 renderer.material.color = Color.white;
}

function OnMouseUp() 
{
   if (isQuit==true)
   {
    renderer.material.color = Color.green;
    sound.Play();
    Application.Quit();
   }
    
   else if (isHighScore==true)
   {
    renderer.material.color = Color.green;
    sound.Play();
    Application.LoadLevel(2);
   } 
   
   else 
   {
    renderer.material.color = Color.green;
    sound.Play();
    Application.LoadLevel(3);
   }
}