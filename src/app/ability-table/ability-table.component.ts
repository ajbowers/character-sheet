import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CharacterSheetService } from '../character-sheet.service';
import { Ability } from '../models/ability';

@Component({
  selector: 'app-ability-table',
  templateUrl: './ability-table.component.html',
  styleUrls: ['./ability-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbilityTableComponent implements OnInit {

  @Input() features: Ability[] = [];

  constructor(
    private characterService: CharacterSheetService
  ) { }

  ngOnInit(): void {
  }


}
