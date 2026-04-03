import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Book } from '../book/book';
import { Courses } from '../courses/courses';
import { Email } from '../email/email';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About, Book, Courses, Email],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {}
