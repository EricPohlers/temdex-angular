import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Temtem } from 'src/app/modules/temtem/models/interfaces';
import { environment } from 'src/environments/environment';
import {
  fetchTemtems,
  setAllTemtems,
  setIsLoadingTemtems,
  setTemtemsError,
} from './temtem.actions';

@Injectable()
export class TemtemEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store
  ) {}

  fetchTemtems = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchTemtems),
      tap(() =>
        this.store.dispatch(setIsLoadingTemtems({ isLoadingTemtems: true }))
      ),
      switchMap(() => {
        return this.http.get<Temtem[]>(`${environment.baseUrl}/api/temtems`);
      }),
      map((response) => setAllTemtems({ temtems: response })),
      catchError((error) => of(setTemtemsError({ error })))
    );
  });
  // fetchTemtems = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(fetchTemtems),
  //     switchMap((action) => {
  //       return this.http.get<Temtem[]>(`${environment.baseUrl}/api/temtems`).pipe(

  //       );
  //     }),
  //     map((response) => setAllTemtems({ temtems: response })),
  //     catchError((error) => of(setTemtemsError({ error })))
  //   );
  // });
}
