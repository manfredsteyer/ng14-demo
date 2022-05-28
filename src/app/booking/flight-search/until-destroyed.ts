import { ChangeDetectorRef, inject, ViewRef } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

// Credits:
//  - https://netbasal.com/unleash-the-power-of-di-functions-in-angular-2eb9f2697d66 
//  - https://marmicode.io/blog/angular-inject-and-injection-functions?v=1


export function untilDestroyed() {
    const subject = new Subject<void>();
  
    const viewRef = inject(ChangeDetectorRef) as ViewRef;
  
    queueMicrotask(() => {
        viewRef.onDestroy(() => {
            subject.next();
            subject.complete()
          });
    })
  
    return takeUntil(subject.asObservable())
  } 