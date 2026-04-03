import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {}
