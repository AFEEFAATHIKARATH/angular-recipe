import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;  // Cast to HTMLInputElement
    this.search.emit(input.value);  // Use input.value
  }
}