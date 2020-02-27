import React from 'react';
import './styles/App.scss';
import Header from './components/Header'
import Comments from './components/Comments'
import AddComment from './components/AddComment'

class App extends React.Component {
  state = {
    comments: []
  }

  handleDeleteComment = (commentIdToRemove) => {
    this.setState((prevState) => ({
      comments: prevState.comments.filter((comment) => commentIdToRemove !== comment.id)
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
  handleReportSpam = (id) => {
    console.log(id)
  }
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
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      const json = JSON.stringify(this.state.comments);
      localStorage.setItem('comments', json);
    }
  }

  render(){
    return (
      <div>
        <Header />
        <Comments
          comments={this.state.comments}
          handleDeleteComment={this.handleDeleteComment}
          handleReportSpam={this.handleReportSpam}
        />
        <AddComment 
          handleAddComment={this.handleAddComment}
        />
      </div>
    );
  }
}

export default App;
