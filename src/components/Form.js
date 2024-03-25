
function Form(){
  return(
    <div> 
      <h2> Memories </h2>
    <div className="entries"> 
      <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
  )
}

export default Form;