/**
 * Created by thunderflash on 2015/3/4.
 */
var Game = (function () {
    function Game(root) {
        this._root = root;
        this.createGroupsRect();
        this.createTimer();
        this.startGame();
    }
    Game.prototype.gameOver = function () {
        this._timerPanel.stop();
        if (this.overPanel == null) {
            this.overPanel = new GameOverPanel();
            this.overPanel.addEventListener("startGame", this.startGame, this);
        }
        this._root.addChild(this.overPanel);
    };
    Game.prototype.createTimer = function () {
        this._timerPanel = new TimerPanel();
        this._timerPanel.addEventListener("gameOver", this.gameOver, this);
        this._root.addChild(this._timerPanel);
    };
    Game.prototype.startGame = function () {
        Data.score = 0;
        for (var i = 0; i < this._row; i++) {
            this._rectGroup[i].init();
            this._rectGroup[i].y = Data.getRectWidth() * i;
            this._rectGroup[i].currentRow = i;
            if (i != (this._row - 1)) {
                this._rectGroup[i].createBlackRect();
            }
        }
        this._timerPanel.start();
    };
    Game.prototype.createGroupsRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroup = [];
        this._row = Data.getRectRow();
        var groupRect;
        for (var i = 0; i < this._row; i++) {
            groupRect = new GroupRect();
            groupRect.addEventListener("gameOver", this.gameOver, this);
            groupRect.addEventListener("clickRight", this.clickRight, this);
            this._rectGroup.push(groupRect);
            groupRect.y = i * Data.getRectWidth();
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    };
    Game.prototype.clickRight = function () {
        for (var i = 0; i < this._row; i++) {
            this._rectGroup[i].move();
        }
        Data.score++;
    };
    return Game;
})();
Game.prototype.__class__ = "Game";
