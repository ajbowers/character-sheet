import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { ItemTableComponent } from './item-table/item-table.component';
import { AbilityTableComponent } from './ability-table/ability-table.component';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { BaseCharacterComponent } from './base-character/base-character.component';
import { ResizableModule } from 'angular-resizable-element';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ClassBlockComponent } from './class-block/class-block.component';
import { ResizableDraggableComponent } from './resizable-draggable/resizable-draggable.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ItemTableComponent,
    AbilityTableComponent,
    StatBlockComponent,
    BaseCharacterComponent,
    ClassBlockComponent,
    ResizableDraggableComponent
  ],
  imports: [
    BrowserModule,
    ResizableModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ResizableDraggableComponent
  ]
})
export class AppModule { }
