import {Component, View} from 'angular2/angular2';
@Component({
  selector: 'data-print',
  
})
@View({
	template: `
	    <h2>Data Print</h2>
	    <p>My name is: {{title}} {{fName}} {{lName}}</p>
	    <img src={{gravatar}} />
	    `
})
export class DataPrint {
  title = 'Mr.';
  fName = 'Paul';
  lName = 'Shan';
  gravatar = 'http://www.gravatar.com/avatar/48692c25db0cdbbe426d6c3dc947ecb2';
}
