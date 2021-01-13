import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss']
})

export class ImagesGalleryComponent implements OnInit {
  ngOnInit (): void {
    this.currentLargeImg = 0
  }

  @Input() images: string[]

  currentLargeImg: number

  imageSlider (navigation: string): boolean {
    switch (navigation) {
      case 'prev':
        if (this.currentLargeImg === 0) return false
        this.currentLargeImg -= 1
        break
      case 'next':
        if (this.currentLargeImg === this.images.length - 1) return false
        this.currentLargeImg += 1
        break
      default:
        return true
    }
  }
}
