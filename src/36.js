var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = function () {
  if (this.status === 200) {
    console.log(this.responseText);
  } else {
    console.error('Error fetching data: ', this.status, ' -', this.statusText);
  }
};
xhr.onerror = function () {
  console.error('An error occurred while fetching data');
};
xhr.send();
