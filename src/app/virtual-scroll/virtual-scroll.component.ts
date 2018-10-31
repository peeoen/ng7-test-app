import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  theEnd: boolean;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  numbers: number[] = [];
  constructor() { }

  ngOnInit() {
    // this.viewport.scrollToIndex(5);
    for (let i = 0; i < 20; i++) {
      this.numbers.push(i);
    }
  }

  nextNumber(events) {
    console.log('event', events);
    console.log('end', this.viewport.getRenderedRange().end);
    console.log('total', this.viewport.getDataLength());
    if (this.theEnd) {
      return;
    }

    // for (let i = 0; i < 20; i++) {
    //   const increse = this.numbers[this.numbers.length - 1] + 1;
    //   this.numbers.push(increse);
    // }

    // console.log(this.numbers);
  }

}
