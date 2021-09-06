function getIMC(){
  var peso=parsefloat(document.getElementById('peso ').value);
  var altura=parsefloat(documet.getElementById('altura').value);
  var imc=peso/(altura*altura);
  documentgetElementById("imc")innerHTML=imc;
