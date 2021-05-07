var canvas=new fabric.Canvas('myCanvas');
blockimgwidth=30;
blockimgheight=30;
player_x=10;
player_y=10;
var player_object=""

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
};
function new_Image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimgobject=Img;
        blockimgobject.scaleToWidth(blockimgwidth);
        blockimgobject.scaleToHeight(blockimgheight);
        blockimgobject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockimgobject);
        
    });
};

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey==true && key_pressed=='80'){
        blockimgwidth=blockimgwidth+10;
        blockimgheight=blockimgheight+10;
        console.log("Shift + P Key is pressed");
        
   document.getElementById("current_width").innerHTML=blockimgwidth;
   document.getElementById("current_height").innerHTML=blockimgheight;
 }

 if(e.shiftKey==true && key_pressed=='77'){
    blockimgwidth=blockimgwidth-10;
    blockimgheight=blockimgheight-10;
    console.log("Shift + M Key is pressed");
    
document.getElementById("current_width").innerHTML=blockimgwidth;
document.getElementById("current_height").innerHTML=blockimgheight;
}

if(key_pressed=='38'){
    up();
    console.log("Up");
}
if(key_pressed=='37'){
    left();
    console.log("Left");
}
if(key_pressed=='39'){
   right();
    console.log("Right");

}
if(key_pressed=='40'){
    down();
    console.log("Down");
}


if(key_pressed=='87'){
    new_Image('wall.jpg');
    console.log("Wall");
}
if(key_pressed=='71'){
    new_Image('ground.png');
    console.log("Ground");
}
if(key_pressed=='76'){
    new_Image('light_green.png');
    console.log("Light Green");
}
if(key_pressed=='84'){
    new_Image('trunk.jpg');
    console.log("t-Trunk");
}
if(key_pressed=='82'){
    new_Image('roof.jpg');
    console.log("r-Roof");
}
if(key_pressed=='89'){
    new_Image('yellow_wall.png');
    console.log("y-yellow Wall");
}
if(key_pressed=='68'){
    new_Image('dark_green.png');
    console.log("d-Dark green");
}
if(key_pressed=='85'){
    new_Image('unique.png');
    console.log("u-Unique");
}
if(key_pressed=='67'){
    new_Image('cloud.jpg');
    console.log("c-Cloud");
}
}

function up (){
    if(player_y>=0){
        player_y=player_y-blockimgheight;
        console.log("Block Image Height= "+blockimgheight);
        console.log("When Up Arrow Key Is Pressed X="+player_x+" Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down (){
    if(player_y<=600){
        player_y=player_y+blockimgheight;
        console.log("Block Image Height= "+blockimgheight);
        console.log("When Down Arrow Key Is Pressed X="+player_x+" Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left (){
    if(player_x>=0){
        player_x=player_x-blockimgwidth;
        console.log("Block Image Width= "+blockimgwidth);
        console.log("When Left Arrow Key Is Pressed X="+player_x+" Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right (){
    if(player_x<=800){
        player_x=player_x+blockimgwidth;
        console.log("Block Image Width= "+blockimgwidth);
        console.log("When Right Arrow Key Is Pressed X="+player_x+" Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

