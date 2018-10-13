#pragma strict

var Health = 100;
var Target : Transform;
var c:int;
function ApplyDammage (TheDammage : int)
{
	Health -= TheDammage;
	
	if(Health <= 0)
	{
		Dead();
		c=20;
		Target.SendMessage("getScore", c, SendMessageOptions.DontRequireReceiver);
	}
}

function Dead()
{
	player_health.enemykilled++;
	Destroy (gameObject);
}