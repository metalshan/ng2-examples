/*
	This contains example of
	pipe
*/

import {Component, View} from 'angular2/core';
@Component({
  selector: 'eg-elvis',
  
})
@View({
	template: `
	    <h2>Elvis operator Example</h2>
	    <h4>This is working fine {{obj.temp}}</h4>
	    <!-- <h4>This line will break the application {{obj.temp.me.she.he}}. Please uncomment and check</h4> -->
		<h4>This line will be printed but nothing on right side {{obj?.temp?.me?.she?.he}}</h4>
	    `
})
export class ElvisExample {
	obj = {
		temp:"I am temp"
	}

}
