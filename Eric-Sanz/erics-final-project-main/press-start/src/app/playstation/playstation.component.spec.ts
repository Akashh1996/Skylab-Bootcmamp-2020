import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlaystationComponent } from './playstation.component';

describe('PlaystationComponent', () => {
  let component: PlaystationComponent;
  let fixture: ComponentFixture<PlaystationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaystationComponent ],
      providers: [HttpClient],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
