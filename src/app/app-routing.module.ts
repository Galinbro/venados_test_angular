import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { StatsComponent } from './stats/stats.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
    { path: '', component: GamesComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'players', component: PlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
