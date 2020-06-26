export default `
<!DOCTYPE html>
<html>
   <body >
      <form id='formSubmit'>
         <input type='text' name='username' id='username' />
         <input type='password' name='password' id='password' />
         <button >submit</button>
      </form>
   </body>
   <script>
      let userData = {}

      document.getElementById('username').addEventListener('change', function() {
        userData = {...userData,[this.name]:this.value}
        console.log( userData);

      });
      document.getElementById('password').addEventListener('change', function() {
        userData = {...userData,[this.name]:this.value}
        console.log( userData);
      });
      document.getElementById('formSubmit').addEventListener('submit', function(e) {
        e.preventDefault()
        fetch('/user',{
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          }
        }) .then(response => response.json())
        .then(data => console.log(data));
        console.log('Now you submit');
      });

   </script>
   <html>
`;
