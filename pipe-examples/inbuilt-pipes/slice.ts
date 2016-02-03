/*
	This contains example of
	SlicePipe
*/

import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';


@Component({
  selector: 'slice-pipe',
})
@View({
	directives:[NgFor],
	template: `
	    <h2>Slice Pipe Example</h2>
	    <p>{{str}} (0:4): {{str | slice:0:4}}</p>
	    <h4>names (1:4)</h4>
	    <ul>
	    	<li *ngFor="var name of names | slice:1:4">{{name}}</li>
	    </ul>
	    `
})

export class SlicePipe {
	str: string = "voidcanvas.com";
	names: string[] = ['paul', 'david', 'ean', 'renee', 'chloe']
}
