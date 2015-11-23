import {Component, View, Pipe, PipeTransform, NgIf} from 'angular2/angular2'

@Pipe({name: 'countdown', pure: false})
class CountDown implements PipeTransform, PipeOnDestroy {
  remainingTime:Number;
  interval:SetInterval;
  onDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  transform(value: any, args: any[] = []) {
    if (!parseInt(value, 10)) return null;
    if (typeof this.remainingTime !== 'number') {
      this.remainingTime = parseInt(value, 10);
    }
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.remainingTime-=50;
        if (this.remainingTime <= 0) {
          this.remainingTime = 0;
          clearInterval(this.interval);
          delete this.interval;
        }
      }, 50);
    }
    return this.remainingTime;
  }
}



@Component({
  selector: 'impure-pipe',
})
@View({
  pipes: [CountDown],
  directives: [NgIf],
  template: `
    <div>
      <h2>Impure pipe</h2>
      <p>A counter with setInterval()</p>
      <button (click)="toggleActiveState();">
        <span *ng-if="!active">Start</span>
        <span *ng-if="active">Reset</span> 
      </button>
      <br>
      <div *ng-if="active">
        {{ 10000 | countdown }}
      </div>
    </div>
  `
})

export class ImpurePipe {
  active:boolean = false;
  toggleActiveState() {
    this.active = !this.active;
  }
}