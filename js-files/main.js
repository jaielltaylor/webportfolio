let input = document.getElementById('email');
let button = document.getElementById('submit');
//button.disabled = true;
//input.addEventListener("change", stateHandle);
function stateHandle() 
{
  if (document.getElementsByClassName("input").value === "")
  {
    button.disabled = true; 
    console.log('true');
  } 
  else 
  {
    button.disabled = false;
    console.log('false');
  }
}

/*Navigation*/
function scrollToPersonal()
{
    window.scrollTo
    ({
        top: 6000, /*subject to change*/
        behavior: 'smooth'
    });
}

function scrollToTop()
{
  document.querySelector('.header').scrollIntoView
  ({
    behavior: 'smooth'
  });
}

function scrollToThing()
{
  window.scrollTo
  ({
    top: 0,
    behavior: 'smooth'
  })
}

$(document).ready(function () {
    $('#open-contact').on('click', function()
    {
        $('#contact-holder').fadeIn();
        $('body').addClass('overflow-hidden');
    });

    $('.go-back').on('click', function()
    {
        $('.popup').fadeOut();
        $('body').removeClass('overflow-hidden');
    });
});
