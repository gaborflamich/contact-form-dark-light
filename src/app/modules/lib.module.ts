import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeToggleModule } from './toggle.module';

/**
 * Library module
 * Contains
 *  * ModeToggleModule (for now)
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, ModeToggleModule],
  exports: [ModeToggleModule],
})
export class LibModule {}
