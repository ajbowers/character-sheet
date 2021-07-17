import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CharacterSheetService } from '../character-sheet.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemTableComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor(
    private characterService: CharacterSheetService
  ) { }

  ngOnInit(): void {
  }


}
