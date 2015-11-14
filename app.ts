import {Component,View, bootstrap} from 'angular2/angular2';
import {TemplateSyntax} from 'template-syntax/index.ts';
import {PipeExamples} from 'pipe-examples/index.ts';


@Component({
    selector: 'my-app',
})

@View({
	directives: [TemplateSyntax, PipeExamples],
    template: `
    	<h1><em>Angular 2.0 examples by voidcanvas.com</em></h1>
    	<hr /><hr /><br />


    	<template-syntax></template-syntax>
    	<pipe-examples></pipe-examples>

    	
    	<br /><br />
    	`
	})

class App { }
bootstrap(App);