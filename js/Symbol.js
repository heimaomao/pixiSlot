function Symbol(symbolName,currentPos,reelPanel) {
  this.symbolName = symbolName;
  this.imagePath = "images/" + symbolName + ".png";
  this.currentPos = currentPos;
  this.reelPanel = reelPanel;
}

Symbol.prototype.initSymbol = function(){
    this.pic = new PIXI.Sprite(PIXI.loader.resources[this.imagePath].texture);
    this.pic.x = this.currentPos[0] * 250;
    this.pic.y = this.currentPos[1] * 250 - 700;
    reelPanel.addChild(this.pic);
};
//Symbol.prototype.dropToPos = dropSymbol;

Symbol.prototype.getPic = function(){
  return this.pic;  
};

Symbol.prototype.dropToPos = function(symbol){
    if(symbol.pic.y == symbol.currentPos[1] *250){
        dropFinished();
    }else{
        symbol.pic.y += 35;
        setTimeout(Symbol.prototype.dropToPos,15,symbol);
    }
}

Symbol.prototype.lighting = function(symbol,times = 0){
  if(times === 6) {actionFinished();return;}
  symbol.pic.visible = !symbol.pic.visible;
  setTimeout(Symbol.prototype.lighting,400,symbol,++times);
}

Symbol.prototype.addToActionList = function(symbol,callBackFunctionName){
  symbol.nextFunctionName = callBackFunctionName;
  actionList++;
}

Symbol.prototype.printName = function () {
  console.log(this.name);
};