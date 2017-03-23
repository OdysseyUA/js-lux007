/**
 * Created by red6 on 3/22/2017.
 */


(function() {

    //###Example 1 (Functions, Closure)
    function ttt() {
        var ntp_Qe = 100500;

        return function add(){
            return ntp_Qe++;
        }
    }

    var fn = ttt();

    console.dir(fn);

    //###Example 2 (Objects)
    function Cat(name) {
        var _name = name;   //  private
        this.age = 10;      //  public

        this.getName = function() {
            return _name;
        }
    }

    //  General and do not have access to the private properties (e.g. _name)
    //  get/set should be placed in the body of the object
    Cat.prototype.seyHello = function(){
        console.log('Miau');
    };

    var data = [];

    var count = 10;
    while (count-- > 0){
        data.push(new Cat('Garfild'));
    }

    var c = new Cat('Tom');
    c.seyHello();
    console.dir(c);

})();