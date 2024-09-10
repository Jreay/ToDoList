import { CommonModule } from '@angular/common';
import { Component, output, ViewChild, ElementRef  } from '@angular/core';
import { ToDo } from '../Components.interface';
import { ComponentsService } from '../Components.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: `./Input.component.html`,
  styleUrl: './Input.component.css',
})
export class SharedComponent { 

  constructor(private componentsService: ComponentsService) { }

  public toDo = output<ToDo>();

  @ViewChild('taskInput') taskInput!: ElementRef;

  get task() {
    return this.validateInputs.get('task');
  }

  validateInputs = new FormGroup({
    task: new FormControl('', 
                          [ 
                            Validators.required, 
                            Validators.minLength(5),
                            Validators.maxLength(50)
                          ]),
  });

  onSubmit() {
    this.taskInput.nativeElement.blur();
    this.taskInput.nativeElement.focus();
    if (!this.validateInputs.valid) return;
    this.toDo.emit({
      id: this.componentsService.generateUUID(),
      task: this.task?.value!, 
      complete: false
    });
    this.validateInputs.reset();
    
  }
}
