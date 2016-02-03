/*
	This contains example of
	JSONPipe

*/

import {Component, View} from 'angular2/core';
@Component({
  selector: 'json-pipe',
  
})
@View({
	template: `
	    <h2>JSON Pipe Example</h2>
	    <h4>Without JSON Pipe</h4>
	    <pre>{{obj}}</pre>
	    <h4>With JSON Pipe</h4>
	    <pre>{{obj | json}}</pre>
	    `
})

export class JSONPipe {
	obj: Object = { name: {fName: "Paul", lName:"Shan"}, site:"VoidCanvas", luckyNumbers:[7,13,69] };
}
