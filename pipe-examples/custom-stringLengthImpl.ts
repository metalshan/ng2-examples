/*
	This contains implementation  of
	custom pipes
*/

import {Component, View} from 'angular2/core';
import {FilterStringLength} from './custom-pipes/filter-string-length.ts';
import {NgFor} from 'angular2/common';


@Component({
  selector: 'string-length-impl',
  
})
@View({
	pipes: [FilterStringLength],
	directives: [NgFor],
	template: `
	    <h2>Custom pipe : filterStringLength</h2>
	    <h4>All names are : </h4>
	    <span *ngFor="#name of names">{{name}} </span>
	    <br />
	    <h4>Names of length 5 are : </h4>
	    <span *ngFor="#name of names | filterStringLength:5">{{name}} </span>

	    `
})
export class FilterStringLengthImpl {
	names = [
		"Paul",
		"David",
		"Shane",
		"Sachin",
		"Donald",
		"Poker"
	];
}
