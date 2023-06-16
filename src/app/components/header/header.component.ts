import { Component, Input, OnInit } from '@angular/core';
import { ModeToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark: boolean = false;

  constructor(private modeToggleService: ModeToggleService) {}

  toggle() {
    this.modeToggleService.toggleMode();
    this.isDark = !this.isDark;
  }

  ngOnInit(): void {}
}
