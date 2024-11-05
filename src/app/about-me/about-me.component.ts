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
  description: Array<string> = [`Hello! I'm Vihaan, a passionate and dedicated Web and Mobile developer with a strong commitment to creating innovative and efficient solutions. I specialize in React JS and React Native, and I am continually exploring new technologies to enhance my skill set.`,
    `I have worked as part of both small and large teams as part of my roles in both established software giants like VMware and as part of a startup like Copan Consultancy.`,
    `I believe that great design is essential to providing an exceptional user experience, and I strive to make every project both functional and aesthetically pleasing. My portfolio reflects my journey and growth in this field, showcasing a variety of projects that highlight my expertise and capabilities.
With a keen eye for detail and a commitment to quality, I approach each project with an open mind and a desire to push boundaries. Collaborating with clients and understanding their vision helps me create tailor-made solutions that meet their needs.`,
    `In my spare time, I enjoy video games and sudoku, which further fuels my creativity and passion for this industry. I am excited to take on new challenges and am always open to opportunities that allow me to grow and contribute as a professional. Feel free to reach out if you'd like to connect or learn more about my work!`];
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
