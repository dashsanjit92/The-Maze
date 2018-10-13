#pragma strict

var image:Texture;
function OnGUI()
{  
   // GUI.DrawTexture(new Rect(200,20,1000,450),image);
   
  //GUI.Box(new Rect(200,20,1000,450),'');
  //GUI.Label(new Rect(Screen.width-125,20,100,25),"KEYS : "+khela);
  //if(col1==true)
  // GUI.Box(new Rect(Screen.width/2,Screen.height/2,200,25),"Key "+khela+" acquired");
  wait();
}
function wait()
{
  yield WaitForSeconds(110);
  Application.LoadLevel(2);
}