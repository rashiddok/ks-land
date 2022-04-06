import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeService } from 'src/app/services/theme.service';

import { ThemeSwitcherComponent } from './theme-switcher.component';

describe('ThemeSwitcherComponent', () => {
  let component: ThemeSwitcherComponent;
  let fixture: ComponentFixture<ThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeSwitcherComponent ],
      providers: [ThemeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch theme', ()=>{
    const buttonEl = fixture.debugElement.nativeElement.querySelector('.switch');
    buttonEl.click()
    expect(component.activeTheme).toBe('dark')
  })
});
