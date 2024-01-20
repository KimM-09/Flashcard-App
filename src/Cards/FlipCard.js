import React, { useState } from "react";

function FlipCard ({ handleNext, deck = { cards: []}, cardId = 0 }) {
    const { cards } = deck;
    const card = cards[cardId] || {};
    const [side, setside] = useState(true);

    function cardFlip() {
        setside(!side);
    }

    const next = !side ? (
        <button className="btn btn-secondary" onClick={() => {
            setside(true);
            handleNext();
        }}
        >
            Next
        </button>
    ) : (
        ""
    );

    if (side) {
        return (
            <div className="card my-1">
                <div>
                    <h4 className="card-title">
                        Card {cardId + 1} of {cards.length}
                    </h4>
                    <p className="card-text">
                        {card.front}
                    </p>
                    <button className="btn btn-info" onClick={cardFlip}>
                        Flip
                    </button>
                    {next}
                </div>
            </div>
        )
    } else {
        return (
            <div className="card my-1">
                <div>
                    <h4 className="card-title">
                        Card {cardId + 1} of {cards.length}
                    </h4>
                    <p className="card-text">
                        {card.back}
                    </p>
                    <button className="btn btn-info" onClick={cardFlip}>
                        Flip
                    </button>
                    {next}
                </div>
            </div>
        )
    }


}

export default FlipCard;