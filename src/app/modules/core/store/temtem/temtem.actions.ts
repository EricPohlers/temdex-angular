import { createAction, props } from '@ngrx/store';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { Temtem } from 'src/app/modules/temtem/models/interfaces';

export const fetchTemtems = createAction('[Temtem] Fetch Temtems');

export const setAllTemtems = createAction(
  '[Temtem] Set Temtems',
  props<{ temtems: ReadonlyArray<Temtem> }>()
);

export const setSelectedTemtem = createAction(
  '[Temtem] Set Selected Temtem',
  props<{ selectedTemtem: Readonly<Temtem> }>()
);

export const getSelectedTemtem = createAction('[Temtem] Get Selected Temtem');

export const setTemtemsError = createAction(
  '[Temtem] Set Error Temtems',
  props<{ error: Readonly<string> }>()
);
export const getTemtemsError = createAction('[Temtem] Get Error Temtems');

export const getIsLoadingTemtems = createAction(
  '[Temtem] Get Is Loading Temtems'
);

export const setIsLoadingTemtems = createAction(
  '[Temtem] Set Is Loading Temtems',
  props<{ isLoadingTemtems: Readonly<boolean> }>()
);

export const getSelectedTypes = createAction('[Temtem] Get Selected Types');

export const setSelectedTypes = createAction(
  '[Temtem] Set Selected Types',
  props<{ selectedTypes: ReadonlyArray<Type> }>()
);

export const getSearchTerm = createAction('[Temtem] Get Search Term');

export const setSearchTerm = createAction(
  '[Temtem] Set Search Term',
  props<{ searchTerm: string }>()
);
