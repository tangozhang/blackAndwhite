class Main extends egret.DisplayObjectContainer{


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);

    }
    private addStage()
    {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
        var game:Game = new Game(this);
    }
}


