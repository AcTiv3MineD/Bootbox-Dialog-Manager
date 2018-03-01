## Documentation

This little library works very simple, it just helps you to handle multiple bootbox modals an the same time.
This is very useful when you have multiple bootbox insttances called from callbacks, for example a modal with a prompt, followed by a modal with some kind of form and followed with a bootbox confirmation. Allowing you to manipulate each modal individually as you desire from wherever you want in your code.

### Methods

#### `add`

```js
dialog_manager.add(
    'sample_dialog',
    bootbox.dialog( {
        title: 'Hi, i am a custom dialog!',
        message: '<p><i class="fa fa-spin fa-spinner"></i> Watch me spinning...</p>'
    } )
);
```

To use `bootbox_dialog_manager.js` we need to specify the dialog identification and the dialog object itself.

#### `get`

```js
var dialog = dialog_manager.get( 'sample_dialog' );
```

This will get you the dialog object itself for you to implement som bootbox methods on it.


#### `remove`

```js
var dialog = dialog_manager.remove( 'sample_dialog' );
```

This will remove the dialog if it exists.

#### `remove_all`

```js
var dialog = dialog_manager.remove_all( );
```

This will remove all the registered dialogs.