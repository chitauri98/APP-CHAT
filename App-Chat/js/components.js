const components = {}
components.welcomeScreen = `
<h1>Welcome to Chat app</h1>
`
components.registerScreen = `
<div class="register-container">
<div class="aside-right">
  <div class="header">
    <h3 class="nn">MindX chat</h3>
  </div>
  <form id="register-form">
    <div class="input-name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="firstName" 
        placeholder="First name">
        <div class="error" id="first-name-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="text" name="lastName" 
        placeholder="Last name">
        <div class="error" id="last-name-error"></div>
      </div>
    </div>
    <div class="input-wrapper">
      <input type="text" 
        placeholder="Email" 
        name="email">
      <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" 
        placeholder="Password" 
        name="password">
      <div class="error" 
        id="password-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" 
        placeholder="Confirm password" 
        name="confirmPassword">
      <div class="error" 
        id="confirm-password-error"></div>
    </div>
    <div class="form-action">
      <span class="cursor-pointer" id="redirect-to-login">
        Already have an account? Login
      </span>
      <button class="btn" type="submit">
        Register
      </button>
    </div>
  </form>
</div>
</div>
`
components.loginScreen = `
<div class="login-container">
<div class="aside-right">
  <div class="header">
    <h3 class="nn">MindX chat</h3>
  </div>
  <form id="login-form">
    <div class="input-wrapper">
      <input type="text" 
        placeholder="Email" 
        name="email">
      <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" 
        placeholder="Password" 
        name="password">
      <div class="error" 
        id="password-error"></div>
    </div>
    <div class="form-action">
      <span class="cursor-pointer" id="redirect-to-register">
        Don't have an account? Register
      </span>
      <button class="btn" type="submit">
        Login
      </button>
    </div>
  </form>
</div>
</div>
`
components.chatScreen = `
<div class="chat-container">
<div class="header">
  MindX Chat
</div>
<div class="main">
  <div class="conversation-detail">
    <div class="conversation-header">
      First conversation
    </div>
    <div class="list-messages">
    </div>
    <form id="send-message-form">
      <div class="input-wrapper">
        <input type="text" name="message"
          placeholder="Type a message">
      </div>
      <button type="submit">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </button>
    </form>
  </div>
</div>
</div>
`