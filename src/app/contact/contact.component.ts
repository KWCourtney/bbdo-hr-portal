import { Component } from '@angular/core';
import { Tab } from './tab';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  header = 'Contact';
  header1 = 'Us.';
  description = ''
  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolorcat cupidatat non proident.'
  ;


  tabs: Tab[] = [
    {
      title: 'ATL',
      active: true,
      iconClass: 'fab fa-html5',
      content: `<strong>HTML(HyperText Markup Language)</strong> is the most basic building block of the Web.
        It describes and defines the content of a webpage along with the basic layout of the webpage.
        Other technologies besides HTML are generally used to describe a web page's
        appearance/presentation(CSS) or functionality/ behavior(JavaScript).`,
        icon: 'xxx',
        name: 'xxx',
        email: 'xxx',
        phone: 'xxx',
        duty1: 'xxx',
        duty2: 'xxx',
        duty3: 'xxx',
    },
    {
      title: 'NYC',
      active: false,
      iconClass: 'fab fa-css3',
      content: `<strong>Cascading Style Sheets(CSS)</strong> is a stylesheet language used to describe
        the presentation of a document written in HTML or XML (including XML dialects
        such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen,
        on paper, in speech, or on other media.`,
        icon: 'xxx',
        name: 'xxx',
        email: 'xxx',
        phone: 'xxx',
        duty1: 'xxx',
        duty2: 'xxx',
        duty3: 'xxx',
    },
    {
      title: 'SF',
      active: false,
      iconClass: 'fab fa-js-square',
      content: `<strong>JavaScript(JS)</strong> is a lightweight interpreted or JIT-compiled programming
        language with first-class functions. While it is most well-known as the scripting
        language for Web pages, many non-browser environments also use it, such as Node.js,
        Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
        dynamic language, supporting object-oriented, imperative, and declarative
        (e.g. functional programming) styles.`,
        icon: 'xxx',
        name: 'xxx',
        email: 'xxx',
        phone: 'xxx',
        duty1: 'xxx',
        duty2: 'xxx',
        duty3: 'xxx',
    }
  ];

}
