var Article = (function($) {
  'use strict';

  function Article(id) {
    this.id = id;
    console.log(id);
  }

  Article.prototype = {};

  return Article;
}(window.jQuery));


var AnnoGraph = (function($) {
  'use strict';
  var highlight, toolTip, clr;

  function AnnoGraph(el) {
    this.$el = $(el);
    this.article = new Article(this.$el.attr("id"));
  }

  AnnoGraph.init = function($articles) {
    $articles.each(function () {
      var annoGraph = new AnnoGraph(this);
      console.log("shalala "+annoGraph);
      annoGraph.bind();
    });
  }

  AnnoGraph.prototype = {
    bind: function() {
      var self = this;

      self.$el.on('mouseup', function(e){
        self.grabMousedSelection();
        self.generateToolTip(e);
      });

      self.$el.on('mousedown', function(e){
        if(toolTip) {
          toolTip.fadeOut();
        }
        self.anticipateOption(e);
      });
    },

    grabMousedSelection: function() {
      highlight = "";
      console.log("grabbin");
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
    },

    generateToolTip: function(e) {
      console.log("I am " + e.type);
      var self = this;
        var focus =  self.grabMousedSelection();
        if(focus && (focus = new String(focus).replace(/^\s+|\s+$/g,''))) {

        if(!toolTip) {
          toolTip = $('<span>').attr({
              id: 'labeller'
          }).html(self.markupCategories()).hide();
          $(document.body).append(toolTip);
        }

        toolTip.css({
          top: e.pageY + 5, //offsets
          left: e.pageX + 10 //offsets
        }).fadeIn();

      };
    },

    markupCategories: function(){
      var markup = "<div class='option'>Solical</div><div class='option'>Conciousness</div><div class='option'>Enquiry</div>";
      return markup;
    },

    anticipateOption: function(){
      var self = this;
      console.log("What will you choose now?");

      document.body.onmousedown = function(e){
        e = window.event? event.srcElement: e.target;
        if(e.className && e.className.indexOf('option')!=-1){

            var opts = document.getElementsByClassName("option"),
            optsLength = opts.length, i;
            for(i=0; i < optsLength; i++) {
                (function(i) {
                    opts[i].onclick = function() {
                        self.tallyUp(i);
                        self.pickColour(i);
                        self.applyHighlight(clr);
                    };
                })(i);
            };
        }
        else {
          console.log("you've pressed something other than a tooltip option");
        };

      };
    },

    applyHighlight: function(classColour) {
        console.log("APPLYing HIGHlight COLOR " + classColour);
        var saved = document.getElementById("essay_1").innerHTML;
        var revision = saved.replace(highlight, "<span class='"+ classColour + "'>" + highlight + "</span>");
        document.getElementById("essay_1").innerHTML = revision;
    },

    pickColour: function(num) {
      console.log('PICKing Colour ' + num);
      if(num == 0){clr = 'green';}
      else if(num == 1){clr = 'yellow';}
      else if(num == 2){clr = 'red';}
      //self.applyHighlight(clr);
    },

    tallyUp: function(num){
        var n = parseInt(num,0);
        console.log('TALLY ' + n);
        var which = "tally_" + n;
        var trump = document.getElementById("tally_"+n).innerHTML;
        document.getElementById("tally_"+n).innerHTML =parseInt(trump) + 1;
    }
  };

  return AnnoGraph;

}(window.jQuery));

$(document).ready(function() {
  AnnoGraph.init($("#essay_1"));
  AnnoGraph.init($("#essay_2"));
});