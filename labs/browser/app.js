/**
 * Created by red6 on 3/24/2017.
 */

var executor = true;

function timedCount() {
    var t = 0;
    while (executor) {
        setTimeout(function () {
            t++;
            document.getElementById('output').textContent = t;
        }, 1000);
    }
}

function stopCount(){
    executor = false;
}

