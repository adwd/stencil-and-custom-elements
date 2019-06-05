import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  handleChange = (ev: CustomEvent) => {
    console.log('handled by onChange, count: ' + ev.detail);
  };

  handleOk = (ev: CustomEvent<{ message: string }>) => {
    console.log('handled by onOk, message: ' + ev.detail.message);
  };

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <div class="container">
            <p>inside stencil</p>
            <stencil-counter class="in" name={10} onChange={this.handleChange}></stencil-counter>
            <standard-counter class="in" name="10" onChange={this.handleChange}></standard-counter>
            <my-component name="Stencil" repeat={5} onOk={this.handleOk}></my-component>
          </div>
        </main>
      </div>
    );
  }
}
