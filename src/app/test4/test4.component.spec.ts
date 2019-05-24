import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test4Component } from './test4.component';

describe('Test4Component', () => {
  let component: Test4Component;
  let fixture: ComponentFixture<Test4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });



  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });


  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Test4Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test-bazel!');
  });*/
});
