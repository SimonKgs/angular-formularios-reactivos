import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamicPage.component.html',
  styleUrls: ['./dynamicPage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent { }
