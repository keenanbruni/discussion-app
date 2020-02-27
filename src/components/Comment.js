import React from 'react'

const Comment = (props) => (
    <div className="comment">
        <p className="comment__text">{props.count}. {props.commentText}</p>     
        <button 
            className="button button--link"   
            onClick={(e) => {
                props.handleDeleteComment(props.id)
            }}
        >
            Remove Comment
        </button>
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleReportSpam(props.id)
            }}
        >
            Report Spam
        </button>
    </div>
)

export default Comment