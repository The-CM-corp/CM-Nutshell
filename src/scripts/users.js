import usersAPI from "./api-users"

let allUsers = usersAPI.getUsers()


function usersGenerator() {
  Promise.all([allUsers]).then((alldata) => {
    alldata.forEach((currentUser) => {
      console.log("a user: ", currentUser)
    })
  })
}


function submitUserRegistration() {
  let registerFormNameEl = document.getElementById("register__name")
  let registerFormEmailEl = document.getElementById("register__email")
  let registerFormPasswordEl = document.getElementById("register__password")

  let newUser = { name: registerFormNameEl.value, password: registerFormPasswordEl.value, email: registerFormEmailEl.value }
  usersAPI.saveUser(newUser)
  // .then(() => { console.log("new user", newUser);})
  alert("you have successfully registered! please log in to continue")
}

const userFunctions = () => {
  usersGenerator()
  $("#register__button").click(function () {
    submitUserRegistration()
  })

}

export default userFunctions