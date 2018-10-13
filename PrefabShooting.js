#pragma strict



var theBullet : Rigidbody;
var Speed = 50;
var pos:Vector3;
var power:Material;
var power1:Material;
var power2:Material;
static var vardammage;
function Start() {
          theBullet.renderer.material=power;
		  vardammage=100;
		  Speed=50;
}


function Update () {
    	//var hit : RaycastHit;
	//var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5, 0));
	if (Input.GetMouseButtonDown(0))
	{
	audio.Play();
	 //if (Physics.Raycast (ray, hit, 100))
	 //{
	 if(player_health.enemykilled>=10 && player_health.enemykilled<=20){
	 	theBullet.renderer.material=power1;
	 	vardammage=200;
	 	Speed=100;
	 	}
	  if(player_health.enemykilled>20 ){
	 	theBullet.renderer.material=power2;
	 	vardammage=500;
	 	Speed=150;
	 	}
	    pos.x=transform.position.x-5;
	     pos.y=transform.position.y-1;
	      pos.z=transform.position.z;
		var clone = Instantiate(theBullet, pos, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0, 5, Speed));
		
		Destroy (clone.gameObject,0.5);
		//hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);
	 //}
	}
}