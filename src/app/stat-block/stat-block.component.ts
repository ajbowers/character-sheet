import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CharacterSheetService } from '../character-sheet.service';
import { Character } from '../models/character';
import { StatBlock } from '../models/statblock';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatBlockComponent implements OnInit {

  @Input('statBlock') statBlock:StatBlock = new StatBlock(8, 8, 8, 8, 8, 8);
  @Input() character!: Character;
  @Input() width!: number;
  @Input() height!: number;

  str: string = "";
  dex: string = "";
  con: string = "";
  int: string = "";
  wis: string = "";
  cha: string = "";

  constructor(private characterService: CharacterSheetService) { }

  ngOnInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.character.classes.forEach((_class: { savingThrows: any[]; }) => {
      _class.savingThrows.forEach((_st: any) => {
        this.str = _st.strength;
        this.dex = _st.dexterity;
        this.con = _st.constitution;
        this.int = _st.intelligence;
        this.wis = _st.wisdom;
        this.cha = _st.charisma;
      });
    });

    console.log(this.str + " " + this.dex + " " + this.con + " " + this.int + " " + this.wis + " " + this.cha)
  }

  ngAfterViewInit(): void {

  }

  calcMod(stat: number) {
    let result;
    result = (stat-10)/2;
    if (result >= 0) {
      result = "+" + result;
    }
    return result;
  }
}
