var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by thunderflash on 2015/3/4.
 */
var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        _super.call(this);
        this.draw();
        this.createTimer();
    }
    TimerPanel.prototype.draw = function () {
        this._txt = new egret.TextField();
        this._txt.width = egret.MainContext.instance.stage.stageWidth;
        this._txt.y = 100;
        this._txt.textColor = 0xff0000;
        this._txt.textAlign = egret.HorizontalAlign.CENTER;
        this._txt.text = "20'00''";
        this.addChild(this._txt);
    };
    TimerPanel.prototype.createTimer = function () {
        this._timer = new egret.Timer(1000, 20);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    };
    TimerPanel.prototype.onTimer = function () {
        this._txt.text = this._timer.repeatCount - this._timer.currentCount() + "'00''";
    };
    TimerPanel.prototype.onTimerCom = function () {
        this._txt.text = "00'00''";
        this.dispatchEventWith("gameOver");
    };
    TimerPanel.prototype.start = function () {
        this._txt.text = "20'00''";
        this._timer.reset();
        this._timer.start();
    };
    TimerPanel.prototype.stop = function () {
        this._timer.stop();
    };
    return TimerPanel;
})(egret.Sprite);
TimerPanel.prototype.__class__ = "TimerPanel";
