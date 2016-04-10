# ionic-keep-bottom

An Ionic directive to scroll to the bottom of ion-content automatically.

### via Bower

```bash
$ bower install --save ionic-keep-bottom
```

## Usage

Load script
```bash
    <script src="lib/ionic-keep-bottom/ionic-keep-bottom.js"></script>
```

Add ionic-keep-bottom as dependency to your project
```bash
    angular
     .module('whatever', ['ionic-keep-bottom'])
```

Add directive :
```html
	<ion-content keep-bottom="variableToWatch">
		...
	</ion-content>
```