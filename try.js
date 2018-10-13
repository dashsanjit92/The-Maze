#pragma strict

function Start () {
wait();
}

function Update () {
 wait();
}

function wait()
{
  yield WaitForSeconds(5);
  Application.LoadLevel(1);
}