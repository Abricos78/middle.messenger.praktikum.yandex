import Handlebars from "handlebars/dist/handlebars.runtime";
import template from './NavigationPages.hbs';
import './index.scss';
const root = document.getElementById('nav')
root.innerHTML = template()