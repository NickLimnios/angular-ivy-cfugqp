import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  topHeroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getTopHeroes(5);
  }

  getTopHeroes(top?: number): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.topHeroes = heroes.slice(1, top ?? 5)));
  }
}
