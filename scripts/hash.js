window.hashOut = function() {
  this.selections = 0;
};


(function($){

  getMousedSelection = function() {
      highlight = "";

      if (window.getSelection) {
          var choice = window.getSelection();
          if (choice.rangeCount) {
              var container = document.createElement("div");
              for (var i = 0, len = choice.rangeCount; i < len; ++i) {
                  container.appendChild(choice.getRangeAt(i).cloneContents());
              }
              highlight = container.innerHTML;
          }

      } else if (document.selection) {
          if (document.selection.type == "Text") {
              highlight = document.selection.createRange().htmlText;
          }
      }
      console.log(highlight);
      return highlight;
      };

    $('#article').mouseup(function(e) {
        getMousedSelection();
    });

})($);

