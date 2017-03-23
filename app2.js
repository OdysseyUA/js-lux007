/**
 * Created by red6 on 3/16/2017.
 */
'use strict';

(function () {
    function f() {
        for (var i = 0, result = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        console.log(result / arguments.length);
    }

    f(1, 2, 3);


    //  For the array m = [1,2,3], count arithmetic average of its elements using your brand new function f().
    //  Hint: use apply.
    var m = [1, 2, 3];
    f.apply(this, m);
    //f.call(this, m.);


    console.log('==========================');

    function makeShout() {
        var phrase = "Wassup!";
        var shout = function () {
            console.log(phrase);
        };
        phrase = "Ready!";
        return shout
    }

    var shout = makeShout();
    // what is the output?
    shout();


    console.log('==========================');


    //  sum(1)(3) = 4.
    //  Hint: return function.
    function sum(a) {

        return function (b) {
            return a + b;
        }

    }

    console.log(sum(4)(3));


    console.log('==========================');


    function makeProperty(o, name, predicate) {
        var value;
        o["get" + name] = function () {
            return value;
        };

        o["set" + name] = function (v) {
            if (predicate && !predicate(v))
                throw "set" + name + ": invalid value " + v;
            else
                value = v;
        };
    }


    var o = {};
    makeProperty(o, "Name", function(x) { return typeof x == "string"; });
    o.setName("Frank");
    console.log(o.getName());
    o.setName(0);

})();
