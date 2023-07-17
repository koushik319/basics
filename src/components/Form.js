import React,{Component} from "react"

class Form extends Component{

    constructor()
    {
        super()
        this.state={
            username: " ",
            comments:" ",
            coursetype:" "
        }
    }
    Update=(event)=>
    {
       this.setState({
        username:event.target.value
       })
    }
    TextareaHandler=(event)=>
    {
        this.setState({
            comments:event.target.value
        })
    }
    CourseTypehandler= (event)=>
    {
        this.setState({
            coursetype:event.target.value
        })
    }
    Submitform =(event)=>
    {
        alert(`${this.state.username} ${this.state.comments} ${this.state.coursetype}`)
        event.preventDefault()
    }
    render()
    {
        return(
           <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.Update}/>
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.TextareaHandler}></textarea>
                </div>

                <div>
                    <label>Course Type</label>
                    <select value={this.state.coursetype} onChange={this.CourseTypehandler}>
                        <option>React</option>
                        <option>Angular</option>
                    </select>
                </div>
                
                <div>
                    <button onClick={this.Submitform}>Submit</button>
                </div>
           </form>
        )
    }
}

export default Form;