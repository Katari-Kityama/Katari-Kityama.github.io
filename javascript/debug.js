document.addEventListener('DOMContentLoaded', function() {
    // Create debug element to display cursor position
    var debugElement = document.createElement('div');
    debugElement.id = 'debug';
    debugElement.style.position = 'fixed';
    debugElement.style.bottom = '10px';
    debugElement.style.right = '10px';
    debugElement.style.padding = '5px';
    debugElement.style.background = 'rgba(0, 0, 0, 0.5)';
    debugElement.style.color = '#fff';
    debugElement.style.fontFamily = 'Arial, sans-serif';
    debugElement.style.fontSize = '12px';
    debugElement.style.zIndex = '9999';
    document.body.appendChild(debugElement);
  
    // Add mousemove event listener to update debug information
    document.addEventListener('mousemove', function(event) {
      var x = event.pageX;
      var y = event.pageY;
      debugElement.textContent = 'Cursor position: ' + y + 'px, ' + x + 'px';
    });
  });
  