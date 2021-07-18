import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CharacterSheetService } from '../character-sheet.service';
import { Ability } from '../models/ability';
import { Character } from '../models/character';

@Component({
  selector: 'app-ability-table',
  templateUrl: './ability-table.component.html',
  styleUrls: ['./ability-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbilityTableComponent implements OnInit {

  @Input() features: Ability[] = [];
  @Input() character!: Character;
  @Input() width!: number;
  @Input() height!: number;

  constructor(
    private characterService: CharacterSheetService
  ) { }

  ngOnInit(): void {

  }

  compileFeatures() {
    let _features: Ability[] = [];
    this.character.racialAbilities.forEach(_racial => {
      _features.push(_racial);
    })
    this.character.classes.forEach(_class => {
      _class.classAbilities.forEach(_feature => {
        _features.push(_feature);
      })
    })

    return _features;
  }


}
