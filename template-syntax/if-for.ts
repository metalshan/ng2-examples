/*
	This contains example of
	NgIf
	NgFor
*/

import {Component, View, NgFor, NgIf} from 'angular2/angular2';
@Component({
  selector: 'if-for',
  
})
@View({
	directives:[NgFor,NgIf]
	template: `
	    <h2>NgFor and NgIf Example</h2>
	    <p (click)="toggleNamesList()" [style.cursor]="'pointer'">
	    	<span *ng-if="displayNameList">hide</span>
	    	<span *ng-if="!displayNameList">show</span>
	    </p>
	    <ul *ng-if="displayNameList">
	    	<li *ng-for="#name of names">{{name}}</li>
	    </ul>
	    `
})
export class ForAndIf {
	names = ["Paul", "David", "Jack"];
	displayNameList = true;
	toggleNamesList: function () {
		this.displayNameList = !this.displayNameList;
	}
}
