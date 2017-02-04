Basic Usage:

$('#testInput').inputreader('listen').on('inputreader:scan', function(e) {
  if (e.scandata == '12') {
    e.preventDefault();
  }
});

Listens for keydown on the selected elements.

Parameters for .inputreader(): 
  listen - starts listening
  stop - stops listening

One Event - 'inputreader:scan'
  Raised when timeout between keys is reached (default is 50 milliseconds)
    - 50 should be almost imperciptible to normal typing speeds, but barcode scanners and magnetic stripe readers
    - type much faster so they should be caught.
  Normal key presses DO trigger this event
  Normal key events keypress and keyup will not function on the element while listening.
  Data scanned (or the keypress) can be found in scandata.
  To prevent insertion use preventDefault()

Options:
  $.fn.inputreader.defaults.timeout: Specify the timeout between keypresses (default is 50 milliseconds)
  $.fn.inputreader.defaults.insertText: Allow/disallow inserting the text after the event (default is true)
    - preventDefault() suppersedes this.
    - also the element must support the selectionStart property as well