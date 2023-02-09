import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/core/components/sidebar/sidebar.component';
import { TemtemComponent } from './modules/temtem/components/temtem/temtem.component';
import { MainComponent } from './modules/main/components/main/main.component';
import { TemtemCardComponent } from './modules/temtem/components/temtem-card/temtem-card.component';
import { TypeBadgeComponent } from './modules/shared/components/type-badge/type-badge.component';
import { LoadingAnimationComponent } from './modules/shared/components/loading-animation/loading-animation.component';
import { FilterAreaComponent } from './modules/temtem/components/filter-area/filter-area.component';
import { TemtemRouteComponent } from './modules/temtem/components/temtem-route/temtem-route.component';
import { SearchbarComponent } from './modules/temtem/components/filter-area/searchbar/searchbar.component';
import { TypesFilterComponent } from './modules/temtem/components/filter-area/types-filter/types-filter.component';
import { PresentationComponent } from './modules/temtem/components/filter-area/presentation/presentation.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TemtemEffects } from './modules/core/store/temtem/temtem.effetcs';
import { temtemFeature } from './modules/core/store/temtem/temtem.reducer';
import { SingleTemtemViewComponent } from './modules/temtem/components/single-temtem-view/single-temtem-view.component';
import { SingleTemtemBodyComponent } from './modules/temtem/components/single-temtem-view/single-temtem-body/single-temtem-body.component';
import { SingleTemtemDetailsComponent } from './modules/temtem/components/single-temtem-view/single-temtem-body/single-temtem-details/single-temtem-details.component';
import { SingleTemtemImageComponent } from './modules/temtem/components/single-temtem-view/single-temtem-body/single-temtem-image/single-temtem-image.component';
import { SingleTemtemLocationsComponent } from './modules/temtem/components/single-temtem-view/single-temtem-body/single-temtem-locations/single-temtem-locations.component';
import { SingleTemtemDescriptionComponent } from './modules/temtem/components/single-temtem-view/single-temtem-body/single-temtem-description/single-temtem-description.component';
import { SingleTemtemEvolutionComponent } from './modules/temtem/components/single-temtem-view/single-temtem-body/single-temtem-evolution/single-temtem-evolution.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TemtemComponent,
    MainComponent,
    TemtemCardComponent,
    TypeBadgeComponent,
    LoadingAnimationComponent,
    FilterAreaComponent,
    TemtemRouteComponent,
    SearchbarComponent,
    TypesFilterComponent,
    PresentationComponent,
    SingleTemtemViewComponent,
    SingleTemtemBodyComponent,
    SingleTemtemDetailsComponent,
    SingleTemtemImageComponent,
    SingleTemtemLocationsComponent,
    SingleTemtemDescriptionComponent,
    SingleTemtemEvolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(temtemFeature),
    EffectsModule.forRoot([TemtemEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
