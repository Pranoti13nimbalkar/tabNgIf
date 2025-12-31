import { Component, OnInit } from '@angular/core';
import { ITab } from '../models/tab';

@Component({
  selector: 'app-ng-for-tab',
  templateUrl: './ng-for-tab.component.html',
  styleUrls: ['./ng-for-tab.component.scss']
})
export class NgForTabComponent implements OnInit {
 selectedSkill:string= 'html'
 skillsArr :ITab[]=[
  {
   skillName:'Html',
   SkillInfo:'Hypertext Markup Language (HTML) is the standard markup language[a] for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
 },
  {
   skillName:'Css',
   SkillInfo:'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[2] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript..'
 },
  {
   skillName:'Javascript',
   SkillInfo:'JavaScript (JS)[a] is a programming language and core technology of the Web, alongside HTML and CSS. It was created by Brendan Eich in 1995.[6] As of 2025, the overwhelming majority of websites (98.9%) uses JavaScript on the client side for webpage behavior'
 },
 {
   skillName:'Angular',
   SkillInfo:'These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page applications for enterprises. Tutorials and guides include downloadable examples to help you start your projects.'
 }

 
]
  constructor() { }

  ngOnInit(): void {
  }

}
