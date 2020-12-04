var $avatarURL = document.querySelector('input');
var $avatarImage = document.querySelector('.avatar');
var $form = document.querySelector('form');
var $userName = document.querySelector('#user-name');
var $fullName = document.querySelector('#full-name');
var $location = document.querySelector('#location');
var $bio = document.querySelector('#bio');
console.log(data);

function handleSubmit(event) {
  data.profile.avatarUrl = $avatarURL.value;
  data.profile.username = $userName.value;
  data.profile.fullName = $fullName.value;
  data.profile.location = $location.value;
  data.profile.bio = $bio.value;
  localStorage.setItem('profileDataModel', JSON.stringify(data.profile));

  $form.reset();
}

function handleInputEvent(event) {
  var attr = event.target.value;

  if (event.target.matches('#avatar-url')) {
    $avatarImage.setAttribute('src', attr);
  }
}

$form.addEventListener('submit', handleSubmit);
$avatarURL.addEventListener('input', handleInputEvent);
