import { Component } from '@angular/core';
import { Boxer } from '../../models/boxer';
import { BoxerService } from '../boxer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'boxer-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boxer-table.component.html',
  styleUrl: './boxer-table.component.css'
})
export class BoxerTableComponent {

  boxers: Boxer[] = []; 

  constructor(private boxerService: BoxerService, private router: Router) {}

  ngOnInit() {
    this.boxerService.getBoxers().subscribe((data: Boxer[]) => {
      this.boxers = data;
      console.log(data);
    })
  }

  deleteBoxer(id: string) : void {
    this.boxerService.deleteBoxer(id).subscribe({
      next: (res) => {
        this.boxers = this.boxers.filter(b => b.id != id);
      },
      error: (err) => {
        console.error('Error deleting boxer', err)
      }
    })
  }

  updateBoxer(id: string): void {
    this.router.navigate(['/updateBoxer', id]);
  }
}
