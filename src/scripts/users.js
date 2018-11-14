import usersAPI from "./api-users"

let allUsers = usersAPI.getUsers()


function usersGenerator() {
  Promise.all([allUsers]).then((alldata) => {
    alldata.forEach((currentUsers) => {
      console.log("array of users: ", currentUsers)
      let userNames = []
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

  let newUser = { name: registerFormNameEl.value, password: registerFormPasswordEl.value, email: registerFormEmailEl.value }
  function getAllUsers(newUser) {
    return fetch(`http://localhost:8088/users?name=${newUser.name}`)
      .then(response => response.json())
      .then(newUser => {
        if (getAllUsers(newUser) === true) {
          alert("Sorry that name is already taken")
        }
        else {
          usersAPI.saveUser(newUser)
          alert("you have successfully registered! please log in to continue")
        }
      })
  }

  if (!newUser.name || !newUser.password || !newUser.email) {
    alert("Please fill out all fields")
  } else {
    getAllUsers(newUser)
  }

}

const userFunctions = () => {
  usersGenerator()
  $("#register__button").click(function () {
    submitUserRegistration()
    $("#login__form").removeClass("hide");
    $("#register__form").addClass("hide");
  })

}

export default userFunctions