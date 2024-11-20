import { Routes } from '@angular/router';
import { BoxerTableComponent } from './boxer-table/boxer-table.component';
import { BoxerFormComponent } from './boxer-form/boxer-form.component';
import { GymFormComponent } from './gym-form/gym-form.component';
import { FightFormComponent } from './fight-form/fight-form.component';

export const routes: Routes = [
    {path: '', component: BoxerTableComponent },
    {path: 'createBoxer', component: BoxerFormComponent},
    {path: 'createGym', component: GymFormComponent},
    {path: 'registerFight', component: FightFormComponent},
    {path: 'updateBoxer/:id', component: BoxerFormComponent},
    {path: 'boxers', redirectTo: '', pathMatch: 'full'},
];
