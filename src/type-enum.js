"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#ffffff";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.black);
console.log(DesignColors.white);
var StatusPermmision;
(function (StatusPermmision) {
    StatusPermmision[StatusPermmision["administrador"] = 0] = "administrador";
    StatusPermmision[StatusPermmision["usuario"] = 1] = "usuario";
    StatusPermmision[StatusPermmision["suporte"] = 2] = "suporte";
})(StatusPermmision || (StatusPermmision = {}));
console.log(StatusPermmision.administrador);
console.log(StatusPermmision.usuario);
console.log(StatusPermmision.suporte);
