$(function() {

  window.ondragover = function(e) { e.preventDefault(); return false };
  window.ondrop = function(e) { e.preventDefault(); return false };

  Function.prototype.bindToEventHandler = function bindToEventHandler() {
    var handler = this;
    var boundParameters = Array.prototype.slice.call(arguments);
    //create closure
    return function(e) {
        e = e || window.event; // get window.event if e argument missing (in IE)   
        boundParameters.unshift(e);
        handler.apply(this, boundParameters);
    }
  };

  function cancel(e) {
    if (e.preventDefault) { e.preventDefault(); }
    $('#library').addClass('droppable');
    return false;
  }

  function dragLeave(e) {
    if (e.preventDefault) { e.preventDefault(); }
    $('#library').removeClass('droppable');
  }

  function drop(e) {
    if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

    if(!Project.loaded()) return;

    $('#library').removeClass('droppable');

    var dt    = e.dataTransfer;
    var files = dt.files;
    for (var i=0; i<files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
        
      reader.addEventListener('loadend', function(e, file) {
        var data = this.result; 

        if(/.png|.jpg|.jpeg|.gif/.test(file.name)) {
          Project.addResource(file.name, data);
        }

      }.bindToEventHandler(file), false);
     
      reader.readAsDataURL(file);
    }
    return false;
  }

  var holder = document.getElementById('library');
  holder.ondrop = drop;
  holder.ondragover = cancel;
  holder.ondragleave = dragLeave;
});