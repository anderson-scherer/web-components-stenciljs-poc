import { Component, h } from '@stencil/core';

@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.css',
  shadow: true
})
export class MyComponent {

  private helloWorld(): string {
    return 'My first Web Component';
  }

  render() {
    return <div>{this.helloWorld()}</div>;
  }
}
