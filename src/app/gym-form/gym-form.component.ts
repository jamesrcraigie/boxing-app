import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GymService } from '../gym.service';
import { Gym } from '../../models/gym';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gym-form.component.html',
  styleUrl: './gym-form.component.css'
})
export class GymFormComponent {

  gym: Gym = {
    id: undefined,
    name: '',
    address: '',
    boxers: []
  };

  errorMessage = "";

  constructor(private gymService: GymService, private router: Router) {}

  onSubmit(): void {
    this.gymService.createGym(this.gym).subscribe({
      next: (res) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = `Error occured during creation: ${err.status} - ${err.message}`;
      }
    })
  }
}
