import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Character } from './models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetService {

  constructor() { }

  dragEnd(event: CdkDragEnd, selector: string, character: Character) {
    let componentRect = document.getElementById(selector)!.getBoundingClientRect();
    character.components.forEach(_component => {
      if (_component.name === selector) {
        _component.left   = componentRect.left;
        _component.top    = componentRect.top;
      }
    });
    let jsonCharacter = JSON.stringify(character);
    window.localStorage.setItem(character.name + "-sheet", jsonCharacter);
  }

  updateWidthHeight(event: MouseEvent, selector: string, character: Character) {
    let componentRect = document.getElementById(selector)!.getBoundingClientRect();
    character.components.forEach(_component => {
      if (_component.name === selector) {
        _component.height = componentRect.height;
        _component.width  = componentRect.width;
      }
    });
    let jsonCharacter = JSON.stringify(character);
    window.localStorage.setItem(character.name + "-sheet", jsonCharacter);
  }

  updateShow(show: boolean, selector: string, character: Character) {
    console.log("UPDATING SHOW/HIDE FIELD: " + selector);
    character.components.forEach(_component => {
      if (_component.name === selector) {
        _component.show = show;
      }
    });
    console.log(character.components.filter(c => c.name == selector));
    let jsonCharacter = JSON.stringify(character);
    window.localStorage.setItem(character.name + "-sheet", jsonCharacter);
  }

  calcProficiency(level: number) {
    if (level < 5) {
      return 2;
    } else if (level < 9) {
      return 3;
    } else if (level < 13) {
      return 4;
    } else if (level < 17) {
      return 5;
    } else {
      return 6;
    }
  }

  calcStatBonus(stat: number) {
    let result;
    result = (stat-10)/2;
    return result;
  }
}
