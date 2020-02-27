import React from 'react'
import Comment from './Comment' 

const Comments = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Comments</h3>
        </div>

        {/* {setInterval(() => {
            props.generateRandomComment()
        }, 1000)} */}

        {
            props.comments.map((comment, index) => (
                <Comment 
                    key={comment.id}
                    id={comment.id}
                    commentText={comment.commentText}
                    count={index + 1}
                    handleDeleteComment={props.handleDeleteComment}
                    handleReportSpam={props.handleReportSpam}
                />
            ))
        }
    </div>
)

export default Comments