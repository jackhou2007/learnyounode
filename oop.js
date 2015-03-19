// var Person = function () {
//   console.log('instance created');
// };

// var person1 = new Person();
// var person2 = new Person();

// inherit
var Person = function (firstName) {
    this.firstName = firstName;
}

var Student = function (firstName, subject) {
    Person.call(this, firstName);
    this.subject = subject;
}

Student.prototype = createObject(Person);
Student.prototype.constructor = Student;
Student.prototype.sayName = function () {
    console.log(this.firstName);
}

Student.prototype.saySubject = function () {
    console.log(this.subject);
}

var student = new Student('zhangsan', 'activity');
student.sayName();
student.saySubject();
function createObject(Proto) {
    var Sub = function () {};
    Sub.prototype = Proto;
    return new Sub();
}

if (typeof Object.create !== 'function') {
    Object.create = (function () {
        var temp = function () {};
        return function (prototype) {
            if (arguments.length > 2) {
                throw Error("don't support two params!");
            }

            if (typeof proto !== 'object') {
                throw TypeError('Argument must a object!');
            }

            temp.prototype = prototype;
            var result = new temp();
            temp.prototype = null;
            return result;
        }
    })();
}