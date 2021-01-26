let imagesPath = "images/projects/";
let imagesP1 = [imagesPath+"storage-system/storage-system-1.jpeg",imagesPath+"storage-system/storage-system-2.jpeg",imagesPath+"storage-system/storage-system-3.jpeg"];
let imagesP2 = [imagesPath+"iot-control-panel/iot-control-panel-1.jpeg"];
let imagesP3 = [imagesPath+"iot-imu-unity/iot-imu-unity-1.jpeg",imagesPath+"iot-imu-unity/iot-imu-unity-2.jpeg"];
let imagesP4 = [imagesPath+"autonomous-vehicle/autonomous-vehicle-1.jpeg",imagesPath+"autonomous-vehicle/autonomous-vehicle-2.jpeg"];
let imagesP5 = [imagesPath+"color-game/color-game-1.jpeg",imagesPath+"color-game/color-game-2.jpeg",imagesPath+"color-game/color-game-3.jpeg"];
let imagesP6 = [imagesPath+"rivet-analyzer/rivet-analyzer-1.jpeg",imagesPath+"rivet-analyzer/rivet-analyzer-2.jpeg",imagesPath+"rivet-analyzer/rivet-analyzer-3.jpeg"];

let x = 0;

function displayNextImage(images, project) {
    $(project).attr("src", images[x]);
}

function incrementCounter(){
    let length = Math.max(imagesP1.length,imagesP2.length,imagesP3.length,imagesP4.length,imagesP5.length,imagesP6.length);
    if(x >= length-1){
        x=0;
    } else {
        x++;
    }
}

$( document ).ready(function() {
    let timer = 2000;
    setInterval(() => incrementCounter(), timer);
    setInterval(() => displayNextImage(imagesP1,"#storage-system"), timer);
    setInterval(() => displayNextImage(imagesP2,"#iot-control-panel"), timer);
    setInterval(() => displayNextImage(imagesP3,"#iot-imu-unity"), timer);
    setInterval(() => displayNextImage(imagesP4,"#autonomous-vehicle"), timer);
    setInterval(() => displayNextImage(imagesP5,"#color-game"), timer);
    setInterval(() => displayNextImage(imagesP6,"#rivet-analyzer"), timer);
});