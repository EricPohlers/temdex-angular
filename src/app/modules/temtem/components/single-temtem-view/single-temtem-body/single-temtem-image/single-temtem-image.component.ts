import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-temtem-image',
  templateUrl: './single-temtem-image.component.html',
  styleUrls: ['./single-temtem-image.component.scss'],
})
export class SingleTemtemImageComponent {
  @Input() wikiRenderStaticLumaUrl: string | undefined = '';
  @Input() wikiRenderAnimatedUrl: string | undefined = '';
  @Input() wikiRenderAnimatedLumaUrl: string | undefined = '';
  isLuma = false;
  isLoading: boolean = true;

  onLoad() {
    this.isLoading = false;
  }

  onLuma = () => {
    this.isLuma = !this.isLuma;
    this.isLoading = true;
  };
}
