import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Ability } from '../models/ability';

@Component({
  selector: 'app-ability-table',
  templateUrl: './ability-table.component.html',
  styleUrls: ['./ability-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbilityTableComponent implements OnInit {

  @Input() features: Ability[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
