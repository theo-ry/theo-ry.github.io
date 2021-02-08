$(function () {

    //    var prevScrollpos = window.pageYOffset;
    //    window.onscroll = function () {
    //        var currentScrollPos = window.pageYOffset;
    //        if (prevScrollpos > currentScrollPos) {
    //            $(".nav").css("top", "0");
    //        } else {
    //            $(".nav").css("top", "-50px");
    //        }
    //        prevScrollpos = currentScrollPos;
    //    }


    const words = ["A Web Designer", "A Web Developer", "A UI & UX Designer"];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function () {
            if (word.length > 0) {
                document.getElementById('word').innerHTML += word.shift();
            } else {
                deletingEffect();
                return false;
            };
            timer = setTimeout(loopTyping, 200);
        };
        loopTyping();
    };

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function () {
            if (word.length > 0) {
                word.pop();
                document.getElementById('word').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    };

    typingEffect();

});
