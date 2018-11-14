import usersAPI from "./api-users"

let allUsers = usersAPI.getUsers()

function usersGenerator() {
  Promise.all([allUsers]).then((alldata) => {
    alldata.forEach((currentUsers) => {
      let userNames = []
      console.log("array of users: ", currentUsers)
      currentUsers.forEach(user => {
        userNames.push(user.name)
      })
    })
  })
}

function submitUserRegistration() {
  let registerFormNameEl = document.getElementById("register__name")
  let registerFormEmailEl = document.getElementById("register__email")
  let registerFormPasswordEl = document.getElementById("register__password")
  if (registerFormNameEl.value === "" || registerFormEmailEl.value === "" || registerFormPasswordEl.value === "")
    alert("Please make sure all fields are filled in order to register")
  else {
    let newUser = { name: registerFormNameEl.value, password: registerFormPasswordEl.value, email: registerFormEmailEl.value }
    usersAPI.queryUsers(newUser.email)
      .then(response => {
        console.log(response)
        if (response === 1) {
          alert("We're sorry, but that email is already registered. Try again")
        } else {
          usersAPI.saveUser(newUser)
          alert("you have successfully registered! please log in to continue")
          $("#login__form").removeClass("hide");
          $("#register__form").addClass("hide");
        }
      }
      )
  }
}

const userFunctions = () => {
  usersGenerator()
  $("#register__button").click(function () {
    submitUserRegistration()
  })
}

export default userFunctions