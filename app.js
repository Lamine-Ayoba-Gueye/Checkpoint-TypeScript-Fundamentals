var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Vehicule = /** @class */ (function () {
    function Vehicule() {
    }
    Vehicule.prototype.start = function () {
        console.log("Car engine started");
    };
    return Vehicule;
}());

var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(make, model, year) {
        var _this = _super.call(this) || this;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    return Voiture;
}(Vehicule));

var maVoiture = new Voiture("Toyota", "Corolla", 2020);
maVoiture.start();
