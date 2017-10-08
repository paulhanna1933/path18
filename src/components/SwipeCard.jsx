import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lawyer from '../img/LAWYER.png';
import Doctor from '../img/doctor.png';
import Engineer from '../img/engineer.png';

const careers = [
  {
    image: Lawyer,
    title: 'Lawyer',
    subTitle: 'Serve & protect in the court of law',
    description: 'A lawyer (also called an "advocate", "attorney", "barrister", "counsel", "counsellor", or "solicitor") is someone who practices law. A lawyer has earned a degree in law, and has a license to practice law in a particular area. If people have any problem regarding the law, they can contact a lawyer for advice.'
  },{
    image: Doctor,
    title: 'Doctor',
    subTitle: ' A doctor diagnoses and treats diseases and conditions',
    description: 'Doctors are trained in medical schools which are usually part of a university. They usually hold a college degree in medicine. Doctors work in hospitals, medical clinics, from their own offices, or may even visit people in their homes. They may also work for schools, companies, sports teams, or the military. Medical doctors are often assisted in their work by nurses.'
  }, {
    image: Engineer,
    title: 'Engineer',
    subTitle: 'Engineers are people who invent, design, analyse, build and test machines',
    description: 'A professional engineer is competent by virtue of his/her fundamental education and training to apply the scientific method and outlook to the analysis and solution of engineering problems. He/she is able to assume personal responsibility for the development and application of engineering science and knowledge, notably in research, design, construction, manufacturing, superintending, managing and in the education of the engineer.'
  },
];

class SwipeCard extends Component {

  state = {
    activeCareerIndex: 0
  }

nextCareer = () => {
  const { activeCareerIndex } = this.state;

  if(activeCareerIndex < careers.length -1) {
    this.setState({
      activeCareerIndex: activeCareerIndex + 1
    });
  } else {
    this.setState({
      activeCareerIndex:0
    });
  }
}

  render(){
    const activeCareer =
    careers[this.state.activeCareerIndex];


    return(
      <div>
        <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={activeCareer.image}/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4"><strong>{activeCareer.title}</strong><i className="material-icons right small">info</i></span>
        <p>{activeCareer.subTitle}</p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4"><strong>{activeCareer.title}</strong><i className="material-icons right">close</i></span>
        <p>{activeCareer.description}</p>
      </div>
    </div>
    <div className="like-dislike">
      <i className="fa fa-times fa-5x" aria-hidden="true" onClick={this.nextCareer}></i>
      <i className="fa fa-heart fa-5x" aria-hidden="true" onClick={this.nextCareer}></i>
    </div>
      </div>


    )
  }
}

export default SwipeCard;
