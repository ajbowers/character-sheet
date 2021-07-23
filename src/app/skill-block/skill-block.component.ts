import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


import { CharacterSheetService } from '../character-sheet.service';
import { Character } from '../models/character';
import { StatBlock } from '../models/statblock';

@Component({
  selector: 'app-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrls: ['./skill-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBlockComponent implements OnInit {

  @Input('statBlock') statBlock:StatBlock = new StatBlock(8, 8, 8, 8, 8, 8);
  @Input() character!: Character;
  @Input() width!: number;
  @Input() height!: number;



  skillArray = [
    "Acrobatics:dex",
    "AnimalHandling:wis",
    "Arcana:int",
    "Athletics:str",
    "Deception:cha",
    "History:int",
    "Insight:wis",
    "Intimidation:cha",
    "Investigation:int",
    "Medicine:wis",
    "Nature:int",
    "Perception:wis",
    "Performance:cha",
    "Persuasion:cha",
    "Religion:int",
    "SleightOfHand:dex",
    "Stealth:dex",
    "Survival:wis"
  ]


  constructor(private characterService: CharacterSheetService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  showCheck(skill: string) {
    let showCheck = false;
    this.character.proficiencies.forEach(_prof => {

      if (_prof === skill.toLowerCase()) {
        showCheck = true;
      }
    })
    if (showCheck) {
      return "*";
    } else {
      return ""
    }

  }

  isProficient(skill: any) {
    let skillName = skill.split(":")[0];
    let isProficient = false;
    this.character.proficiencies.forEach(_prof => {
      if (_prof.toLocaleLowerCase() == skillName.toLowerCase()) {
        isProficient = true;
      }
    });
    return isProficient;
  }

  calcMod(skill: any) {
    let skillStat = skill.split(":")[1];
    let total = 0;

    if (this.isProficient(skill)) {
      total += this.characterService.calcProficiency(this.character.level);;
    }

    if (skillStat === "str") {
      total += this.characterService.calcStatBonus(this.character.coreStats.strength)
    }
    if (skillStat === "dex") {
      total += this.characterService.calcStatBonus(this.character.coreStats.dexterity)
    }
    if (skillStat === "con") {
      total += this.characterService.calcStatBonus(this.character.coreStats.constitution)
    }
    if (skillStat === "int") {
      total += this.characterService.calcStatBonus(this.character.coreStats.intelligence)
    }
    if (skillStat === "wis") {
      total += this.characterService.calcStatBonus(this.character.coreStats.wisdom)
    }
    if (skillStat === "cha") {
      total += this.characterService.calcStatBonus(this.character.coreStats.charisma)
    }
    return total;
  }
}
