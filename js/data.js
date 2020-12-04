/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

window.addEventListener('beforeunload', function (event) {
  localStorage.setItem('profileDataModel', JSON.stringify(data.profile));
});
