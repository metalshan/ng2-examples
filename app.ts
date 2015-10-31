import {Component,View, bootstrap} from 'angular2/angular2';
import {TemplateSyntax} from 'template-syntax/index.ts';

@Component({
    selector: 'my-app',
})

@View({
	directives: [TemplateSyntax],
    template: `
    	<h1>Void Canvas Template Examples: </h1>
    	<hr />
    	<template-syntax></template-syntax>
    	`
	})

class App { }
bootstrap(App);