var Parser = function () {

};

Parser.prototype.parser = function (text) {
    var result = {};

    var lines = text.split('\n');
    lines.forEach(function (line) {
        var parts = line.split(' ');
        var letters = parts[1];
        var count = parseInt(parts[2]);

        if (!result[letters]) {
            result[letters] = 0;
        }

        result[letters] += count;
    });

    return result;
};

module.exports = Parser;