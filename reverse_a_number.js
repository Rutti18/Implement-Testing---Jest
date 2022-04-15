reverse_a_number(349212);
function reverse_a_number(data)
{
    x = data+'';
    var reversed = x.split("").reverse().join("");
    return parseInt(reversed);
}


module.exports = reverse_a_number;