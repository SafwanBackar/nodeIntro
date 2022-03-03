function average(scores) {
    var sum = 0;
    scores.forEach(function (score) {
        sum += score;
    })
    var avg = sum / scores.length;
    var round = Math.ceil(avg)
    return round
}
var scores = [1, 2, 3]
console.log(average(scores))
var scores2 = [90, 85, 99, 75, 92]
console.log(average(scores))

