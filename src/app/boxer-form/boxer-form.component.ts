import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Boxer } from '../../models/boxer';
import { Gym } from '../../models/gym';
import { CommonModule } from '@angular/common';
import { GymService } from '../gym.service';
import { BoxerService } from '../boxer.service';
import { BoxerDto } from '../../models/boxerDto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boxer-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './boxer-form.component.html',
  styleUrl: './boxer-form.component.css'
})
export class BoxerFormComponent implements OnInit {

  boxer: Boxer = {
    id: '',
    dateOfBirth: new Date(),
    firstName: '',
    lastName: '',
    wins: 0,
    loses: 0,
    registeredGymId: '',
    registeredGymName: ''
  };

  gyms: Gym[] = [];

  isEditing: boolean = false;

  boxerDto: BoxerDto = {
    id: undefined,
    firstName: '',
    dateOfBirth: '',
    lastName: '',
    registeredGymId: ''
  }

  errorMessage = "";

  constructor(private gymService: GymService, private boxerService: BoxerService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.gymService.getGyms().subscribe((data: Gym[]) => {
      this.gyms = data;
    });
    this.route.paramMap.subscribe((result) => {
      const id = result.get('id');

      if(id) {
        //Editting boxer
        this.isEditing =true;

        this.boxerService.getBoxerById(id).subscribe({
          next: (result) => {
            this.boxer = result;
          },
          error: (err) => {
            console.log("Error loading boxer: ", err);
          }
        });
      }
    })
  }

  onSubmit(): void {
    this.boxerDto.id = this.boxer.id === '' ? undefined : this.boxer.id;
    this.boxerDto.firstName = this.boxer.firstName;
    this.boxerDto.lastName = this.boxer.lastName;
    this.boxerDto.dateOfBirth = new Date(this.boxer.dateOfBirth).toISOString();
    this.boxerDto.registeredGymId = this.boxer.registeredGymId;

    if(this.isEditing)
    {
      this.boxerService.updateBoxer(this.boxerDto).subscribe({
        next: (res) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during update: ${err.status} - ${err.message}`;
        }
      })
    } else {
      this.boxerService.createBoxer(this.boxerDto).subscribe({
        next: (res) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during creation: ${err.status} - ${err.message}`;
        }
      });
    }
  }
}
