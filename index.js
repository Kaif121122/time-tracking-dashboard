const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')
const userWorkingTime = document.querySelector('.user-working-time')
const userWorkingDateSpan = document.querySelector('.user-working-date-span')
const userPlayingTime = document.querySelector('.user-playing-time')
const userPlayingDateSpan = document.querySelector('.user-playing-date-span')
const userStudyingTime = document.querySelector('.user-studying-time')
const userStudyingDateSpan = document.querySelector('.user-studying-date-span')
const userExercisingTime = document.querySelector('.user-exercising-time')
const userExercisingDateSpan = document.querySelector('.user-exercising-date-span')
const usersocialTime = document.querySelector('.user-social2-time')
const usersocialDateSpan = document.querySelector('.user-social2-date-span')
const userSelfCaringTime = document.querySelector('.user-selfcaring-time')
const userSelfCaringDateSpan = document.querySelector('.user-selfcaring-date-span')

// SHOWING DAILY DATA 

daily.addEventListener('click', () => {
  fetch('./data.json').then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    data.map((elem) => {
      if (elem.title === "Work") {

        userWorkingTime.innerHTML = elem.timeframes.daily.current
        userWorkingDateSpan.innerHTML = elem.timeframes.daily.previous
      } else if (elem.title === "Play") {

        userPlayingTime.innerHTML = elem.timeframes.daily.current
        userPlayingDateSpan.innerHTML = elem.timeframes.daily.previous
      } else if (elem.title === "Study") {

        userStudyingTime.innerHTML = elem.timeframes.daily.current
        userStudyingDateSpan.innerHTML = elem.timeframes.daily.previous
      } else if (elem.title === "Exercise") {

        userExercisingTime.innerHTML = elem.timeframes.daily.current
        userExercisingDateSpan.innerHTML = elem.timeframes.daily.previous
      } else if (elem.title === "Social") {

        usersocialTime.innerHTML = elem.timeframes.daily.current
        usersocialDateSpan.innerHTML = elem.timeframes.daily.previous
      } else if (elem.title === "Self Care") {

        userSelfCaringTime.innerHTML = elem.timeframes.daily.current
        userSelfCaringDateSpan.innerHTML = elem.timeframes.daily.previous
      }
    })
  });
})

// SHOWING WEEKLY DATA 

weekly.addEventListener('click', () => {
  fetch('./data.json').then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    data.map((elem) => {
      if (elem.title === "Work") {

        userWorkingTime.innerHTML = elem.timeframes.weekly.current
        userWorkingDateSpan.innerHTML = elem.timeframes.weekly.previous
      } else if (elem.title === "Play") {

        userPlayingTime.innerHTML = elem.timeframes.weekly.current
        userPlayingDateSpan.innerHTML = elem.timeframes.weekly.previous
      } else if (elem.title === "Study") {

        userStudyingTime.innerHTML = elem.timeframes.weekly.current
        userStudyingDateSpan.innerHTML = elem.timeframes.weekly.previous
      } else if (elem.title === "Exercise") {

        userExercisingTime.innerHTML = elem.timeframes.weekly.current
        userExercisingDateSpan.innerHTML = elem.timeframes.weekly.previous
      } else if (elem.title === "Social") {

        usersocialTime.innerHTML = elem.timeframes.weekly.current
        usersocialDateSpan.innerHTML = elem.timeframes.weekly.previous
      } else if (elem.title === "Self Care") {

        userSelfCaringTime.innerHTML = elem.timeframes.weekly.current
        userSelfCaringDateSpan.innerHTML = elem.timeframes.weekly.previous
      }
    })
  });
})

// SHOWING MONTHLY DATA 

monthly.addEventListener('click', () => {
  fetch('./data.json').then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    data.map((elem) => {
      if (elem.title === "Work") {

        userWorkingTime.innerHTML = elem.timeframes.monthly.current
        userWorkingDateSpan.innerHTML = elem.timeframes.monthly.previous
      } else if (elem.title === "Play") {

        userPlayingTime.innerHTML = elem.timeframes.monthly.current
        userPlayingDateSpan.innerHTML = elem.timeframes.monthly.previous
      } else if (elem.title === "Study") {

        userStudyingTime.innerHTML = elem.timeframes.monthly.current
        userStudyingDateSpan.innerHTML = elem.timeframes.monthly.previous
      } else if (elem.title === "Exercise") {

        userExercisingTime.innerHTML = elem.timeframes.monthly.current
        userExercisingDateSpan.innerHTML = elem.timeframes.monthly.previous
      } else if (elem.title === "Social") {

        usersocialTime.innerHTML = elem.timeframes.monthly.current
        usersocialDateSpan.innerHTML = elem.timeframes.monthly.previous
      } else if (elem.title === "Self Care") {

        userSelfCaringTime.innerHTML = elem.timeframes.monthly.current
        userSelfCaringDateSpan.innerHTML = elem.timeframes.monthly.previous
      }
    })
  });
})

//////////////////////////////////////////////////////////////////////////////////////////////////