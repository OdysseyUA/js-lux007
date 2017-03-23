/**
 * Created by red6 on 3/16/2017.
 */


(function () {

    function Cat(name) {
        var _name = name;

        this.setName = function(name) {
            _name = name;
        };

        this.getName = function() {
            return _name;
        }
    }


    function IdGenerator() {
        var id = 0;

        return {

            //id: 0,

            getNext: function() {
                return id++;
            },

            reset: function(){
                id = 0;
            }
        }

    }

    var gen = new IdGenerator();
    var gen2 = new IdGenerator();


    function generator() {
        var id=0;
        return function () { return id++; }
    }
    var gen = generator();

})();