import { Injectable } from "@angular/core";
import { Hero } from "../interface/hero.interface";
import { HEROES } from "../mock/mock-heroes";
import { Observable, of } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class HeroService {
    public heroes: Hero[] = [];
    constructor(){}
    public getHeroes():Observable<Hero[]>{
        const heroes = of(HEROES);
        return heroes;
      }
    public delete(id:number){
      this.heroes = this.heroes.filter(h => h.id !== id);
    }
}
  