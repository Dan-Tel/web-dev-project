import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreListPageComponent } from './genre-list-page.component';

describe('GenreListPageComponent', () => {
  let component: GenreListPageComponent;
  let fixture: ComponentFixture<GenreListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
