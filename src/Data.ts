/**
 * Created by thunderflash on 2015/3/4.
 */
class Data
{
    private static _rectwidth:number = 0;
    public static getRectWidth():number
    {
        if(Data._rectwidth == 0)
        {
            Data._rectwidth = egret.MainContext.instance.stage.stageWidth/4;
        }
        return Data._rectwidth
    }
    public static score:number = 0;

    private static _rectheight:number = 0;
    public static getRectRow():number
    {
        if(Data._rectheight ==0)
        {
            Data._rectheight = Math.ceil(Data.getStageHeight()/Data.getRectWidth())+1
        }
        return Data._rectheight;
    }

    public static getStageHeight():number
    {
        return egret.MainContext.instance.stage.stageHeight;
    }

}
