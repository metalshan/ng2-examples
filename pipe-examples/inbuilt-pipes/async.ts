/*
	This contains example of
	AsyncPipe
*/

import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  selector: 'async-pipe',
})
@View({
	directives:[NgFor],
	template: `
	    <h2>Async Pipe Example</h2>
	    <p>wait... {{promise | async}}</p>
	    <button (click)="clickMe()">Click me to initiate promise</button>
	    `
})

export class AsyncPipe {
	promise : Promise <string> = null;
	clickMe() {
		this.promise = new Promise<string>((resolve, reject) => {
			setTimeout(function () {
				resolve("resolved");
			},2000);
		});
	}
}
