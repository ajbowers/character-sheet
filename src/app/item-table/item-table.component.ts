import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemTableComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
