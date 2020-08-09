import React,{Component} from 'react'

class CreateContent extends Component{
    render(){
      return(
        <article>
          <h2>C R E A T E</h2>
          <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(e.target.title.value, e.target.desc.value);
                  alert("데이터를 전송합니다.");
                }.bind(this)}>
            <p><input type="text" name="title" placeholder="TITLE"></input></p>
            <p><textarea name="desc" placeholder="DESCRIPTION"></textarea></p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
}

export default CreateContent;
