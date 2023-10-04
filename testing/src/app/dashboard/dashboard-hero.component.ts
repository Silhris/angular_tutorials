import { Component, EventEmitter, Input, Output, DoCheck, OnChanges, OnInit, AfterContentInit } from '@angular/core';

import { Hero } from '../model/hero';

@Component({
  selector: 'dashboard-hero',
  template: `
    <button type="button" (click)="click()" class="hero">
      {{hero.name | uppercase}}
    </button>
  `,
  styleUrls: [ './dashboard-hero.component.css' ]
})
export class DashboardHeroComponent implements OnInit, DoCheck, OnChanges {
  @Input() hero!: Hero;
  @Input() o!: any;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }

  ngAfterContentInit() {
    //console.log('AfterContentInit dashboard-hero')
  }

  ngOnInit() {
    //console.log('onInit dashboard-hero')
  }

  ngOnChanges() {
    //console.log("doChange dashboard-hero");
  }

  ngDoCheck() {
    //console.log("doCheck dashboard-hero");
  }
}
