import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2Component } from './test2.component';

describe('Test2Component', () => {
  let component: Test2Component;
  let fixture: ComponentFixture<Test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });*/
});
