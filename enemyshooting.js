#pragma strict
var theBullet : Rigidbody;
var Speed = 50;
var pos:Vector3;
var count=0;
function Update () {
    	//var hit : RaycastHit;
	//var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5, 0));
	//if (Input.GetMouseButtonDown(0))
	//{
	 //if (Physics.Raycast (ray, hit, 100))
	 //{
	    count++;
	    if(count%100==0){
	    pos.x=transform.position.x;
	     pos.y=transform.position.y+0.05;
	      pos.z=transform.position.z;
		var clone = Instantiate(theBullet, pos, transform.rotation);
		clone.velocity = transform.TransformDirection(Vector3(0,0, Speed));
		
		Destroy (clone.gameObject,0.5);}if(count==1000)count=0;
		//hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);
	 //}
	//}
}
