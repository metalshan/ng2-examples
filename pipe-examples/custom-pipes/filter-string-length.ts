import {Pipe} from "angular2/angular2";

@Pipe({
	name : "filterStringLength"
})

export class FilterStringLength{
	transform(value, [length]){
		return value.filter(str => str.length==length);
	}
}