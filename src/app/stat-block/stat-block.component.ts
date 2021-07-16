import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StatBlock } from '../models/statblock';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatBlockComponent implements OnInit {

  @Input('statBlock') statBlock:StatBlock = new StatBlock(8, 8, 8, 8, 8, 8);
  constructor() { }

  ngOnInit(): void {
  }


  calcMod(stat: number) {
    let result;
    result = (stat-10)/2;
    console.log(result);
    if (result >= 0) {
      result = "+" + result;
    }
    return result;
  }
}
