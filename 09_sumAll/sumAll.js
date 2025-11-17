const sumAll = function(n1, n2) {
    let start = Math.min(n1, n2)
    let end = Math.max(n1, n2)
    res = 0

    for (let i = start; i <= end; i++) {
        res += i
    }

    return res
};

// Do not edit below this line
module.exports = sumAll;
