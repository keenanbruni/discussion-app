import React from 'react'

class Comment extends React.Component {
    state = {
        isSpam: false
    }

    handleReportSpam = (e) => {
        this.setState((prevState) => ({
            isSpam: !prevState.isSpam
        }))
        console.log(this.state)
    }

    render () {
        return (
            <div className="comment">
                {this.state.isSpam ? 
                    <p className="comment__text--spam">{this.props.timestamp}: {this.props.commentText}</p> :
                    <p className="comment__text">{this.props.timestamp}: {this.props.commentText}</p>
                }    
                <div className="comment__buttons">
                    <button 
                        className="button button--link"   
                        onClick={(e) => {
                            this.props.handleDeleteComment(this.props.id)
                        }}
                    >
                        Remove Comment
                    </button>
                    <button 
                        className="button button--link"
                        onClick={(e) => {
                            this.handleReportSpam()
                        }}
                    >
                        Report Spam
                    </button>
                </div>
        </div>
        )
    }
}

export default Comment