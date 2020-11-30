import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
//import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroeListComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

 // constructor(private heroService: HeroService, ) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    //this.heroService.getHeroes()
       // .subscribe(heroes => this.heroes = heroes);
  }
}



