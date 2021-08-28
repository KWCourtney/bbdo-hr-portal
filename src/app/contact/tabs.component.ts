import { Component, Input } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs">
      <ul class="tab-group">
        <li *ngFor="let tab of tabs; index as i"
          class="tab" [class.active]="tab.active"
          (click)="changeTab(i)">
          <i class="icon" [ngClass]="tab.iconClass"></i>
          {{tab.title}}
        </li>
      </ul>
      <div class="tab-content-group">
        <ng-container *ngFor="let tab of tabs">
          <div class="tab-content" *ngIf="tab.active" [innerHTML]="tab.content">

          </div>
          <div>
            {{tab.title}}
            {{tab.phone}}
            {{tab.duty1}}
        </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class TabsComponent {
  @Input()
  tabs: Tab[] = [];

  changeTab(index: number) {
    this.tabs = this.tabs.map((tab, i) => i === index ? { ...tab, active: true } : { ...tab, active: false });
  }
}
