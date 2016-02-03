/*
	This contains example of
	[attr.myAttribute]
	[class.myClass]
	(event)="doSomething()"
*/


import {Component, View} from 'angular2/core';
@Component({
  selector: 'attr-class',
  
})
@View({
	template: `
		<style>
			.classExampleRed{
				color:red;
			}

		</style>
	    <h2>Classes and attributes</h2>
	    <p title="titleSentence">Hover me - normal title</p>
	    <p [attr.title]="titleSentence">Hover me - [attr.title]</p>
	    <button (click)="toggleColor()" [class.classExampleRed]="isRedClassOn()">Toggle My Color</button>
	    <br />
	    <button (click)="toggleSize()" [style.font-size.px]="myFontSize">Toggle My Size</button>
	    `
})
export class AttributeClass {
	titleSentence = 'I am an executed title';
	isRed = false;
	isRedClassOn = function () {
		return this.isRed;
	}
	toggleColor = function () {
		this.isRed = !this.isRed;
	}
	myFontSize = 11;
	toggleSize = function () {
		if (this.myFontSize == 11)
			this.myFontSize = 20;
		else
			this.myFontSize = 11;

	}

}
