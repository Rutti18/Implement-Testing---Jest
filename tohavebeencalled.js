function makeUnique() {
    var str ='test';
    var uniqueStr =  String.prototype.concat(...new Set(str))
}

makeUnique();

module.exports  = makeUnique;