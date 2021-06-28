import { Component, OnInit, ElementRef, Input, OnDestroy, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!:string;
  @Output() onRemove = new EventEmitter<number>();
  private element: any;
  constructor(private modalService: ModalService, private el: ElementRef) { 
    this.element = el.nativeElement;
  }
  ngOnInit(): void {
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }
  public ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  public open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('app-modal-open');
  }
  public close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('app-modal-open');
  }
}
