import usersAPI from "./api-users"

let allUsers = usersAPI.getUsers()


function usersGenerator() {
  Promise.all([allUsers]).then((alldata) => {
    alldata.forEach((currentUsers) => {
      let userNames = []
      console.log("array of users: ", currentUsers)
      currentUsers.forEach(user => {
        userNames.push(user.name)
        // console.log("user names array:", userNames)
      })
    })
  })
}


// function validateUser() {
// // get username from input = (newuser.name)
// // query database to see if it matches. return true/false
// // if true, throw error > if false, then check email >
// // if email is true, throw error > if false, then submit new user
// usersAPI.getUsers("sally")
// }


function submitUserRegistration() {
  let registerFormNameEl = document.getElementById("register__name")
  let registerFormEmailEl = document.getElementById("register__email")
  let registerFormPasswordEl = document.getElementById("register__password")

  let newUser = { name: registerFormNameEl.value, password: registerFormPasswordEl.value, email: registerFormEmailEl.value }

  usersAPI.queryUsers(newUser.email)
    .then(response => {
      console.log(response)
      if (response === 1) {
        alert("We're sorry, but that email is already registered. Try again")
      } else {
        usersAPI.saveUser(newUser)
        alert("you have successfully registered! please log in to continue")
        $("#register__button").click(function () {
          $("#login__form").removeClass("hide");
          $("#register__form").addClass("hide");
        });
      }
    }
    )
}

const userFunctions = () => {
  usersGenerator()
  $("#register__button").click(function () {
    submitUserRegistration()
  })
}

export default userFunctions