/*
	This contains example of
	NgSwitch
*/

import {Component, View, NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/core';
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
	    <span [ng-switch]="myVal">
	    	<template [ng-switch-when]="1">One</template>
	    	<template [ng-switch-when]="2">Two</template>
	    	<template [ng-switch-when]="3">Three</template>
	    	<template [ng-switch-when]="4">Four</template>
	    	<template [ng-switch-when]="5">Five</template>
	    	<template ng-switch-default>Zero</template>
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
