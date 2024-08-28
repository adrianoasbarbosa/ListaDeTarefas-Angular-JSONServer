import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();

  faTimes = faTimes

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa);
  }
}
