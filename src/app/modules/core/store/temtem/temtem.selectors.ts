import { createSelector } from '@ngrx/store';
import { temtemFeature } from './temtem.reducer';

export const selectAllTemtems = createSelector(
  temtemFeature.selectAllTemtems,
  (allTemtems) => allTemtems
);
export const selectSearchTerm = createSelector(
  temtemFeature.selectSearchTerm,
  (searchTerm) => searchTerm
);
export const selectSelectedTypes = createSelector(
  temtemFeature.selectSelectedTypes,
  (selectedTypes) => selectedTypes
);
export const selectIsloadingTemtems = createSelector(
  temtemFeature.selectIsLoadingTemtems,
  (isLoadingTemtems) => isLoadingTemtems
);
export const selectErrorTemtems = createSelector(
  temtemFeature.selectErrorTemtems,
  (errorTemtems) => errorTemtems
);

export const selectSelectedTemtem = createSelector(
  temtemFeature.selectSelectedTemtem,
  (selectedTemtem) => selectedTemtem
);

export const selectTemtemState = createSelector(
  temtemFeature.selectAllTemtems,
  temtemFeature.selectSearchTerm,
  temtemFeature.selectSelectedTypes,
  temtemFeature.selectIsLoadingTemtems,
  temtemFeature.selectErrorTemtems,
  temtemFeature.selectSelectedTemtem,
  (
    allTemtems,
    searchTerm,
    selectedTypes,
    isLoadingTemtems,
    errorTemtems,
    selectedTemtem
  ) => ({
    allTemtems,
    searchTerm,
    selectedTypes,
    isLoadingTemtems,
    errorTemtems,
    selectedTemtem,
  })
);
