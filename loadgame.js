var sound:AudioSource;
function OnMouseEnter() 
{
 renderer.material.color = Color.cyan;
 audio.Play();
}

function OnMouseExit()
{
 renderer.material.color = Color.white;
}

function OnMouseUp() 
{
 renderer.material.color = Color.green;
 sound.Play();
 Application.LoadLevel(2);
}