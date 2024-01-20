import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import ListCards from "../Cards/ListCards";

function DeckView() {
    const [deck, setDeck] = useState({});
    const deckId = useParams().deckId;

    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deckId])

    if(deck.id) {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">
                            <i className="bi bi-house-door-fill"></i><i className="bi bi-house-door-fill"></i>
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {`${deck.name}`}
                        </li>
                    </ol>
                </nav>
                <h2>Cards</h2>
                <Link className="btn btn-warning" to={`/decks/${deck?.id}/cards/new`}>
                <i className="bi bi-plus-lg"></i> Add Cards
            </Link>
                <ListCards deck={deck} />
            </div>
        );
    } else {
        return "Loading"
    }
}

export default DeckView;