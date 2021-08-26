import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() selectedItem = new EventEmitter<string>();

  collapsed = true;

  onSelect(recipe: string) {
    this.selectedItem.emit(recipe);
  }
}
