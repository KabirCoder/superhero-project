var canvas = new fabric.Canvas('myCanvas')
var width_of_the_block=50;
var height_of_the_block=50;
var player_x=10;
var player_y=10;
var player_object="";
var block_image_object="";
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
}
    function new_image(get_image){

        fabric.Image.fromURL(get_image,function(Img){
            block_image_object=Img;
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top:player_y,
                left:player_x
            });
            canvas.add(block_image_object);
    
        });
    }
windows.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPress=e.keyCode;
    console.log(keyPress);
}
if (keyPressed=="70"){
    new_image("hulk_face.png");
    console.log("F");
}
if (keyPressed=="66"){
    new_image("ironman_body.png");
    console.log("B");
    if (keyPressed=="76"){
        new_image("hulk_legs.png");
        console.log("L");
    }
    if (keyPressed=="82"){
        new_image("spiderman_right_hand.png");
        console.log("R");
    }
    if (keyPressed=="72"){
        new_image("ironman_left_hand.png");
        console.log("H");
    }
    
    if (keyPressed=="38"){
        up();
        console.log("up");
    }
    if (keyPressed=="40"){
        down();
        console.log("down");
    }
    if (keyPressed=="37"){
        left();
        console.log("left");
    }
    if (keyPressed=="39"){
        right();
        console.log("right");
    }
    }


