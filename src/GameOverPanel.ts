/**
 * Created by thunderflash on 2015/3/4.
 */
class GameOverPanel extends egret.Sprite
{
    public constructor()
    {
        super();
        this.draw();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.showText,this);
    }
    private _txt:egret.TextField;
    private draw()
    {
        var w = egret.MainContext.instance.stage.stageWidth;
        var h = egret.MainContext.instance.stage.stageHeight;

        this.graphics.beginFill(0xcccccc,0.5);
        this.graphics.drawRect(0,0,w,h);
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
        btn.graphics.drawRect(0,0,100,50);
        btn.graphics.endFill();
        btn.width = 100;
        btn.height = 50;
        btn.x = (w- btn.width)/2;
        btn.x = (h- btn.height)/2;
        this.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
    }
    private showText()
    {
        this._txt.text = "我努力点击"+Data.score+"步";
    }
    private startGame()
    {
        this.parent.removeChild(this);
        this.dispatchEventWith("startGame")
    }
}
