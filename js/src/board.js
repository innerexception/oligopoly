define([], function(){
   var Board = function(phaserInstance){
       this.phaserInstance = phaserInstance;
       this.player = new Player(this.phaserInstance);
   };

   Board.prototype = {
       update: function(){

       }
   };

   return Board;
});