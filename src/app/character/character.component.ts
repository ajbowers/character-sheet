import { StatBlock } from './../models/statblock';
import { Character } from './../models/character';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Ability } from '../models/ability';
import { Class } from '../models/class';
import { Item } from '../models/item';
import { Skill } from '../models/skill';
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


  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    this.character = this.createCharacter();
    this.loadComponentLocation();
    this.height = 800;
    this.width = 200;
  }

  loadComponentLocation() {

    let componentX = 0;
    let componentY = 0;
    let height = 0;
    let width = 0;
    let components = characterJSON["components"];

    for (let i = 0; i < components.length; i++) {
      let _name = components[i]["component-name"];

      if (_name === this.selector) {
        componentX = components[i]["xPos"];
        componentY = components[i]["yPos"];
        height = components[i]["height"];
        width = components[i]["width"];
      }
    }
    // set new X,Y Coords for this component
    this.left     = componentX;
    this.top      = componentY;
    this.height   = height;
    this.width    = width;

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


  resetAllComponentPosition() {

    window.localStorage.clear();
    window.location.reload();
  }


  saveAllComponentPosition() {

  }

  getClasses(_classes:Class[]) {
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

  getSpells() {
    let spells: Spell[] = [];
    return spells;
  }

  getSavingThrows() {
    let savingThrows: string[] = [];
    return savingThrows;
  }

  createCharacter() {
    let characterLocal = JSON.parse(JSON.stringify(characterJSON));
    let proficiencies: Skill[] = [];

    console.log(characterLocal.coreStats[0]);
    let char = new Character(
      characterLocal.name,
      characterLocal.background,
      characterLocal.alignment,
      characterLocal.race.raceName,
      characterLocal.age,
      this.getClasses(characterLocal.classes),
      characterLocal.race.racialAbilities,
      this.getCoreStats(characterLocal.coreStats[0]),
      characterLocal.hitPointsCur,
      characterLocal.hitPointsMax,
      proficiencies,
      this.getItems(characterLocal.classes),
      characterLocal.spells
    );

    return char;
  }


}
