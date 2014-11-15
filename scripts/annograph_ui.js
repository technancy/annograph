var AnnoGraph = (function($){
  'use strict';
  
  function AnnoGraph(container) {
    this.container = container;
    console.log(this.container);
    this.bind();
  };

  AnnoGraph.init = function(container) {
    new AnnoGraph(container);
    this.highlight = ""; 
    this.labeler = "";
  };

  AnnoGraph.prototype.bind = function() {
    var self = this;

    this.container.on('mouseup', function(event) {
      self.store_user_selection();
      self.generate_labeler(this, event);
    });
    
    this.container.on('mousedown', function(){
      self.applyHighlight(this);
    });

  };

  AnnoGraph.prototype.store_user_selection = function() {
    this.highlight = window.getSelection().getRangeAt(0).toString();
  };

  AnnoGraph.prototype.generate_labeler = function(el, ev) {
    console.log( it_is_TrueThat.new_hightlight_has_been_selected() == true);
    if(it_is_TrueThat.new_hightlight_has_been_selected == true ) {

      if(it_is_TrueThat.labeler_does_not_exist_yet == true) {
        this.labeler = $('<span>').attr({class: 'labeler'}).html(this.markupCategories).hide();
        $(document.body).append(this.labeler);
      }

      this.labeler.css({ top: ev.pageY + 5, left: ev.pageX + 10 }).fadeIn();
    };
  };
  
  var it_is_TrueThat = {
    new_hightlight_has_been_selected: function() {
      return (this.highlight && (this.highlight = new String(this.highlight).replace(/^\s+|\s+$/g,'')) )
    },
    labeler_does_not_exist_yet: function() {
      return !this.labeler
    }
  };

  AnnoGraph.prototype.markupCategories = function() {
    var markup = "<div class='option'>Solical</div><div class='option'>Conciousness</div><div class='option'>Enquiry</div>";
    return markup;
  };

  AnnoGraph.prototype.applyHighlight = function(el) {
    var saved = $(el).find('.article').html();
    var revision = saved.replace( this.highlight, "<span class='green'>" +  this.highlight + "</span>");
    $(el).find('.article').html(revision);
  };

  return AnnoGraph;
}(window.jQuery));

$(document).ready(function() {
  AnnoGraph.init($('.essay_1'));
  AnnoGraph.init($('.essay_2'));
});