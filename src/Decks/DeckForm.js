import React, { useEffect, useState } from "react";

function DeckForm({ handleSubmit, handleCancel, deck }) {
    const [ deckInfo, setDeckInfo ] = useState(deck);
    useEffect(() => {
        setDeckInfo(deck);
    }, [deck]);

    const update = (event) => {
        const { name, value } = event.target;
        setDeckInfo({...deckInfo, [name]: value });
    };

    const submit = (event) => {
        event.preventDefault();
        handleSubmit(deckInfo);
    };

    return (
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="name">
                    Name
                </label>
                <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                value={deckInfo?.name || ""}
                onChange={update}
                required
                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="description">
                    Description
                </label>
                <textarea
                className="form-control"
                id="description"
                name="description"
                value={deckInfo?.description || ""}
                onChange={update}
                required
                ></textarea>
                <button className="btn btn-secondary my-2" onClick={handleCancel}>
                    Cancel
                </button>
                <button type="submit" className="btn btn-primaryc my-2">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default DeckForm;