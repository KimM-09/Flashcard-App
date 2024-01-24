import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import FlashCard from "../Cards/FlipCard";
import { readDeck } from "../utils/api/index";
import NotEnoughCards from "../Layout/NotEnoughCards";
import CardOutline from "../Cards/CardOutline";
 
function Study() {
    const [ deck, setDeck ] = useState({ cards: [] });
    const [ cardId, setCardId ] = useState(0);
    const [ loaded, setLoaded ] = useState(false);
    const history = useHistory();
    const { deckId } = useParams();
    const name = deck.name ? deck.name : "Deck Name";

    useEffect(() => {
        const abortController = new AbortController();
        async function loadDeck() {
            try {
                const deckInfo = await readDeck(deckId, abortController.signal);
                setDeck(deckInfo);
                setLoaded(true);
            } catch (err) {
                if(err.name === "AbortError") {
                    console.info("aborted");
                } else {
                    throw err;
                }
            }
        }
        loadDeck();
        return () => abortController.abort();
    }, [deckId]);

    function handleNext() {
        if(cardId >= deck.cards.length - 1 ) {
            if (window.confirm("Restart cards?")) {
                setCardId(0);
            } else {
                history.push("/")
            }
        } else {
            setCardId(cardId + 1 );
        }
    }

    const flashCards = deck.cards.length > 2 ? (
        <FlashCard handleNext={handleNext} deck={deck} cardId={cardId} />
    ) : (
        <NotEnoughCards deck={deck} />
    );

    const content = loaded ? flashCards : <CardOutline />;

    return (
        <div>
            <nav aria label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <i className="bi bi-house-door-fill"></i>
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Study
                    </li>
                </ol>
            </nav>
            <h1>
                {name}
            </h1>
            {content}
        </div>
    );
};

export default Study;