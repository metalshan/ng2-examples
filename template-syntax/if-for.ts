/*
	This contains example of
	NgIf
	NgFor
*/

import {Component, View} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';

@Component({
  selector: 'if-for',
  
})
@View({
	directives:[NgFor,NgIf]
	template: `
	    <h2>NgFor and NgIf Example</h2>
	    <p (click)="toggleNamesList()" [style.cursor]="'pointer'">
	    	<span *ngIf="displayNameList">hide</span>
	    	<span *ngIf="!displayNameList">show</span>
	    </p>
	    <ul *ngIf="displayNameList">
	    	<li *ngFor="#name of names">{{name}}</li>
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
