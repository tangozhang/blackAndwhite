/**
 * Created by thunderflash on 2015/3/4.
 */
class  Game
{
    private _root:egret.DisplayObjectContainer;
    public constructor(root:egret.DisplayObjectContainer)
    {

        this._root = root;
        this.createGroupsRect();
        this.createTimer();
        this.startGame();
    }
    private overPanel:GameOverPanel;
    private gameOver()
    {

        this._timerPanel.stop();
        if(this.overPanel == null)
        {

            this.overPanel = new GameOverPanel();
            this.overPanel.addEventListener("startGame",this.startGame,this);

        }
        this._root.addChild(this.overPanel);
    }
    private _timerPanel:TimerPanel;
    private createTimer()
    {

        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener("gameOver",this.gameOver,this);
        this._root.addChild(this._timerPanel);
    }
    private startGame()
    {

        Data.score = 0;
        for(var i=0;i<this._row;i++)
        {

            this._rectGroup[i].init();
            this._rectGroup[i].y = Data.getRectWidth()*i;
            this._rectGroup[i].currentRow = i;
            if(i!=(this._row-1))
            {
                this._rectGroup[i].createBlackRect();
            }

        }
        this._timerPanel.start();
    }
    private _row:number;
    private _rectRoot:egret.Sprite;
    private _rectGroup:Array<GroupRect>;
    private createGroupsRect()
    {

        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroup = [];
        this._row =Data.getRectRow();

        var groupRect:GroupRect;
        for(var i=0;i<this._row;i++)
        {
            groupRect = new GroupRect();
            groupRect.addEventListener("gameOver",this.gameOver,this);
            groupRect.addEventListener("clickRight",this.clickRight,this);
            this._rectGroup.push(groupRect);
            groupRect.y = i*Data.getRectWidth();
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    }

    private clickRight()
    {

        for(var i=0;i<this._row;i++)
        {
            this._rectGroup[i].move();
        }
        Data.score++;
    }
}