import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ImagesGalleryComponent } from './images-gallery.component'
import { DetailProductComponent } from '../detail-product.component'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatIconModule } from '@angular/material/icon'

describe('ImagesGalleryComponent', () => {
  let component: ImagesGalleryComponent
  let fixture: ComponentFixture<ImagesGalleryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        RouterTestingModule,
        MatIconModule
      ],
      declarations: [ImagesGalleryComponent, DetailProductComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGalleryComponent)
    component = fixture.componentInstance
    component.images = [
      'https://www.neobyte.es/32697-thickbox_default/portatil-asus-g512lw-hn038-i7-10750h-16gb-512gb.jpg',
      'https://www.neobyte.es/32698-thickbox_default/portatil-asus-g512lw-hn038-i7-10750h-16gb-512gb.jpg',
      'https://www.neobyte.es/32693-thickbox_default/portatil-asus-g512lw-hn038-i7-10750h-16gb-512gb.jpg',
      'https://www.neobyte.es/32694-thickbox_default/portatil-asus-g512lw-hn038-i7-10750h-16gb-512gb.jpg',
      'https://www.neobyte.es/32695-thickbox_default/portatil-asus-g512lw-hn038-i7-10750h-16gb-512gb.jpg'
    ]
    component.ngOnInit()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should add 1 to currentLargeImg', () => {
    component.imageSlider('next')
    expect(component.currentLargeImg).toBe(1)
  })
  it('should rest 1 to currentLargeImg', () => {
    component.currentLargeImg = 4
    component.imageSlider('prev')
    expect(component.currentLargeImg).toBe(3)
  })
  it('should return if currentLargImge is 0', () => {
    component.imageSlider('prev')
    expect(component.imageSlider('prev')).toBe(false)
    expect(component.currentLargeImg).toBe(0)
  })
  it('should return if currentLargImge is 5', () => {
    component.currentLargeImg = 4
    component.imageSlider('next')
    expect(component.imageSlider('next')).toBe(false)
    expect(component.currentLargeImg).toBe(4)
  })
  it('should return default break', () => {
    expect(component.imageSlider('')).toBe(true)
  })
})
