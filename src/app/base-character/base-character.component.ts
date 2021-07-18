import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ViewChildren, HostListener } from '@angular/core';
import { Character } from '../models/character';
import { StatBlock } from '../models/statblock';
import { ResizeEvent } from 'angular-resizable-element';
import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
import { ElementRef } from '@angular/core';
import { CharacterSheetService } from '../character-sheet.service';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2
}

@Component({
  selector: 'app-base-character',
  templateUrl: './base-character.component.html',
  styleUrls: ['./base-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCharacterComponent implements OnInit {

  @Input() character: Character = new Character("", "", "", "", 0, [], [], new StatBlock(0, 0, 0, 0, 0, 0), 0, 0, [], [], []);
  @Input() width!: number;
  @Input() height!: number;
  constructor(private characterService: CharacterSheetService) { }

  ngOnInit(): void {
  }
}
