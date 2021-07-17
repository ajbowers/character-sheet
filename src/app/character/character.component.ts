import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Ability } from '../models/ability';
import { Character } from '../models/character';
import { Class } from '../models/class';
import { Item } from '../models/item';
import { Skill } from '../models/skill';
import { Spell } from '../models/spell';
import { StatBlock } from '../models/statblock';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character!: Character;
  constructor(private el : ElementRef) { }

  ngOnInit(): void {
    this.character = this.createCharacter();
  }

  getComponentAppString(appSelector: string) {
    return appSelector;
  }

  compileItems(character: Character) {

    let _items: Item[] = [];

    character.classes.forEach(_class => {
      _class.startingItems.forEach(_item => {
        _items.push(_item);
      });
    });

    return _items;
  }

  compileFeatures(character: Character) {
    let _features: Ability[] = [];
    _features.push(new Ability("  [ Race ]", 0, " "));
    character.racialAbilities.forEach(_racial => {
      _features.push(_racial);
    })
    _features.push(new Ability("  [ Class ]", 0, " "));
    character.classes.forEach(_class => {
      _class.classAbilities.forEach(_feature => {
        _features.push(_feature);
      })
    })

    return _features;
  }

  resetAllComponentPosition() {
    console.log("RESET");
    window.localStorage.clear();
    window.location.reload();
  }


  saveAllComponentPosition() {
    console.log("RESET");
    let localStorage = window.localStorage;
    //localStorage.clear(); //delete old position data

    let components = this.el.nativeElement.querySelectorAll(".core");

    components.forEach(function(component: any) {
      console.log(component);
      let id = component.id;






    });
    //location.reload();
  }


  createCharacter() {

    let proficiencies: Skill[] = [];
    let items: Item[] = [];

    let savingThrows: string[] = [];

    let classItems = [
      new Item("Spear", "1d6, 1d8vers", 20, "simple, thrown", "5gp", false, 0, ""),
      new Item("Scale Mail", "", 0, "", "", false, 14, "covered in pockets for potions, tools, gadgets etc"),
      new Item("Goggles of Night", "", 0, "60ft Darkvision while equipped", "", true, 0, "wonderous item, made with Artificer's Replicate infusion"),
      new Item("Rope of Climbing", "", 0, "", "", true, 0, "wonderous item, made with Artificer's Replicate infusion")
    ];

    let classSkills = [
      new Skill("investigation", "INT"),
      new Skill("history", "INT")
    ];

    let features = [
      new Ability("Magical Tinkering", 1, "Make Fart Rocks and Other Cool Stuff"),
      new Ability("Spellcasting", 1, "See Spell page, must use Artificer's or Theives' Tools"),
      new Ability("Infuse Item", 2, "Gain the ability to learn infusions. 4 immediately. See Infusion table for those known & the rules"),
      new Ability("ALCH: Experimental Elixers", 3, "After completing a long rest, roll 1d6 and refer to elixer table. Create elixer based on result of dice. Consume spell slots to make additional elixers."),
      new Ability("ALCH: Alchemical Savant", 5, "When using alchemist supplies to cast spells, add INT bonus to any rolls that heal or deal damage via acid, fire, necrotic or poison")
    ];

    let classes = [
      new Class("Artificer", "Alchemist", "1d8", ["INT", "CON"], classItems, classSkills, features)
    ];

    let spells = [
      new Spell("Test Spell", "Abjuration", "Cast spell at target", ["V","S","M"], "")
    ];

    let racials = [
      new Ability("Vedalken Dispassion", 0, "Advantage on ST for INT, WIS and CHA"),
      new Ability("Tireless Precision", 0, "Gain Proficiency with Medicine, Theives' Tools. Add 1d4 to rolls with this tools"),
      new Ability("Partially Amphibious", 0, "Can breath underwater for 1 hour, once per long rest")
    ];

    let backstory = "Gillbert Dorado, known as Gill by his friends & associates, is a brillient vedalken alchemist who wastes his time searching out and studying paranormal activity in the various locales of [setting]. Gill takes meticulous care in being" +
                    "prepared for any scenario; his armor is covered in pouches, straps, clips and other utility features. He carries some advanced alchemical tools and many flasks with mysterious liquid. He is roughly 6ft tall and wears night vision goggles";


    let char = new Character(
      "Gill Dorado",
      backstory,
      "Lawful Neutral",
      "Vedalken",
      167,
      classes,
      racials,
      features,
      new StatBlock(10, 14, 14, 16, 12, 8),
      45,
      45,
      proficiencies,
      items,
      spells,
      savingThrows
    );

    return char;
  }

}
