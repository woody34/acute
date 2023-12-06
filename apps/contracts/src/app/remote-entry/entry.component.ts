import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'acute-contracts-entry',
  template: `<acute-nx-welcome></acute-nx-welcome>`,
})
export class RemoteEntryComponent {}
