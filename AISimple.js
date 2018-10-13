var Distance;
var Target : Transform;
var lookAtDistance = 50.0;
var attackRange = 20.0;
var moveSpeed = 5.0;
var Damping = 6.0;
var damage = 1.0;
var angle:Vector3;
var Dammage=5;
function Update ()
{
	Distance = Vector3.Distance(Target.position, transform.position);
	
	if (Distance < lookAtDistance)
	{
		//renderer.material.color = Color.yellow;
		lookAt();
	}
	
	if (Distance > lookAtDistance)
	{
		//renderer.material.color = Color.green;
	}
	
	if (Distance < attackRange)
	{
		//renderer.material.color = Color.red;
		attack ();
	}
}

function lookAt ()
{
	angle.x=transform.position.x-0.7;
	angle.y=transform.position.y;
	angle.z=transform.position.z;
	var rotation = Quaternion.LookRotation(Target.position - angle);
	//var rotation = Quaternion.LookRotation(Target.rotation -Quaternion.rotation);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function attack ()
{
	transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
	if (Distance < damage){
	 Target.SendMessage("ApplyDammagePlayer", Dammage, SendMessageOptions.DontRequireReceiver);
	 Destroy(gameObject);
	 }
}