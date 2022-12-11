const Content = () => {
  return (
    <div className="content">
      <div className="divide">
        <div className="Student">
          <div className="head">
            LOGIN AS STUDENT
            <hr />
          </div>
          <form action="/action_page.php" method="post">
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
  </div>
  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
  </div>

</form>

        </div>
        <div className="Admin">
          <div className="head">
            LOGIN AS ADMIN
            <hr />
          </div>
          <form action="/action_page.php" method="post">
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Login</button>
  </div>
  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
  </div>

</form>
        </div>
      </div>
    </div>
  );
};

export default Content;
