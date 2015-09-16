var image4;

//build an array with links, labels and label x, y
var buildings = [
//experiments with autolookup by concatinating link
//{link:'http://en.wikipedia.org/wiki/' + currentBuilding.name, name:'1 New York Plaza', x:50, y:115}, //0
//{link:'http://en.wikipedia.org/wiki/' +buildings[currentBuilding].name, name:'1 New York Plaza', x:50, y:115}, //0

{link:'http://en.wikipedia.org/wiki/1_New_York_Plaza', name:'1 New York Plaza', x:50, y:115}, //0
{link:'http://www.125broadstr.com/thebuilding.html', name:'125 Broad Street', x:130, y:135}, //1
{link:'http://en.wikipedia.org/wiki/55_Water_Street', name:'55 Water Street', x:260, y:95}, //2
{link:'http://observer.com/2008/01/a-financial-services-lease-bank-of-new-york-mellon-signs-big-renewal-downtown/', name:'32 Old Slip', x:450, y:110},//3
{link:'http://www.propertyshark.com/mason/Property/665509/111-Wall-St-New-York-NY-10005/', name:'111 Wall Street', x:515, y:195},//4
{link:'http://en.wikipedia.org/wiki/120_Wall_Street', name:'120 Wall Street', x:625, y:180},//5
{link:'http://en.wikipedia.org/wiki/1_world_trade_center', name:'1 World Trade Center', x:625, y:60},//6
{link:'http://www.moinian.com/property/180-maiden-lane/', name:'180 Maden Lane', x:700, y:130},//7
{link:'http://www.crainsnewyork.com/article/20140326/BLOGS03/140329914/80-south-st-in-contract#', name:'80 South Street', x:775, y:300},//8

{link:'http://http://www.crainsnewyork.com/article/20130802/REAL_ESTATE/130809972', name:'175 Water Street', x:775, y:185},//9
{link:'http://www.nyc-architecture.com/SCC/SCC005.htm', name:'199 Water Street', x:855, y:180},//10
{link:'http://en.wikipedia.org/wiki/8_Spruce_Street', name:'8 Spruce Street', x:925, y:104},//11

];
// var html;
// html.style("cursor:e-resize");
//link.style.cursor = "not-allowed";

function preload(){
image4 = loadImage("skyline.jpg");
}



function setup() {
  var canvas = createCanvas(1024, 382);  
  image(image4, 0, 0 ); 
  label = createHTML("");
  label.id("linkLabel");
  label.style("font:18px arial; color:rgb(255,255,255); cursor(e-resize)"); 

  var title = createHTML("Manhattan Skyline from Brooklyn Bridge Park");
  title.position(250, 20);
  title.style("font:24px arial; color:rgb(255,255,255); letter-spacing:2px"); 
  
  var directions = createHTML("Mouse over buildings to find out which is which. Click on the buildings to learn more about them.");
  title.position(250, 35);
  title.style("font:18px arial; color:rgb(255,255,255); letter-spacing:2px"); 

  var inquire = createHTML('<a id="inquiries" href="mailto:as4092@nyu.edu">inquiries</a>')
   inquire.position(975, 370);
   inquire.style("font:14px arial;"); 
  document.getElementById("inquiries").style.cursor = "e-resize";
  document.getElementById("inquiries").style.color= "rgb(0,0,0)";



}



function mousePressed() {

if(currentBuilding != -1){

window.location.href = buildings[currentBuilding].link,"_blank";




//popup
//window.open.href("buildings[currentBuilding].link");

//function popUp(){
//window.location.href = buildings[currentBuilding].link;
//}

//window.open((buildings[currentBuilding].link) + "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
}
}
function showBuildingLabel(index){
//label.html('<a href="' + buildings[currentBuilding].link +  '"target="_blank">' + buildings[index].name + '</a>');

label.html(buildings[index].name);
label.position(buildings[index].x, buildings[index].y);
label.show();
currentBuilding = index;
}

function draw() {
cursor(HAND); //http://p5js.org/reference/#get/Environment/cursor

if ((mouseX>50) && (mouseX<120) && (mouseY>150)){ 
showBuildingLabel(0);

}else if ((mouseX>130) && (mouseX<230) && (mouseY>150)){ 
showBuildingLabel(1);

}else if ((mouseX>260) && (mouseX<450) && (mouseY>100)){
showBuildingLabel(2);


}else if ((mouseX>450) && (mouseX<500) && (mouseY>155)){
showBuildingLabel(3);

}else if ((mouseX>525) && (mouseX<600) && (mouseY>200)){
showBuildingLabel(4);

}else if ((mouseX>650) && (mouseX<700) && (mouseY>200)){ 
showBuildingLabel(5);

}else if ((mouseX>650) && (mouseX<690) && (mouseY<200) && (mouseY>50)){ 
showBuildingLabel(6);

}else if ((mouseX>700) && (mouseX<770) && (mouseY>135)){ 
showBuildingLabel(7);

}else if ((mouseX>805) && (mouseX<890) && (mouseY>305)){
showBuildingLabel(8);

}else if ((mouseX>805) && (mouseX<875) && (mouseY<305)){ 
showBuildingLabel(9);

}else if ((mouseX>880) && (mouseX<950) && (mouseY<305)){
showBuildingLabel(10);

}else if ((mouseX>950) && (mouseX<1000) && (mouseY>110) && (mouseY<350)){
showBuildingLabel(11);

}else{
label.hide();
cursor(ARROW);
currentBuilding = -1;

//document.getElementById("linkLabel").style.cursor = "e-resize";
}




}



