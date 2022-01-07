import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <div class="box">Box 1 (width: 45vw)</div>
        <div class="box">Box 2 (width: 45vw)</div>
      </div>
    );
  }
}
