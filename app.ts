import {Component,View, bootstrap} from 'angular2/angular2';
import {TemplateSyntax} from 'template-syntax/index.ts';
import {PipeExamples} from 'pipe-examples/index.ts';
import {DataBinding} from 'data-binding/index.ts';


@Component({
    selector: 'my-app',
})

@View({
    directives: [TemplateSyntax, PipeExamples, DataBinding],
    template: `
    	<h1><em>Angular 2.0 examples by voidcanvas.com</em></h1>
    	<hr /><hr /><br />


    	<template-syntax></template-syntax>
    	<pipe-examples></pipe-examples>
        <data-binding></data-binding>
    	
    	<br /><br />
    	`
	})

class App { }
bootstrap(App);