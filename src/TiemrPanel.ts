/**
 * Created by thunderflash on 2015/3/4.
 */
class TimerPanel extends egret.Sprite
{
    public constructor()
    {
        super();
        this.draw();
        this.createTimer();
    }
    private _timer:egret.Timer;
    private _txt:egret.TextField;
    private draw()
    {
        this._txt = new egret.TextField();
        this._txt.width = egret.MainContext.instance.stage.stageWidth;
        this._txt.y = 100;
        this._txt.textColor = 0xff0000;
        this._txt.textAlign = egret.HorizontalAlign.CENTER;
        this._txt.text = "20'00''";
        this.addChild(this._txt);
    }
    private createTimer()
    {
        this._timer = new egret.Timer(1000,20);
        this._timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerCom,this);

    }
    private onTimer()
    {
        this._txt.text = this._timer.repeatCount - this._timer.currentCount()+"'00''";
    }
    private onTimerCom()
    {
        this._txt.text = "00'00''";
        this.dispatchEventWith("gameOver");
    }
    public start()
    {
        this._txt.text = "20'00''";
        this._timer.reset();
        this._timer.start();
    }
    public stop()
    {
        this._timer.stop();
    }
}
