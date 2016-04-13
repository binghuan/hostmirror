console.log("+++");

var date = new Date();
var hostName = location.protocol + "//" + location.hostname;
var imgFileNameArray = ["img.png", "img1440x900.png", "img1280x800.png", "img960x540.png", "img720x450.png"];
var imgFileName = "img.png";
imgFileName = imgFileNameArray[1];
$("#switch_img_0").attr("class", "ui-btn-active");


function resizeImg() {
    $("#remoteimg").height = $(window).height()- $("#footer").height()*2;
    $("#remoteimg").width = $(window).width();
    console.log("setup img height: " + $(window).height());
}

$(window).resize(function() {
    resizeImg();
});

$("document").ready(function() {
    console.log("Document is ready");
    resizeImg();

    var fileName = imgFileName + "?" + Math.random();
    //console.log("ready to load: " + fileName);
    $("#remoteimg").attr("src", hostName + "/" + fileName);
    $("#remoteimg").load(function() {
        // Handler for .load() called.
        fileName = imgFileName + "?" + Math.random();
        console.log("image is loaded");
        $("#remoteimg").attr("src", hostName + "/" + fileName);
        $("#remoteimg").attr("width", $(window).width());
        $("#remoteimg").attr("height", $(window).height()- $("#footer").height()*2);
    });
    $("#switch_img_1").click(function() {
        imgFileName = imgFileNameArray[1];
        console.log("change file: " + imgFileName);
        resetActiveResolution();
        $("#switch_img_1").attr("class", "ui-btn ui-btn-active");
    });
    $("#switch_img_2").click(function() {
        imgFileName = imgFileNameArray[2];
        console.log("change file: " + imgFileName);
        resetActiveResolution();
        $("#switch_img_2").attr("class", "ui-btn ui-btn-active");
    });
    $("#switch_img_3").click(function() {
        imgFileName = imgFileNameArray[2];
        console.log("change file: " + imgFileName);
        resetActiveResolution();
        $("#switch_img_3").attr("class", "ui-btn ui-btn-active");
    });
    $("#switch_img_4").click(function() {
        imgFileName = imgFileNameArray[3];
        console.log("change file: " + imgFileName);
        resetActiveResolution();
        $("#switch_img_4").attr("class", "ui-btn ui-btn-active");
    });
});

function resetActiveResolution() {

    $("#switch_img_1").attr("class", "ui-btn");
    $("#switch_img_2").attr("class", "ui-btn");
    $("#switch_img_3").attr("class", "ui-btn");
    $("#switch_img_4").attr("class", "ui-btn");
    resizeImg();
}

console.log("---");
