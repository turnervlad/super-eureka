import {React} from "react";

const Row = (props) => {
    return (
        <div className="row-wrapper">
            <div className="items">
                <div className="item"><p>{props.item.id}</p></div>
                <div className="item"><p>{props.item.name}</p></div>
                <div className="item"><p>{props.item.username}</p></div>
                <div className="item"><p>{props.item.email}</p></div>
            </div>
            <div className="buttons">
                <div className="button">
                    <button>Edit</button>
                </div>
                <div className="button">
                    <button onClick={() => props.delete(props.item.id)}>Delete row</button>
                </div>
            </div>
        </div>
    );
};

export default Row;
