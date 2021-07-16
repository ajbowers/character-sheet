import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character!: Character;
  constructor() { }

  ngOnInit(): void {
    this.character = this.createCharacter();
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

  createCharacter() {

    let proficiencies: Skill[] = [];
    let items: Item[] = [];
    let spells: Spell[] = [];
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

    let classes = [
      new Class("Artificer", "Alchemist", "1d8", ["INT", "CON"], classItems, classSkills)
    ]

    let racials = [
      new Ability("Vedalken Dispassion", 0, "Advantage on ST for INT, WIS and CHA"),
      new Ability("Tireless Precision", 0, "Gain Proficiency with Medicine, Theives' Tools. Add 1d4 to rolls with this tools"),
      new Ability("Partially Amphibious", 0, "Can breath underwater for 1 hour, once per long rest")
    ]

    let features = [
      new Ability("Magical Tinkering", 1, "Make Fart Rocks and Other Cool Stuff"),
      new Ability("Spellcasting", 1, "See Spell page, must use Artificer's or Theives' Tools"),
      new Ability("Infuse Item", 2, "Gain the ability to learn infusions. 4 immediately. See Infusion table for those known & the rules"),
      new Ability("ALCH: Experimental Elixers", 3, "After completing a long rest, roll 1d6 and refer to elixer table. Create elixer based on result of dice. Consume spell slots to make additional elixers."),
      new Ability("ALCH: Alchemical Savant", 5, "When using alchemist supplies to cast spells, add INT bonus to any rolls that heal or deal damage via acid, fire, necrotic or poison")
    ]

    let char = new Character(
      "Gill Dorado",
      "Ghost Hunter",
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
