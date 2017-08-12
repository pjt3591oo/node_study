/**
 * Created by bagjeongtae on 2017. 8. 12..
 */

function a(p1){
    this.a = function() {
        return this.b;
    };
    this.b = p1;
}

let b = new a(100);
console.log(b);