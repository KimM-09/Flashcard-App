import React, { useEffect, useState } from "react";
import Deck from "./Deck";
import { listDecks } from "../utils/api/index";
import ErrorMessage from "../Layout/ErrorMessage";

const DeckList = () => {
    const [ decks, setDecks ] = useState([]);
    const [ error, setError ] = useState(undefined);

    useEffect(() => {
        const abortController = new AbortController();
        listDecks(abortController.signal)
        .then(setDecks)
        .catch(setError);

        return () => abortController.abort();
    }, [setDecks, setError]);

    if(error) {
        return <ErrorMessage error={error} />;
    }
 
    const list = decks.map((deck) => <Deck deck={deck} key={deck.id} />);

    return (
        <main className="container">
            <section className="row">
                {list}
            </section>
        </main>
    );
};

export default DeckList;