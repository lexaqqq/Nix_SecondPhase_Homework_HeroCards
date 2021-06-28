import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../interface/hero.interface';
import { HeroService } from '../services/hero.service';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-heroes-board',
  templateUrl: './heroes-board.component.html',
  styleUrls: ['./heroes-board.component.scss']
})
export class HeroesBoardComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero!: Hero;
  constructor(private heroService: HeroService,
    private modalService: ModalService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  public onDelete(hero: Hero): void{
   this.heroes = this.heroes.filter(h=> h !== hero);
   this.closeModal("custom-modal-2");
  }
  public onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  public getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  public openModal(id: string) {
    this.modalService.open(id);
  }
  public closeModal(id: string) {
    this.modalService.close(id);
  }

}
