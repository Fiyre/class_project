try{
function validatefcg(){
let date = document.forms.fcg.date.value;
let pcf = document.forms.fcg.pcf.value;
let hp = document.forms.fcg.hp.value;
let cpn = document.forms.fcg.cpn.value;
let pn = document.forms.fcg.pn.value;

if(!date){
document.getElementById('dateErr').innerHTML = "<br/>this space is empty";
document.forms.fcg.date.focus();
return false;
}
else{
  document.getElementById('dateErr').innerHTML = "";
}

if(!pcf){
  document.getElementById('pcfErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.pcf.focus();
  return false;
}
else{
  document.getElementById('pcfErr').innerHTML = "";
}


if(!hp){
  document.getElementById('hpErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.hp.focus();
  return false;
}
else{
  document.getElementById('hpErr').innerHTML = "";
}


if(!cpn){
  document.getElementById('cpnErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.cpn.focus();
  return false;
}
else{
  document.getElementById('cpnErr').innerHTML = "";
}


if(!pn){
  document.getElementById('nameErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.pn.focus();
  return false;
}
else{
  document.getElementById('nameErr').innerHTML = "";
}


if(!dob){
  document.getElementById('dobErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.dob.focus();
  return false;
}
else{
  document.getElementById('dobErr').innerHTML = "";
}


if(!gen){
  document.getElementById('genErr').innerHTML = "please choose one(1) of the options";
  return false;
}
else{
  document.getElementById('genErr').innerHTML = "";
}


if(!ptr){
  document.getElementById('ptrErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.ptr.focus();
  return false;
}
else{
  document.getElementById('ptrErr').innerHTML = "";
}


if(!phmw){
  document.getElementById('phmwErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.phmw.focus();
  return false;
}
else{
  document.getElementById('phmwErr').innerHTML = "";
}


if(!eth){
  document.getElementById('ethErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.eth.focus();
  return false;
}
else{
  document.getElementById('ethErr').innerHTML = "";
}


if(!pr){
  document.getElementById('prErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.pr.focus();
  return false;
}
else{
  document.getElementById('prErr').innerHTML = "";
}


if(!gsp){
  document.getElementById('gspErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.gsp.focus();
  return false;
}
else{
  document.getElementById('gspErr').innerHTML = "";
}


if(!trt){
  document.getElementById('trtErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.trt.focus();
  return false;
}
else{
  document.getElementById('trtErr').innerHTML = "";
}


if(!pht){
  document.getElementById('phtErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.pht.focus();
  return false;
}
else{
  document.getElementById('phtErr').innerHTML = "";
}


if(!lrw){
  document.getElementById('lrwErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.lrw.focus();
  return false;
}
else{
  document.getElementById('lrwErr').innerHTML = "";
}


if(!rfe){
  document.getElementById('rfeErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.rfe.focus();
  return false;
}
else{
  document.getElementById('rfeErr').innerHTML = "";
}


if(!di){
  document.getElementById('diErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.di.focus();
  return false;
}
else{
  document.getElementById('diErr').innerHTML = "";
}

if(!ss){
  document.getElementById('ssErr').innerHTML = "<br/>this space is empty";
  document.forms.fcg.ss.focus();
  return false;
}
else{
  document.getElementById('ssErr').innerHTML = "";
}

}


 function validatepn(){
   let namepattern = /^[A-Za-z\s]*$/;
   let pn = document.forms.fcg.pn.value;
   if(pn){
   let x = namepattern.test(pn);
  if(x==false){
     document.getElementById('nameErr').innerHTML = "<br/>your name can only contain letters and whitespaces";
     document.forms.fcg.pn.focus();
   }
 }
   else{
     document.getElementById('nameErr').innerHTML = "";
   }
 }




}

catch(err){
  window.alert(err.message);
}
