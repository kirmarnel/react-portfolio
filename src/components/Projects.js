import React from 'react';
import pcImg from '../assets/images/PawsAndClaws.png'
import leImg from '../assets/images/LetsEat.png'
import wdImg from '../assets/images/WeatherDash.png'
import dpImg from '../assets/images/DayPlanner.png'
import udImg from '../assets/images/UserDirectory.png'
import btImg from '../assets/images/BudgetTracker.png'

export function Projects() {
return (
<div id='projects'>
<h1 className="is-size-3" id='projectTitle'>Projects</h1>
<div id='projectDiv'>
    <h2 id="title">Paws and Claws: https://github.com/j-toups/Paws-and-Claws</h2>
    <a href='https://pawsandclawss.herokuapp.com/'>
      <img src={pcImg} id='projectPic'/>
    </a>
    <h2 id="title">Let's Eat: https://github.com/kirmarnel/lets-eat</h2>
    <a href='https://kirmarnel.github.io/lets-eat/'>
      <img src={leImg} id='projectPic'/>
    </a>
    <h2 id="title">Weather Dashboard: https://github.com/kirmarnel/weather-dash</h2>
    <a href='https://kirmarnel.github.io/weather-dash/'>
      <img src={wdImg} id='projectPic'/>
    </a>
    <h2 id="title">Day Planner: https://github.com/kirmarnel/daily-planner</h2>
    <a href='https://kirmarnel.github.io/daily-planner/'>
      <img src={dpImg} id='projectPic'/>
    </a>
    <h2 id="title">User Directory: https://github.com/kirmarnel/User-Directory</h2>
    <a href='https://kirmarnel.github.io/User-Directory/'>
      <img src={udImg} id='projectPic'/>
    </a>
    <h2 id="title">Budget Tracker: https://github.com/kirmarnel/Budget-Tracker</h2>
    <a href=' https://rocky-cliffs-59845.herokuapp.com/'>
      <img src={btImg} id='projectPic'/>
    </a>
  </div>
  </div>
)};