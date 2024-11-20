import { Component, OnInit } from '@angular/core';
import { BoxerService } from '../boxer.service';
import { Router } from '@angular/router';
import { Boxer } from '../../models/boxer';
import { FightService } from '../fight.service';
import { Fight } from '../../models/fight';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fight-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fight-form.component.html',
  styleUrl: './fight-form.component.css'
})
export class FightFormComponent implements OnInit {
  
  errorMessage = '';

  constructor(private fightService: FightService, private boxerService: BoxerService, private router: Router) {}

  boxers: Boxer[] = [];
  
  fight: Fight = {
    date: '',
    winnerBoxerId: '',
    loserBoxerId: ''
  }

  ngOnInit() {
    this.boxerService.getBoxers().subscribe((data: Boxer[]) => {
      this.boxers = data;
    });
  }

  onSubmit(): void {
    this.fight.date = new Date(this.fight.date).toISOString();
    this.fightService.createFight(this.fight).subscribe({
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
