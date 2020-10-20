/* eslint-disable no-undef */
/* eslint-disable strict */


$('img').on('click', e => {

  $('#featured').attr('src', e.target.src).attr('alt', e.target.alt);
  //update the featured img src with e.target.src
  //update the featured img alt with e.target.alt

  //debugger;
});
