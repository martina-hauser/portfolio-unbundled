import $ from 'jquery';

$(document).ready(function () {
  let timer = setInterval(countSeconds, 1000);
  let secs = 0;

  let techSkills = {
    skills: Array.from(document.querySelectorAll('.skillsTechnologiesList-visualRating')),
    checkedSkillsBulletType: document.querySelector('#skillsTechnologiesList .bullet-checked'),
    animHasStarted: false,
    prefix: 'skillsTechnologiesList-'
  };

  let softwareSkills = {
    skills: Array.from(document.querySelectorAll('.skillsSoftwareList-visualRating')),
    checkedSkillsBulletType: document.querySelector('#skillsSoftwareList .bullet-checked'),
    animHasStarted: false,
    prefix: 'skillsSoftwareList-'
  };

  let variousSkills = {
    skills: Array.from(document.querySelectorAll('.skillsVariousList-visualRating')),
    checkedSkillsBulletType: document.querySelector('#skillsVariousList .bullet-checked'),
    animHasStarted: false,
    prefix: 'skillsVariousList-'
  };


  // check if element is in viewport and start animation
  if (window.location.href.search('page=skills') >= 0) {
    checkIfVisibleAndStartAnimation(techSkills);
    checkIfVisibleAndStartAnimation(softwareSkills);
    checkIfVisibleAndStartAnimation(variousSkills);

    document.addEventListener('scroll', () => {
      if (techSkills.animHasStarted && softwareSkills.animHasStarted && variousSkills.animHasStarted) {
        clearInterval(timer);
      }
      checkIfVisibleAndStartAnimation(techSkills);
      checkIfVisibleAndStartAnimation(softwareSkills);
      checkIfVisibleAndStartAnimation(variousSkills);
    });
  }


  // function declarations
  function countSeconds() {
    secs++;
    return secs;
  }

  function checkIfVisibleAndStartAnimation(skillsObject) {
    skillsObject.skills.forEach(skill => {
      if (isElemVisibleInViewport(skill) && !skillsObject.animHasStarted) {
        startSkillsRatingAnimation(skillsObject.checkedSkillsBulletType, skillsObject.prefix);
        skillsObject.animHasStarted = true;
      }
    });
  }

  function isElemVisibleInViewport(elem) {
    let elemPosition = elem.getBoundingClientRect();
    return elemPosition.top >= 0
      && elemPosition.left >= 0
      && elemPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && elemPosition.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  function startSkillsRatingAnimation(bulletType, prefix) {
    let animTag = $(bulletType).next('animate');

    if (animTag.length > 0) {
      $(`#${prefix}bulletArea`).next('animate').attr('begin', `${secs + 1}s`);
      $(`#${prefix}bulletStroke`).next('animate').attr('begin', `${secs + 1}s`);
    }
  }
});