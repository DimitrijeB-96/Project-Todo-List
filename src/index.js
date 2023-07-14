import './style.css';
import { Model } from './model.js';

import { NavigationController } from './controllers/navigationController.js';
import { NavigationView } from './views/navigationView.js';

import { ContentController } from './controllers/contentController.js';
import { ContentView } from './views/contentView.js';



const navigation = new NavigationController(new Model(), new NavigationView());
const content = new ContentController(new Model(), new ContentView());






