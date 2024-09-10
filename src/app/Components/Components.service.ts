import { Injectable, output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor() { }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        if (v === 9) v = 8;
        if (v === 1) v = 0;
        return v.toString(16);
    });
  }
  
}
