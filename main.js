canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var car1_width=120;
var car1_height=70;
var car_1_image="car1.png";
var car1_x=10;
var car1_y=10;

var car2_width=120;
var car2_height=70;
var car_2_image="car2.png";
var car2_x=10;
var car2_y=100;
 var background_image="racing.jpg";

function add() {
    background_img_tag=new Image();
    background_img_tag.onload=upload_background;
    background_img_tag.src=background_image;
    car1_img_tag=new Image();
    car1_img_tag.onload=upload_car1;
    car1_img_tag.src=car_1_image;

    car2_img_tag=new Image();
    car2_img_tag.onload=upload_car2;
    car2_img_tag.src=car_2_image;
}

function upload_background() {
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function upload_car1() {
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2() {
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown", my_keydown );
function my_keydown(e) {
    var key_press=e.keyCode;

    if (key_press=="38") {
    console.log("car1_up");
    car1_up();
    }

    if (key_press=="40") {
        console.log("car1_down");
        car1_down();
        }

        if (key_press=="37") {
            console.log("car1_left");
            car1_left();
            }
        
            if (key_press=="39") {
                console.log("car1_right");
                car1_right();
                }

                if (key_press=="87") {
                    console.log("car2_up");
                    car2_up();
                    }

                    if (key_press=="83") {
                        console.log("car2_down");
                        car2_down();
                        }
                        if (key_press=="65") {
                            console.log("car2_left");
                            car2_left();
                            }
        
                            if (key_press=="68") {
                                console.log("car2_right");
                                car2_right();
                                }
                                if (car1_x>700) {
                                    console.log("Car1 Won");
                                    document.getElementById('game_status').innerHTML="Car 1 Won !!";
                                }
                                    if (car2_x>700) {
                                        console.log("Car2 Won");
                                        document.getElementById('game_status').innerHTML="Car 2 Won !!";
                                    }
}
function car1_up() {
    if (car1_y>=0) {
        car1_y=car1_y-10;
    console.log(car1_x,car1_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}
function car1_down() {
    if (car1_y<=500) {
        car1_y=car1_y+10;
    console.log(car1_x,car1_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}


function car1_left() {
    if (car1_x>=0) {
        car1_x=car1_x-10;
    console.log(car1_x,car1_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function car1_right() {
    if (car1_x<=700) {
        car1_x=car1_x+10;
    console.log(car1_x,car1_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}


function car2_up() {
    if (car2_y>=0) {
        car2_y=car2_y-10;
    console.log(car2_x,car2_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}
function car2_down() {
    if (car2_y<=500) {
        car2_y=car2_y+10;
    console.log(car2_x,car2_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}


function car2_left() {
    if (car2_x>=0) {
        car2_x=car2_x-10;
    console.log(car2_x,car2_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function car2_right() {
    if (car2_x<=700) {
        car2_x=car2_x+10;
    console.log(car2_x,car2_y); 
    upload_background();
    upload_car1();
    upload_car2();
    }
}


