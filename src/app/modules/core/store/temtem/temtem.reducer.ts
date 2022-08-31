import { createFeature, createReducer, on } from '@ngrx/store';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { types } from 'src/app/modules/shared/services/type.service';
import { Temtem } from 'src/app/modules/temtem/models/interfaces';
import {
  setAllTemtems,
  setIsLoadingTemtems,
  setSearchTerm,
  setSelectedTemtem,
  setSelectedTypes,
  setTemtemsError,
} from './temtem.actions';

export const featureName = 'allTemtems';

export interface ReducerTemtemState {
  allTemtems: ReadonlyArray<Temtem>;
  searchTerm: Readonly<string>;
  selectedTypes: ReadonlyArray<Type>;
  isLoadingTemtems: Readonly<boolean>;
  errorTemtems: Readonly<string>;
  selectedTemtem: Readonly<Temtem | undefined>;
}

export const initialState: ReducerTemtemState = {
  allTemtems: [],
  searchTerm: '',
  selectedTypes: types,
  isLoadingTemtems: false,
  errorTemtems: '',
  selectedTemtem: undefined,
};

export const temtemFeature = createFeature({
  name: 'temtems',
  reducer: createReducer(
    initialState,
    on(setAllTemtems, (state, action) => {
      const temtems = action.temtems;
      return { ...state, allTemtems: temtems, isLoadingTemtems: false };
    }),
    on(setSearchTerm, (state, action) => {
      const searchTerm = action.searchTerm;
      return { ...state, searchTerm };
    }),
    on(setSelectedTypes, (state, action) => {
      const selectedTypes = action.selectedTypes;
      return { ...state, selectedTypes };
    }),
    on(setTemtemsError, (state, action) => {
      const error = action.error;
      return { ...state, errorTemtems: error, isLoadingTemtems: false };
    }),
    on(setIsLoadingTemtems, (state, action) => {
      return { ...state, isLoadingTemtems: true };
    }),
    on(setSelectedTemtem, (state, action) => {
      return { ...state, selectedTemtem: action.selectedTemtem };
    })
  ),
});
