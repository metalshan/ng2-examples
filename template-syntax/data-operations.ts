/*
	This contains example of
	{{value1}} + {{value2}} = {{value1 + value2}}
*/

import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'data-operations',
  
})
@View({
	template: `
	    <h2>Data Operations</h2>
	    <p> 1 + 1 = {{1+1}}</p>
	    <p>{{value1}} + {{value2}} = {{value1 + value2}}</p>
	    `
})
export class DataOperations {
	value1 = 10;
	value2 = 10;
}
