import { Component, Input, OnInit } from '@angular/core';
import { CharacterSheetService } from '../character-sheet.service';
import { Ability } from '../models/ability';
import { Character } from '../models/character';

@Component({
  selector: 'app-spell-table',
  templateUrl: './spell-table.component.html',
  styleUrls: ['./spell-table.component.css']
})
export class SpellTableComponent implements OnInit {

  @Input() character!: Character;
  @Input() width!: number;
  @Input() height!: number;

  constructor(
    private characterService: CharacterSheetService
  ) { }

  ngOnInit(): void {
    console.log(this.character);
  }

}
