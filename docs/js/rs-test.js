setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-layout").style.display = "block";
}, 0);

setTimeout(function() {
    console.log("zoom")
    $(".video-test").addClass("video-test-show")
    $(".item-hire").addClass("hire-zoom")
}, 1500)

setTimeout(function() {
    $(".m5text").css("display", "none")
}, 8000)

$(".list-cauhoi").addClass("display-block")
$(".video-play").addClass("display-none")

$(".oj24").click(function(event) {
    event.stopPropagation()
    console.log("zoom")
    $(".video-test").addClass("video-test-show")
    $(".item-hire").addClass("hire-zoom")
})

var daDung = 0;

function xemvideo() {
    console.log("video")
    $(".list-cauhoi").removeClass("display-block")
    $(".video-play").removeClass("display-none")
    $(".kq").removeClass("display-block")
    $(".video-play").get(0).play()
}


function tabCauhoi() {
    $(".list-cauhoi").addClass("display-block")
    $(".video-play").addClass("display-none")
}

function goLap() {
    $("#main-layout").addClass("layout-opacity-7")
    $("#loadingGoto").css("display", "flex")
    setTimeout(function() {
        window.location.href = 'list-lab.html'
    }, 600)
}

function chooseDA(causos, da) {

    if (causos == 1) {
        if($(".nhanch1-oj32").hasClass("chon-da"))
            return
        if (da == 1) {
            tls()
            $(".nhanch1-oj32").toggleClass("chon-da")
        }
        if (da == 2) {
            tld()
            daDung = daDung + 1
            $(".nhanch1-oj33").toggleClass("chon-da")
        }
        if (da == 3){
            tls()
            $(".nhanch1-oj34").toggleClass("chon-da")
        }

        setTimeout(function() {
            $(".rs-c1").css("opacity", 1);
        }, 800)

        setTimeout(function() {
            $("#cau1").hide()
            $("#cau2").show()
        }, 3000)
    } else if (causos == 2) {
        if($(".nhanch2-oj32").hasClass("chon-da"))
            return
        if (da == 1) {
            tls()
            $(".nhanch2-oj32").toggleClass("chon-da")
        }
        if (da == 2) {
            tls()
            $(".nhanch2-oj33").toggleClass("chon-da")
        }
        if (da == 3) {
            tld()
            daDung = daDung + 1
            $(".nhanch2-oj34").toggleClass("chon-da")
        }
        if (da == 4) {
            tls()
            $(".nhanch2-oj35").toggleClass("chon-da")
        }

        setTimeout(function() {
            $(".rs-c2").css("opacity", 1);
        }, 800)

        setTimeout(function() {
            $("#cau2").hide()
            $("#cau3").show()
        }, 3000)
    } else if (causos == 3) {
        if($(".nhanch3-oj32").hasClass("chon-da"))
            return
        if (da == 1) {
            tls()
            $(".nhanch3-oj32").toggleClass("chon-da")
        }
        if (da == 2) {
            tld()
            daDung = daDung + 1
            $(".nhanch3-oj33").toggleClass("chon-da")
        }
        if (da == 3) {
            tls()
            $(".nhanch3-oj34").toggleClass("chon-da")
        }
        if (da == 4){
            tls()
            $(".nhanch3-oj35").toggleClass("chon-da")
        }
        setTimeout(function() {
            $(".rs-c3").css("opacity", 1);
        }, 800)

        setTimeout(function() {
            showKq()
        }, 4000)
    } else {
        setTimeout(function() {
            showKq()
        }, 2000)
    }
}

function tld(){
    $(".audio")[0].play();
}

function tls(){
    $(".audio")[1].play();
}

function hoanthanh() {
    var datl = $(".chon-da");
    if (datl.length == 0) {
        Toastify({
            text: "Hoàn thành câu hỏi",
            duration: 1000,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            backgroundColor: "red",
        }).showToast();
    } else {
        setTimeout(function() {
            goEquipment()
        }, 3000)
    }

}

var video = document.getElementsByTagName('video')[0];
video.onended = function(e) {
    setTimeout(function() {
        goLap()
    }, 5000)
};


function showKq() {
    $(".list-cauhoi").removeClass("display-block")
    $(".kq").addClass("display-block")
    $(".video-play").addClass("display-none")
    $("#sodadung").append(daDung)
    console.log(daDung)
}