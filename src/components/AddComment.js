import React from 'react'
import shortid from 'shortid'


class AddComment extends React.Component {
    state = {
      error: undefined
    };

    handleAddComment = (e) => {
      e.preventDefault();
      const comment = {
        id: shortid(),
        commentText: e.target.elements.comment.value.trim()
      }
      const error = this.props.handleAddComment(comment);
  
      this.setState(() => ({ error }));
  
      if (!error) {
        e.target.elements.comment.value = '';
      }
    };
    
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-comment" onSubmit={this.handleAddComment}>
            <input className="add-option__input" type="text" name="comment" />
            <button className="button">Add Comment</button>
          </form>
        </div>
      );
    }
  }

export default AddComment