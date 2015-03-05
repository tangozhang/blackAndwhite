/**
 * Created by thunderflash on 2015/3/4.
 */
var Data = (function () {
    function Data() {
    }
    Data.getRectWidth = function () {
        if (Data._rectwidth == 0) {
            Data._rectwidth = egret.MainContext.instance.stage.stageWidth / 4;
        }
        return Data._rectwidth;
    };
    Data.getRectRow = function () {
        if (Data._rectheight == 0) {
            Data._rectheight = Math.ceil(Data.getStageHeight() / Data.getRectWidth()) + 1;
        }
        return Data._rectheight;
    };
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    Data._rectwidth = 0;
    Data.score = 0;
    Data._rectheight = 0;
    return Data;
})();
Data.prototype.__class__ = "Data";
