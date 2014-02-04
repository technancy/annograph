$(document).ready(function(){

  var highlight;
  var clr;
  var toolTip;

  function grabMousedSelection() {
      highlight = "";

      if (window.getSelection) {
          var choicecut = window.getSelection();
          if (choicecut.rangeCount) {
              var container = document.createElement("div");
              for (var i = 0, len = choicecut.rangeCount; i < len; ++i) {
                  container.appendChild(choicecut.getRangeAt(i).cloneContents());
              }
              highlight = container.innerHTML;
          }
      } else if (document.selection) {
          if (document.selection.type == "Text") {
              highlight = document.selection.createRange().htmlText;
          }

      }
      console.log("Grabbing SELECTION >> " + highlight);
      return highlight;
  };


  // Click Option from dropdown
  anticipateOption = function(){
      console.log("What will you choose now?");

      document.body.onmousedown = function(e){
        e = window.event? event.srcElement: e.target;
        if(e.className && e.className.indexOf('option')!=-1){

            var opts = document.getElementsByClassName("option"),
            optsLength = opts.length, i;
            for(i=0; i < optsLength; i++) {
                (function(i) {
                    opts[i].onclick = function() {
                        pickColour(i);
                        tallyUp(i);
                    };
                })(i);
            };
        }
        else {
          console.log("you've pressed something other than a tooltip option");
        };

      };

  };

  function pickColour(num) {
    console.log('PICKing Colour ' + num);
    if(num == 0){clr = 'green';}
    else if(num == 1){clr = 'yellow';}
    else if(num == 2){clr = 'red';}
    applyHighlight(clr);
  };

  function tallyUp(num){
      n = parseInt(num,0);
      console.log('TALLY ' + n);
      var which = "tally_" + n;
      var trump = document.getElementById("tally_"+n).innerHTML;
      document.getElementById("tally_"+n).innerHTML =parseInt(trump) + 1;
  };

  function applyHighlight(classColour) {
      console.log("APPLYing HIGHlight COLOR " + classColour);
      var saved = document.getElementById("article").innerHTML;
      var revision = saved.replace(highlight, "<span class='"+ classColour + "'>" + highlight + "</span>");
      document.getElementById("article").innerHTML = revision;
  };

  $('#article').mouseup(function(e) {
      console.log("making tooltip");
      var focus = grabMousedSelection();
      if(focus && (focus = new String(focus).replace(/^\s+|\s+$/g,''))) {

          if(!toolTip) {
              toolTip = $('<span>').attr({
                  id: 'labeller'
              }).html("<div class='option'>Solitude</div><div class='option'>Courage</div><div class='option'>Tradegy</div>").hide();
              $(document.body).append(toolTip);
          }

          toolTip.css({
              top: e.pageY + 5, //offsets
              left: e.pageX + 10 //offsets
          }).fadeIn();
      };

      anticipateOption();

  });

  $(this).mousedown(function() {
      if(toolTip) {
        toolTip.fadeOut();
      }
  });

});
