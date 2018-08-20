import { Component, Event, EventEmitter, State, Prop } from '@stencil/core';
import { FnCompSample } from '../fn-comp-sample/fn-comp-sample';

@Component({
  tag: 'stencil-counter',
  shadow: true,
})
export class StencilCounter {

  @Prop() name: number;
  @State() count: number = 0;
  @Event() change: EventEmitter<number>;

  componentDidLoad() {
    console.log(`stencil-counter typeof name: ${typeof this.name}, value: ${this.name}`);
  }

  onClickCountUp = () => {
    this.count = this.count + 1;
    this.change.emit(this.count);
  }

  onClickCountDown = () => {
    this.count = this.count - 1;
    this.change.emit(this.count);
  }

  render() {
    return (
      <div>
        <p>stencil counter</p>
        <p>{this.count}</p>
          <button onClick={this.onClickCountUp}>
            count up
          </button>
          <button onClick={this.onClickCountDown}>
            count down
          </button>
          <FnCompSample name="HelloFnCmp"></FnCompSample>
      </div>
    );
  }
}
