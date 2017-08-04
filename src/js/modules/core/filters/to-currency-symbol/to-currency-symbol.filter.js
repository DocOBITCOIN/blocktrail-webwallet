(function () {
    "use strict";

    angular.module("blocktrail.core")
        .filter("toCurrencySymbol", toCurrencySymbol);

    function toCurrencySymbol(Currencies, CONFIG) {
        return function(input) {
            if (typeof Currencies.currencies[input] === "undefined") {
                if (input === 'BTC') {
                    return '฿';
                }
                return input;
            } else {
                return Currencies.currencies[input].symbol || input;
            }
        };
    }

})();
