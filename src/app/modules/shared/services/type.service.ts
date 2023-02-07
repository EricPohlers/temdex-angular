import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSelectedTypes } from '../../core/store/temtem/temtem.actions';

import { Type } from '../models/interfaces';
import { colors } from '../utils/colors';

export const types: Type[] = [
  {
    name: 'Neutral',
    icon: '/images/icons/types/Neutral.png',
    badgeColor: colors.neutralBadgeColor,
    bgColor: colors.neutralBgColor,
    fromBgColor: colors.neutralFromBgColor,
    toBgColor: colors.neutralToBgColor,
  },
  {
    name: 'Fire',
    icon: '/images/icons/types/Fire.png',
    badgeColor: colors.fireBadgeColor,
    bgColor: colors.fireBgColor,
    fromBgColor: colors.fireFromBgColor,
    toBgColor: colors.fireToBgColor,
  },
  {
    name: 'Water',
    icon: '/images/icons/types/Water.png',
    badgeColor: colors.waterBadgeColor,
    bgColor: colors.waterBgColor,
    fromBgColor: colors.waterFromBgColor,
    toBgColor: colors.waterToBgColor,
  },
  {
    name: 'Nature',
    icon: '/images/icons/types/Nature.png',
    badgeColor: colors.natureBadgeColor,
    bgColor: colors.natureBgColor,
    fromBgColor: colors.natureFromBgColor,
    toBgColor: colors.natureToBgColor,
  },
  {
    name: 'Electric',
    icon: '/images/icons/types/Electric.png',
    badgeColor: colors.electricBadgeColor,
    bgColor: colors.electricBgColor,
    fromBgColor: colors.electricFromBgColor,
    toBgColor: colors.electricToBgColor,
  },
  {
    name: 'Earth',
    icon: '/images/icons/types/Earth.png',
    badgeColor: colors.earthBadgeColor,
    bgColor: colors.earthBgColor,
    fromBgColor: colors.earthFromBgColor,
    toBgColor: colors.earthToBgColor,
  },
  {
    name: 'Mental',
    icon: '/images/icons/types/Mental.png',
    badgeColor: colors.mentalBadgeColor,
    bgColor: colors.mentalBgColor,
    fromBgColor: colors.mentalFromBgColor,
    toBgColor: colors.mentalToBgColor,
  },
  {
    name: 'Wind',
    icon: '/images/icons/types/Wind.png',
    badgeColor: colors.windBadgeColor,
    bgColor: colors.windBgColor,
    fromBgColor: colors.windFromBgColor,
    toBgColor: colors.windToBgColor,
  },
  {
    name: 'Digital',
    icon: '/images/icons/types/Digital.png',
    badgeColor: colors.digitalBadgeColor,
    bgColor: colors.digitalBgColor,
    fromBgColor: colors.digitalFromBgColor,
    toBgColor: colors.digitalToBgColor,
  },
  {
    name: 'Melee',
    icon: '/images/icons/types/Melee.png',
    badgeColor: colors.meleeBadgeColor,
    bgColor: colors.meleeBgColor,
    fromBgColor: colors.meleeFromBgColor,
    toBgColor: colors.meleeToBgColor,
  },
  {
    name: 'Crystal',
    icon: '/images/icons/types/Crystal.png',
    badgeColor: colors.crystalBadgeColor,
    bgColor: colors.crystalBgColor,
    fromBgColor: colors.crystalFromBgColor,
    toBgColor: colors.crystalToBgColor,
  },
  {
    name: 'Toxic',
    icon: '/images/icons/types/Toxic.png',
    badgeColor: colors.toxicBadgeColor,
    bgColor: colors.toxicBgColor,
    fromBgColor: colors.toxicFromBgColor,
    toBgColor: colors.toxicToBgColor,
  },
];

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(private store: Store) {}

  getTypes() {
    return types;
  }

  getTypeByName(name: string): Type {
    const type = types.find((type) => type.name === name);
    if (type) {
      return type;
    }

    return types[0];
  }

  updateSelectedTypes(clickedType: Type, selectedTypes: ReadonlyArray<Type>) {
    if (selectedTypes.length < types.length) {
      if (selectedTypes.includes(clickedType)) {
        const tempArray = selectedTypes.filter(
          (type) => type.name !== clickedType.name
        );
        this.store.dispatch(
          setSelectedTypes({
            selectedTypes: tempArray.length > 0 ? tempArray : types,
          })
        );
      } else {
        this.store.dispatch(
          setSelectedTypes({
            selectedTypes: [...selectedTypes, clickedType],
          })
        );
      }
    } else {
      this.store.dispatch(
        setSelectedTypes({
          selectedTypes: [clickedType],
        })
      );
    }
  }
}
