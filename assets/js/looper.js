let imagesPath = "images/projects/";
let imagesP1 = [imagesPath+"storage-system/storage-system-1.jpeg",imagesPath+"storage-system/storage-system-2.jpeg",imagesPath+"storage-system/storage-system-3.jpeg"];
let imagesP2 = [imagesPath+"iot-control-panel/iot-control-panel-1.jpeg"];
let imagesP3 = [imagesPath+"iot-imu-unity/iot-imu-unity-1.jpeg",imagesPath+"iot-imu-unity/iot-imu-unity-2.jpeg"];
let x = 0;

function displayNextImage(images, project) {
    $(project).attr("src", images[x]);
}
function incrementCounter(){
    if(x >= imagesP1.length-1){
        x=0;
    } else {
        x++;
    }
}

$( document ).ready(function() {
    setInterval(() => incrementCounter(), 2000);
    setInterval(() => displayNextImage(imagesP1,"#storage-system"), 2000);
    setInterval(() => displayNextImage(imagesP2,"#iot-control-panel"), 2000);
    setInterval(() => displayNextImage(imagesP3,"#iot-imu-unity"), 2000);
});