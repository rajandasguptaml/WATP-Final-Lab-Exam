import React from 'react'


const Edituser = () => {
  return(
      
    <>
      <br />
      <div class="container">

        <form>
          <div class="form-group">
            <label for="exampleInputtext">Content Title</label>
            <input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp" placeholder="Author Name" />
          </div>

          <div class="form-group">
            <label for="exampleInputtext">Author</label>
            <input type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp" placeholder="Author Name" />
          </div>
          <hr/>
          <button type="submit" class="btn btn-primary">Submit</button>

        </form>
      </div>
    </>
    
    
  );
};

export default Edituser;