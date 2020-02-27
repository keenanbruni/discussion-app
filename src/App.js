import React from 'react';
import shortid from 'shortid'
import './styles/App.scss';
import Header from './components/Header'
import Comments from './components/Comments'
import AddComment from './components/AddComment'

class App extends React.Component {
  state = {
    comments: []
  }

  handleDeleteComment = (id) => {
    this.setState((prevState) => ({
      comments: prevState.comments.filter((comment) => id !== comment.id)
    }));
  };
  handleAddComment = (comment) => {
    if (!comment.commentText) {
      return 'Enter valid value to add comment';
    } 
    this.setState((prevState) => ({
      comments: prevState.comments.concat(comment)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('comments');
      const comments = JSON.parse(json);

      if (comments) {
        this.setState(() => ({ comments }));
      }
    } catch (e) {
      // Do nothing
    }

    // Generate Random Comment
    setInterval(() => {
      const things = ['Rock', 'Paper', 'Scissor'];
      const thing = things[Math.floor(Math.random()*things.length)];
      const comment = {
        id: shortid(),
        commentText: thing
      }
      this.handleAddComment(comment)
    }, 30000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      const json = JSON.stringify(this.state.comments);
      localStorage.setItem('comments', json);
      this.setState(() => json)
    }
  }

  render(){
    return (
      <div>
        <Header />
        <Comments
          comments={this.state.comments}
          handleDeleteComment={this.handleDeleteComment}
          generateRandomComment={this.generateRandomComment}
        />
        <AddComment 
          handleAddComment={this.handleAddComment}
        />
      </div>
    );
  }
}

export default App;
