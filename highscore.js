#pragma strict
var Image:Texture;
var Image1:Texture;
var score:int;
function Start () {

}

function Update () {

}

function OnGUI()
{  
   
   // myStyle.font = myFont;
   // GUI.Label(new Rect(10,10, 100, 30),"Hello World",myStyle);
  //GUI.Label(
  //GUI.DrawTexture(new Rect(Screen.width/2-cur_health/2,Screen.height-50,200,20),Image2);
  GUI.DrawTexture(new Rect(Screen.width/2,Screen.height-50,200,25),Image1);
    GUI.DrawTexture(new Rect(Screen.width/2,Screen.height-50,20,25),Image);
   
  GUI.Box(new Rect(Screen.width/2,Screen.height-50,200,25)," "+score);
/*  GUI.Label(new Rect(Screen.width-125,20,100,25),"KEYS : "+khela);
  if(col1==true){
   GUI.Box(new Rect(Screen.width/2,Screen.height/2,200,25),"Key "+khela+" acquired");
 }
  
   GUI.DrawTexture(new Rect(10,Screen.height-50,100,25),Image2);
   GUI.DrawTexture(new Rect(10,Screen.height-50,100,25),Image3);
   
  GUI.Box(new Rect(10,Screen.height-50,100,25),"SCORE : "+sc);
  if(cur_health<=1)
    GUI.Box(new Rect(Screen.width/2,Screen.height/2,200,25),"U R DEAD !!!");
  */
}

function scoreReceive (TheScore :int)
{
	score=TheScore;
}
