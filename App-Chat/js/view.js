const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "welcomeScreen":
      document.getElementById("app").innerHTML = components.welcomeScreen;
      break;
    case "loginScreen":
      // in ra man login
      document.getElementById("app").innerHTML = components.loginScreen;
      document
        .getElementById("redirect-to-register")
        .addEventListener("click", () => {
          view.setActiveScreen("registerScreen");
        });
      const loginForm = document.getElementById("login-form");
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        loginForm.email.value = loginForm.email.value.trim();
        const data = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(data);
      });
      break;
    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("register-form");
      registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        console.log(data);
        controller.register(data);
      });
      document
        .getElementById("redirect-to-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        });
      break;
    case "chatScreen":
      document.getElementById("app").innerHTML = components.chatScreen;
      document.querySelector(
        ".welcome-user"
      ).innerHTML = `Welcome ${model.currentUser.displayName} to MindX Chat`;
      break;
  }
};
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};
