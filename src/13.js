const mySchoolProject = {
  getRandomNumber: function () {
    return Math.floor(Math.random() * 10) + 1;
  },
  getRandomColor: function () {
    const colors = ["red", "green", "blue"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
};
