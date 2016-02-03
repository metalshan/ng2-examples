import {Pipe} from "angular2/core";

@Pipe({
	name : "filterStringLength"
})

export class FilterStringLength{
	transform(value, [length]){
		return value.filter(str => str.length==length);
	}
}