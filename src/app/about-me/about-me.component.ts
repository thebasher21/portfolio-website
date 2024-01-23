import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  name: string = 'About Me';
  imagePath: string = '../assets/ProfileImage.jpg';
  @ViewChild('About Me') sectionRef: ElementRef = inject(ElementRef);
  isInView = false;
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      this.isInView = entries[0].isIntersecting;
    });
    observer.observe(this.sectionRef.nativeElement);
  }
  // constructor(private renderer: Renderer2) {}
  // ngOnInit(): void {
  //   this.renderer.listen(window, 'scroll', () => {
  //     const imageRect = this.imageRef.nativeElement.getBoundingClientRect();
  //     const imageTop = imageRect.top;
  //     const imageBottom = imageRect.bottom;
  //     const windowHeight = window.innerHeight;
  //     const isInView =
  //       (imageTop >= 0 && imageTop <= windowHeight) ||
  //       (imageBottom >= 0 && imageBottom <= windowHeight);
  //     if (isInView) {
  //       this.renderer.addClass(this.imageRef.nativeElement, 'is-in-view');
  //     } else {
  //       this.renderer.removeClass(this.imageRef.nativeElement, 'is-in-view');
  //     }
  //   });
  // }
}
