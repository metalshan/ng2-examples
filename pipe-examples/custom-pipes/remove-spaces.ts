import {Pipe} from "angular2/angular2";

@Pipe({
	name : "removeSpaces"
})

export class RemoveSpaces{
	transform(value){
		return value.replace(/ /g, "");
	}
}