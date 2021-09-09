import { Component, Input } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs">
      <!-- Tabs -->
      <div class="tab-group mx-auto mb-4">
        <span *ngFor="let tab of tabs; index as i" class="tab" [class.active]="tab.active" (click)="changeTab(i)">
            {{tab.title}}
        </span>
      </div>

      <!-- Tab Content -->
      <div class="tab-content-group">
        <ng-container *ngFor="let tab of tabs">
          <div class="tab-content container p-0" *ngIf="tab.active">
            <!-- Cards -->
            <div class="col-12 custom-cards contact-us-cards">
              <div *ngFor="let items of tab.items">

                <div class="card mb-4 contact-us-details">
                  <div class="card-body justify-content-center d-flex align-items-center">
                    <div class="card-body-inner">

                      <div class="row m-0">
                        <!-- Person Icon + Email Icon -->
                        <div class="col-3 col-md-4 contact-us-details__icon-person p-0 text-center">
                          <img src="./assets/images/{{ items.icon }}.svg" alt="{{items.name}} icon">
                        </div>

                        <!-- Name, Title, Phone -->
                        <div class="col-9 col-md-8 px-1 my-auto">
                          <div class="col-12 contact-us-details__name">
                            {{ items.name }}
                            <a href="mailto:{{items.email}}">
                                <img src="./assets/images/{{ tab.iconEmail }}.svg" alt="{{items.name}} icon">
                            </a>
                          </div>
                          <div class="col-12 contact-us-details__title">
                            {{ items.title }}
                          </div>
                          <div class="col-12 contact-us-details__phone">
                            {{ items.phone }}
                          </div>
                        </div>
                      </div>

                      <!-- Duties -->
                      <div class="row mt-3 px-2">
                        <div *ngFor="let duties of items.duties">
                          <div class="col-12 contact-us-details__duties">
                            <img src="./assets/images/{{ tab.iconBullet }}.svg" alt="{{items.name}} icon">
                            {{duties.dutyName}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
