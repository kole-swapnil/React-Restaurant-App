import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = (props) => {
    if (props.selectedDish != null) {
        let comments = props.selectedDish.comments.map((comment) => {
            return (
                <>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={props.selectedDish.image} alt={props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{props.selectedDish.name}</CardTitle>
                                <CardText>{props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        {comments}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}


export default DishDetail;