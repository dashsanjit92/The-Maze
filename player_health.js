#pragma strict
var max_health:float = 100.0f;
var cur_health:float = 100.0f;
var Image:Texture;
var Image1:Texture;
var Image2:Texture;
var Image3:Texture;
var Image4:Texture;
var col = false;
var col_death = false;
var col1 = false;
var key1:GameObject;
var key2:GameObject;
var key3:GameObject;
var key4:GameObject;
var khela:int;
var keysound:AudioClip;
var gate:GameObject;
var sc:int;
var won=false;
//var send:Transform;
//var nn:SceneView; 
//var dead:boolean;
//var kill:key_kill;
//-------------------------------------------
//var lookAround01 : MouseLook;
//var lookAround02 : MouseLook;
var charController : CharacterController;
static var enemykilled=0;

function destroy()
{
   
	if (khela == 0)
  		Destroy(key4);
  	else if (khela == 1)
  		Destroy(key1);
  	else if (khela == 2)
  		Destroy(key2);
  	else if (khela == 3)
  		Destroy(key3);
  	else if (khela == 4)
  		Destroy(gate);
}
function OnTriggerEnter (theCollider : Collider)
{
   
    Debug.Log("PLAYER HEALTH");
	if (theCollider.tag == "Player")
	{
		col = true;
	}
	else if (theCollider.tag == "Respawn")
	{
		col_death = true;
	}
	if (theCollider.name == "Col4" && khela==0 )
	{
		col1 = true;
		destroy();
		audio.Play();
		khela=khela+1;
		sc=sc+50; 
		cur_health=cur_health+20;
	}
	else if (theCollider.name == "col1" && khela==1)
	{
		col1 = true;
		destroy();
		audio.Play();
		khela=khela+1;
		sc=sc+100;
		cur_health=cur_health+20;
	}
	else if (theCollider.name == "col2" && khela==2)
	{
		col1 = true;
		destroy();
		audio.Play();
		khela=khela+1;
		sc=sc+150;
		cur_health=cur_health+20;
	}
	else if (theCollider.name == "col3" && khela==3)
	{
		col1 = true;
		destroy();
		audio.Play();
		khela=khela+1;
		sc=sc+250;cur_health=cur_health+20;
	}
	else if (theCollider.name == "colGate" && khela==4)
	{
		col1 = true;
		won=true;
		destroy();
	}
	if(col1==true)
	{
	  yield WaitForSeconds(3);
      col1=false;
      yield WaitForSeconds(2);
    //fre=true;
      //col=true;
   /*   Time.timeScale = 0.000001;
      yield WaitForSeconds(10*Time.timeScale);
      Time.timeScale= 1.0;
*/
    }
}
function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		col = false;
	}
	if (theCollider.tag == "Respawn")
	{
		col_death = false;
	}
}

function OnGUI()
{  
   
   // myStyle.font = myFont;
   // GUI.Label(new Rect(10,10, 100, 30),"Hello World",myStyle);
  //GUI.Label(
  //GUI.DrawTexture(new Rect(Screen.width/2-cur_health/2,Screen.height-50,200,20),Image2);
  GUI.DrawTexture(new Rect(Screen.width/2-cur_health/2,Screen.height-50,200,25),Image1);
    GUI.DrawTexture(new Rect(Screen.width/2-cur_health/2,Screen.height-50,2*cur_health,25),Image);
   
  GUI.Box(new Rect(Screen.width/2-cur_health/2,Screen.height-50,200,25),"PLAYER HEALTH");
  GUI.Label(new Rect(Screen.width-125,20,100,25),"KEYS : "+khela);
  if(col1==true){
   GUI.Box(new Rect(Screen.width/2,Screen.height/2,200,25),"Key "+khela+" acquired");
 }
  
   GUI.DrawTexture(new Rect(10,Screen.height-50,100,25),Image2);
   GUI.DrawTexture(new Rect(10,Screen.height-50,100,25),Image3);
   GUI.Box(new Rect(10,Screen.height-50,100,25),"SCORE : "+sc);
  if(cur_health<=1){
   GUI.DrawTexture(new Rect(Screen.width*0.5-150, 60, 300, 40),Image4);
    GUI.Box(new Rect(Screen.width*0.5-150, 60, 300, 40),"YoU hAvE fAiLeD tO cOmPleTe ThE QuEsT  !!!\n  .. yOuR SoUl ShAlL Be MiNe");
    GUI.DrawTexture(new Rect(Screen.width*0.5-150, 120, 300, 40),Image4);
    GUI.Box(new Rect(Screen.width*0.5-150, 120, 300, 40),"SCORE :-> "+sc);
   if (GUI.Button(Rect(Screen.width*0.5-50, 200-20, 100, 40), "Restart"))
		{
			Restart();
		}
		
		if (GUI.Button(Rect(Screen.width*0.5-50, 240, 100, 40), "Menu"))
		{
			Menu();
		}
   }
   if(won==true){
    GUI.DrawTexture(new Rect(Screen.width*0.5-150, 60, 300, 40),Image4);
    GUI.Box(new Rect(Screen.width*0.5-150, 60, 300, 40),"YoU hAvE cOmPleTed YoUr QuEsT !!!\n  .. yOuR wIsH hAs BeEn GrAnTeD");
    GUI.DrawTexture(new Rect(Screen.width*0.5-150, 120, 300, 40),Image4);
    GUI.Box(new Rect(Screen.width*0.5-150, 120, 300, 40),"SCORE :-> "+sc);
   if (GUI.Button(Rect(Screen.width*0.5-50, 200-20, 100, 40), "Restart"))
		{
			Restart();
		}
		
		if (GUI.Button(Rect(Screen.width*0.5-50, 240, 100, 40), "Menu"))
		{
			Menu();
		}
   }
  
}
function Update () {
 //OnGUI();
 if(cur_health>=1){
  if(col==false)
   cur_health=cur_health-0.005;
  else
   if(cur_health <= 80)
   cur_health=cur_health+0.05;
   
  if(col_death==true)
   cur_health=cur_health-0.1;
   }
   else{
   //lookAround01.enabled = false;
		//lookAround02.enabled = false;
		charController.enabled = false;

   }
 // if(cur_health <= 1){
    //Wait();
    //send.SendMessage("scoreReceive", sc, SendMessageOptions.DontRequireReceiver);
   // nn.highscore.
   // Application.LoadLevel(4);
  //}
}

function Start() {
khela=0;
sc=0;
//dead=false;
   // lookAround01 = gameObject.GetComponent(MouseLook);
	//lookAround02 = GameObject.Find("MainCamera").GetComponent(MouseLook);
	charController = gameObject.GetComponent(CharacterController);

}
function ApplyDammagePlayer (TheDammage : int)
{
  cur_health=cur_health-TheDammage;
  sc=sc-TheDammage;
}

function getScore (TheScore :int)
{
  sc=sc+TheScore;
}

function Wait() 
{
	yield WaitForSeconds(100);
	Application.LoadLevel(0);
}
function Restart() 
{
	Application.LoadLevel(2);
}
function Menu() 
{
	Application.LoadLevel(1);
}