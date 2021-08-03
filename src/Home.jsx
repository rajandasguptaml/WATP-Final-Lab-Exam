import React from 'react'


const Home = () => {
  return(
 
    <div class="container">
     <br />
     <a class="btn btn-success" href="/adduser" role="button">ADD Content</a>
    <hr />
      <br />
 
      <table class="table table-success table-striped">
     
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Content</th>
      <th scope="col">Author</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>  </td>
      <td></td>
      <td> </td>
      <td><a class="btn btn-warning" href="/edituser" role="button">EDIT</a></td>
      <td><a class="btn btn-danger" href="/edituser" role="button">DELETE</a></td>
      
    </tr>
    
  </tbody>
</table>
    </div>

  );
};

export default Home;
