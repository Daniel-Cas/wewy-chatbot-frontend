import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { ScrollPanelModule } from 'primeng/scrollpanel';






@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    CheckboxModule,
    ScrollPanelModule
  ]

})
export class PrimengModule { }
