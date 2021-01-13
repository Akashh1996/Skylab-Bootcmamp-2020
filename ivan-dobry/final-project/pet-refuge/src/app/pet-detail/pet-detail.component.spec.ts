import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

import { PetDetailComponent } from './pet-detail.component';
import { Subject } from 'rxjs';

describe('PetDetailComponent', () => {
  let service: AuthService;
  let component: PetDetailComponent;
  let fixture: ComponentFixture<PetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetDetailComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule, AngularFireModule],
      providers: [AuthService, { provide: AngularFireAuth },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '5fc8d1748831a83090096bd31' })
            }
          }

        }
      ]
    })
      .compileComponents();
    service = TestBed.inject(AuthService);
  });

  beforeEach(() => {
    const mySubject = new Subject<User>();
    mySubject.next({
      uid: '1234',
      email: 'ivandobry@hotmail.es',
      photoURL: 'photo',
      displayName: 'Ivan',
      favourite: []
    });
    service.setUser(mySubject);
    fixture = TestBed.createComponent(PetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });
});
