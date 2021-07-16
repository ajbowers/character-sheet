import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Character } from '../models/character';
import { Class } from '../models/class';
import { StatBlock } from '../models/statblock';
import { CharacterSheetService } from '../character-sheet.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-class-block',
  templateUrl: './class-block.component.html',
  styleUrls: ['./class-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassBlockComponent implements OnInit {

  @Input() character: Character = new Character("", "", "","",0,[],[],[],new StatBlock(0,0,0,0,0,0), 0, 0, [], [], [], []);
  constructor(
    private characterService: CharacterSheetService
  ) { }

  ngOnInit(): void {
  }

  dragEnd(event: CdkDragEnd) {
    this.characterService.dragEnd(event);
  }

}
