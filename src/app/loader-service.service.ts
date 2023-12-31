import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor() {}

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  get isLoading$() {
    return this.isLoading.asObservable();
  }
}
