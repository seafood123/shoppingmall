import React,{Component} from 'react'

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      id : this.props.data.id,
      title : this.props.data.title,
      desc : this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }
    render(){
      return(
        <article>
          <h2>U P D A T E</h2>
          <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
                  alert("데이터를 전송합니다.");
                }.bind(this)}>
            <input type="hidden" name="id" value={this.state.id}></input>
            <p><input type="text" name="title" placeholder="TITLE" value={this.state.title}
                      onChange={this.inputFormHandler}></input></p>
            <p><textarea name="desc" placeholder="DESCRIPTION" value={this.state.desc}
                         onChange={this.inputFormHandler}></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
}

export default UpdateContent;
