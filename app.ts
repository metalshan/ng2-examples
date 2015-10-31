import {Component,View, bootstrap} from 'angular2/angular2';
import {DataPrint} from 'template-syntax/data-printing.ts';

@Component({
    selector: 'my-app',
})

@View({
	directives: [DataPrint],
    template: `
    	<h1>Void Canvas Template Examples: </h1>
    	<hr />
    	<data-print></data-print>
    	`
	})

class App { }
bootstrap(App);