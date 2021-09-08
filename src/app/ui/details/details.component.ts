import { Component, OnInit, Input } from '@angular/core';
import { ConfigDetails, TextDetails } from './types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() options: ConfigDetails;
  @Input() details: TextDetails[];
  config:  ConfigDetails;

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options:  ConfigDetails) {
    const config = {
      multi: true
    };

    return { ...config, ...options };
  }

}
