import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  fetchTemtems,
  setSelectedTemtem,
} from 'src/app/modules/core/store/temtem/temtem.actions';
import {
  selectSearchTerm,
  selectTemtemState,
} from 'src/app/modules/core/store/temtem/temtem.selectors';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { environment } from 'src/environments/environment';
import { Temtem } from '../../models/interfaces';
import { TemtemService } from '../../services/temtem.service';
import { SingleTemtemViewComponent } from '../single-temtem-view/single-temtem-view.component';

@Component({
  selector: 'app-temtem',
  templateUrl: './temtem.component.html',
  styleUrls: ['./temtem.component.scss'],
})
export class TemtemComponent implements OnInit {
  environment = environment;
  temtemsListAll!: ReadonlyArray<Temtem>;
  temtemsList: Temtem[] = [];
  searchTerm$ = this.store.select(selectSearchTerm);
  selectedTypes: ReadonlyArray<Type> = [];
  isLoading = true;
  selectedTemtem: Temtem | undefined = undefined;
  showModal: boolean = true;

  @ViewChild(SingleTemtemViewComponent)
  singleTemtemViewComponent!: SingleTemtemViewComponent;

  constructor(private store: Store, private temtemService: TemtemService) {}

  ngOnInit(): void {
    this.store.dispatch(fetchTemtems());
    this.store.select(selectTemtemState).subscribe((state) => {
      // console.log(state);
      this.isLoading = state.isLoadingTemtems;
      this.temtemsListAll = state.allTemtems;
      this.temtemsList = this.temtemService.filterTemtems(
        state.searchTerm,
        state.selectedTypes,
        this.temtemsListAll
      );
      this.selectedTemtem = state.selectedTemtem;
    });

    // this.store.select(selectAllTemtems).subscribe((test) => {
    //   console.log(test);
    // });

    // this.store
    //   .select(selectState)
    //   .pipe(
    //     combineLatestWith(
    //       this.store.select(selectSearchTerm),
    //       this.store.select(selectSelectedTypes)
    //     )
    //   )
    //   .subscribe((test) => {
    //     console.log(test);

    //     this.temtemsListAll = temtems;
    //     this.temtemsList = this.temtemService.filterTemtems(
    //       searchTerm,
    //       selectedTypes,
    //       this.temtemsListAll
    //     );
    //   });
  }

  onTemtemClick = (temtem: Temtem) => {
    this.store.dispatch(setSelectedTemtem({ selectedTemtem: temtem }));
    this.singleTemtemViewComponent.showModal = true;
  };

  trackByFn(id: number, temtem: Temtem): number {
    return temtem.number;
  }
}
