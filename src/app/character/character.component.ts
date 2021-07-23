import { StatBlock } from './../models/statblock';
import { Character } from './../models/character';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Ability } from '../models/ability';
import { Class } from '../models/class';
import { Item } from '../models/item';
import { Spell } from '../models/spell';
import characterJSON from '../../assets/data/character-sample.json';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() selectorList: string[] = [];

  character!: Character;
  selector!: string;


  width!: number;
  height!: number;
  left!: number;
  top!: number;


  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.character = this.createCharacter();
    this.calculateWidthHeightOfComponents();
  }

  compileItems(character: Character) {

    let _items: Item[] = [];

    character.classes.forEach(_class => {
      _class.classItems.forEach(_item => {
        _items.push(_item);
      });
    });

    return _items;
  }

  getComponentWidth(componentId: string) {
    let width = 0;
    this.character.components.forEach(_component => {
      if (_component.name === componentId) {
        width = _component.width;
      }
    });
    return width;
  }

  getComponentHeight(componentId: string) {
    let height = 0;
    this.character.components.forEach(_component => {
      if (_component.name === componentId) {
        height = _component.height;
      }
    });
    return height;
  }

  calculateWidthHeightOfComponents() {
    let components = this.character.components;
    components.forEach(_components => {
      console.log(_components.name);
      let element = document.getElementById(_components.name);
      console.log(element);
    })
  }

  getClasses(_classes: Class[]) {
    let classes: Class[] = [];
    _classes.forEach(_class => {
      classes.push(new Class(_class.className, _class.subclassName, _class.hitDie, _class.savingThrows, _class.classItems, _class.skills, _class.classAbilities));
    })
    return classes;
  }

  getRacials(_racials: Ability[]) {
    let racials: Ability[] = [];
    return racials;
  }

  getClassFeatures(_features: Ability[]) {
    let features: Ability[] = [];
    return features;
  }

  getCoreStats(_coreStats: StatBlock) {
    return _coreStats;
  }

  getItems(classes: Class[]) {
    let items: Item[] = [];
    classes.forEach(_class => {
      _class.classItems.forEach(_classItem => {
        items.push(_classItem);
      });
    })
    return items;
  }

  clearLocalStorage() {
    console.log("TEST");
    window.localStorage.removeItem(this.character.name + "-sheet");
    window.location.reload();
  }

  getSpells() {
    let spells: Spell[] = [];
    return spells;
  }

  getSavingThrows() {
    let savingThrows: string[] = [];
    return savingThrows;
  }

  createCharacter(): Character {
    let characterLocal = JSON.parse(JSON.stringify(characterJSON));
    let localStorage = window.localStorage;
    let storageKey = characterLocal.name + "-sheet";
    let jsonString = localStorage.getItem(storageKey);
    let _char!: Character;
    if (jsonString == "null") {
      _char =  new Character(
        characterLocal.name,
        characterLocal.level,
        characterLocal.background,
        characterLocal.alignment,
        characterLocal.race.raceName,
        characterLocal.age,
        this.getClasses(characterLocal.classes),
        characterLocal.race.racialAbilities,
        this.getCoreStats(characterLocal.coreStats[0]),
        characterLocal.hitPointsCur,
        characterLocal.hitPointsMax,
        characterLocal.skills,
        this.getItems(characterLocal.classes),
        characterLocal.spells,
        characterLocal.components
      );
    } else {
      _char = JSON.parse(jsonString!);
    }
    localStorage.setItem(storageKey, JSON.stringify(_char));
    return _char;
  }


}
