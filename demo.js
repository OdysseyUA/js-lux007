/**
 * Created by red6 on 3/16/2017.
 */


(function () {

    var ttt = function(){console.log("---> " + this.getName()()); };

    function Cat(name) {
        var _name = name;

        function getCatName() {
            return _name;
        }
        this.getName = function() {
            return getCatName;
        };

        function setName() {
            _name = name;
        }


    }

    var cat = new Cat('Tom');

    ttt.call(cat);
    ttt.call(new Cat("Garfild"));

})();