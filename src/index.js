import './style.css';
import { Model } from './model.js';

import { Controller } from './Controller.js';

import { NavigationView } from './views/navigationView.js';
import { ContentView } from './views/contentView.js';

const navigation = new Controller(new Model(), new NavigationView(), new ContentView());






