import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;
}
