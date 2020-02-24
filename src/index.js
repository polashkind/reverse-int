module.exports = function reverse (n) {
    let s = String(n);
    s = s.split('').reverse().join('');
    return parseInt(s, 10);
}
