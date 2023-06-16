import { Component } from '@angular/core';
import { Mode } from './definitions/toggle.enum';
import { ModeToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDark: boolean = false;

  /**
   * current active mode
   */
  currentMode: Mode = Mode.LIGHT;
  constructor(private modeToggleService: ModeToggleService) {
    /**
     * Example code that demonstrate the modeChanged$ observable behavior and usage
     */
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }
}
