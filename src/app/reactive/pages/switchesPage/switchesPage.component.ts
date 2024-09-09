import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switchesPage.component.html',
  styleUrls: ['./switchesPage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesPageComponent { }
