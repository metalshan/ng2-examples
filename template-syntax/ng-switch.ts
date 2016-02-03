/*
	This contains example of
	NgSwitch
*/

import {Component, View} from 'angular2/core';
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/common'

@Component({
	selector: 'eg-switch',
  
})
@View({
	directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault]
	template: `
	    <h2>NgSwitch Example</h2>
	    <span (click)="increase()" [style.cursor]="'pointer'">
	    	Click to Change The number :: 
	    </span>
	    <span [ngSwitch]="myVal">
	    	<template [ngSwitchWhen]="1">One</template>
	    	<template [ngSwitchWhen]="2">Two</template>
	    	<template [ngSwitchWhen]="3">Three</template>
	    	<template [ngSwitchWhen]="4">Four</template>
	    	<template [ngSwitchWhen]="5">Five</template>
	    	<template ngSwitchDefault>Zero</template>
	    </span>
		
	    `
})
export class SwitchTemplates {
	myVal = 0;
	increase: function () {
		if (this.myVal === 5)
			this.myVal = 0;
		else
			this.myVal++;
	}
}
