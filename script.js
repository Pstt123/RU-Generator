function getRandomUser() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
  
        document.getElementById('user-image').src = user.picture.large;
        document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById('user-email').textContent = `Email: ${user.email}`;
        document.getElementById('user-location').textContent = `Location: ${user.location.city}, ${user.location.country}`;
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }
  
  document.getElementById('generate-user').addEventListener('click', getRandomUser);

  getRandomUser();
  