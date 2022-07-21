let imagesPath = "images/projects/";
let imagesP1 = [imagesPath + "storage-system/storage-system-1.jpeg", imagesPath + "storage-system/storage-system-2.jpeg", imagesPath + "storage-system/storage-system-3.jpeg"];
let imagesP2 = [imagesPath + "sales-system/sales-system-1.jpeg", imagesPath + "sales-system/sales-system-2.jpeg", imagesPath + "sales-system/sales-system-3.jpeg"];
let imagesP3 = [imagesPath + "explosions-in-the-sky/explosions-in-the-sky-1.jpeg", imagesPath + "explosions-in-the-sky/explosions-in-the-sky-2.jpeg"];
let imagesP4 = [imagesPath + "iot-imu-unity/iot-imu-unity-1.jpeg", imagesPath + "iot-imu-unity/iot-imu-unity-2.jpeg"];
let imagesP5 = [imagesPath + "forgotten-tomb/forgotten-tomb-1.jpeg", imagesPath + "forgotten-tomb/forgotten-tomb-2.jpeg"];
let imagesP6 = [imagesPath + "color-game/color-game-1.jpeg", imagesPath + "color-game/color-game-2.jpeg", imagesPath + "color-game/color-game-3.jpeg"];

let x = 0;

function displayNextImage(images, project) {
    $(project).attr("src", images[x]);
}

function incrementCounter() {
    let length = Math.max(imagesP1.length, imagesP2.length, imagesP3.length, imagesP4.length, imagesP5.length, imagesP6.length);
    if (x >= length - 1) {
        x = 0;
    } else {
        x++;
    }
}

$(document).ready(function () {
    let timer = 2000;
    setInterval(() => incrementCounter(), timer);
    setInterval(() => displayNextImage(imagesP1, "#storage-system"), timer);
    setInterval(() => displayNextImage(imagesP2, "#sales-system"), timer);
    setInterval(() => displayNextImage(imagesP3, "#explosions-in-the-sky"), timer);
    setInterval(() => displayNextImage(imagesP4, "#iot-imu-unity"), timer);
    setInterval(() => displayNextImage(imagesP5, "#forgotten-tomb"), timer);
    setInterval(() => displayNextImage(imagesP6, "#color-game"), timer);


    $('a').attr('target', '_blank');
    $('a').attr('rel', 'noreferrer noopener');
    $('.closedA').attr('target', '_self');
    $('.closedA').attr('rel', 'tag');
});

