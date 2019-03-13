module.exports = function makeExchange(currency) {
    let obj = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0
    };
    switch (true) {
        case (currency <= 0) : obj = {};
          break;
        case (currency > 10000) : obj = {"error" : "You are rich, my friend! We don't have so much coins for exchange"};
          break;
        case (currency > 0 && currency <= 10000) :
        obj.H = Math.floor(currency / 50);
        currency = currency - obj.H * 50;
        obj.Q = Math.floor(currency / 25);
        currency = currency - obj.Q * 25;
        obj.D = Math.floor(currency / 10);
        currency = currency - obj.D * 10;
        obj.N = Math.floor(currency / 5);
        currency = currency - obj.N * 5;
        obj.P = currency / 1;

        for (var elem in obj) {
            if (obj[elem] == 0) {
                delete obj[elem];
            }
        }
      }
      return obj;
}
