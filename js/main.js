var profileDataModel = {
  avatarURL: '',
  username: '',
  fullname: '',
  location: '',
  bio: ''
};

var $avatarURL = document.querySelector('input');
var $avatarImage = document.querySelector('.avatar');
var $form = document.querySelector('form');
var $userName = document.querySelector('#user-name');
var $fullName = document.querySelector('#full-name');
var $location = document.querySelector('#location');
var $bio = document.querySelector('#bio');

function handleSubmit(event) {
  profileDataModel.avatarURL = $avatarURL.value;
  profileDataModel.username = $userName.value;
  profileDataModel.fullname = $fullName.value;
  profileDataModel.location = $location.value;
  profileDataModel.bio = $bio.value;
  localStorage.setItem('profileDataModel', JSON.stringify(profileDataModel));

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
