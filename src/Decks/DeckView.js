import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import { deleteDeck } from "../utils/api/index";
import ListCards from "../Cards/ListCards";


function DeckView() {
    const [deck, setDeck] = useState({});
    const deckId = useParams().deckId;

    const history = useHistory();
    const handleDelete = async () => {
        const result = window.confirm("Delete this deck? You will not be able to recover it")
        if(result) {
            await deleteDeck(deck.id);
            history.push("/");
            history.go(0);
        }
    };

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
                <h3>{`${deck.name}`}</h3>
                <p>{`${deck.description}`}</p>
                <Link className="btn btn-dark" to={`/decks/${deck?.id}/edit`}>
                <i className="bi bi-plus-lg"></i> Edit
                </Link>
                <Link className="btn btn-success" to={`/decks/${deck?.id}/study`}>
                    <i className="bi bi-plus-lg"></i> Study
                </Link>
                <Link className="btn btn-warning" to={`/decks/${deck?.id}/cards/new`}>
                <i className="bi bi-plus-lg"></i> Add Cards
                </Link>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
                <h2>Cards</h2>
                <ListCards deck={deck} />
            </div>
        );
    } else {
        return "Loading"
    }
}

export default DeckView;