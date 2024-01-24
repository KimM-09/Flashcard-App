import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api/index";

function Card ({ card }) {
    const history = useHistory();

    const handleDelete = async () => {
        const result = window.confirm("Delete this card? You will NOT be able to recover it.")
        if (result) {
            await deleteCard(card.id);
            history.go(0);
        }
    };

    return (
        <article className="col-12 col-md-6 col-xl-3 my-2">
            <div className="card">
            <div className="card-body">
                <p>{card.front}</p>
                <p>{card.back}</p>
                <Link className="btn btn-primary" to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                    Edit
                </Link>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </div>
            </div>
        </article>
    )
;}

export default Card;