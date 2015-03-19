// console.log("HELLO WORLD");

var argv = Array.prototype.slice.call(process.argv, 0)
console.log(argv);

var args = argv.slice(2);
var sum = 0;
for (var i=0, len=args.length; i<len; i++) {
    sum += ~~args[i];
}

console.log(sum);