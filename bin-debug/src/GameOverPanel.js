var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by thunderflash on 2015/3/4.
 */
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        _super.call(this);
        this.draw();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.showText, this);
    }
    GameOverPanel.prototype.draw = function () {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;
        this.graphics.beginFill(0xcccccc, 0.5);
        this.graphics.drawRect(0, 0, w, h);
        this.graphics.endFill();
        this.touchEnabled = false;
        this.touchChildren = true;
        this._txt = new egret.TextField();
        this._txt.width = w;
        this._txt.y = 100;
        this._txt.textColor = 0xff0000;
        this._txt.textAlign = egret.HorizontalAlign.CENTER;
        this._txt.text = "";
        this.addChild(this._txt);
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0xffff00);
        btn.graphics.drawRect(0, 0, 100, 50);
        btn.graphics.endFill();
        btn.width = 100;
        btn.height = 50;
        btn.x = (w - btn.width) / 2;
        btn.x = (h - btn.height) / 2;
        this.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    GameOverPanel.prototype.showText = function () {
        this._txt.text = "我努力点击" + Data.score + "步";
    };
    GameOverPanel.prototype.startGame = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("startGame");
    };
    return GameOverPanel;
})(egret.Sprite);
GameOverPanel.prototype.__class__ = "GameOverPanel";
