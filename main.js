

var canvas = new fabric.Canvas("myCanvas")
var block_width = 30
var block_height = 30
var player_x = 10
var player_y = 10
var player_object = ""
var block_img = "";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
             top:player_y,
             left:player_x
        })

        canvas.add(player_object)
        })
}


    function block_draw(block){
        fabric.Image.fromURL(block , function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left:player_x
            
        
        })
        canvas.add(block_object);
        })
    }


    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
var key_pressed = e.keyCode;

console.log(key_pressed);


if (e.shiftKey == true && key_pressed == '80'){
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if (e.shiftKey == true && key_pressed == '77'){
    block_height = block_height - 10;
    block_width = block_width - 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}
if(key_pressed == '70'){
    block_draw('ironman_face.png');
    console.log("f");
}
if(key_pressed == '66'){
    block_draw('spiderman_body.png');
    console.log("b");
}
if(key_pressed == '76'){
  block_draw('hulk_legs.png');
  console.log('l');
}
if(key_pressed == '82'){
    block_draw('thor_right_hand.png');
    console.log("r")
}
if(key_pressed == "72"){
    block_draw('captain_america_left_hand.png');
    console.log("h");
}
if(key_pressed == '38'){
    up()
    console.log("up");
}
if(key_pressed == '40'){
    down()
    console.log("down");
}
if(key_pressed == '37'){
    left()
    console.log("left");
}
if(key_pressed == '39'){
    right()
    console.log("right")
}
    }


    function left(){
        if (player_x > 0){
            player_x = player_x - block_width;
            console.log(player_x)
            canvas.remove(player_object)
            player_update();
        }
    }
    function right(){
        if (player_x < 850){
             player_x = player_x + block_width;
             console.log(player_x)
             canvas.remove(player_object)
             player_update();
        }
    }
    function up(){
        if (player_y > 0) {
            player_y = player_y - block_height;
            canvas.remove(player_object)
            player_update()
        }
    }
    function down(){
        if (player_y < 450){
            player_y = player_y + block_height;
            canvas.remove(player_object);
            player_update();
        }
    }
