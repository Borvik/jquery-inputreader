# jquery-inputreader

jquery-inputreader is a small library to allow batch scanning of whole barcodes or magnetic stripes from keyboard based readers.  The basic principal behind these readers is that they emulate a keyboard - but they type much faster than any human would.

This library traps all keystrokes, and if the timeout passes, then the scan is done and an event is raised. During the event, if the pattern of the scan data matches a pattern you define, you can prevent the default action - which is to insert it into the current input box.

*NOTE:* This library will prevent the normal keypress/keyup behavior.

Because the default action is to insert the data at the cursor in the input box, it is best to listen for reading on the input box.  However, you may also listen on other elements as well (such as *document*) though that would suppress keyevents for a broader scope.

## Options
`$.fn.inputreader.defaults.timeout`: Specifies the timeout between keypresses (default is 50 milliseconds).

`$.fn.inputreader.defaults.insertText`: Allow/disallow inserting the text after the event (default is true)
- preventDefault() suppersedes this.
- also the element must support the selectionStart property as well

## Parameters
- `listen` - starts listening
- `stop` - stops listening

## Events

`inputreader:scan`

This event is raised when the timeout between keys is reached. The default timeout of 50 milliseconds should be almost imperceptible to normal typing speeds.

Normal keypresses **_WILL_** trigger this event.

The scanned data (or key pressed) can be found in the `scandata` property of the event.

To prevent insertion used `preventDefault()`.

## Basic Usage

```
$('#testInput')
    .inputreader('listen')
    .on('inputreader:scan', function(e) {

  if (e.scandata == '12') { // your pattern here
    e.preventDefault();
  }

});
```