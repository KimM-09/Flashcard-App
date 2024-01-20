import React, { useEffect, useState } from "react";

function CardForm({ handleSubmit, handleCancel, card }) {

    const [ cardInfo, setCardInfo ] = useState();
    useEffect(() => {
        setCardInfo(card);
    }, [card]);
    
    const formUpdate = (event) => {
        const { name, value } = event.target;
        setCardInfo({ ...cardInfo, [name]: value });
    };

    const submit = (event) => {
        event.preventDefault();
        handleSubmit(cardInfo);
        setCardInfo({});
    };

    if(!cardInfo) {
        return (
            <form onSubmit={submit}>
                <div>
                    <label>
                        Front
                    </label>
                    <textarea
                    className="form-control"
                    type="text"
                    id="front"
                    name="front"
                    placeholder="Front of card"
                    value={""}
                    onChange={formUpdate}
                    required={true}
                    ></textarea>
                </div>
                <div>
                    <label>
                        Back
                    </label>
                    <textarea
                    className="form-control"
                    type="text"
                    id="back"
                    name="back"
                    placeholder="Back of card"
                    value={""}
                    onChange={formUpdate}
                    required={true}
                    ></textarea>
                    <button onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        )
    } else {
        return (
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="front">
                        Front
                    </label>
                    <textarea
                    className="form-control"
                    type="text"
                    id="front"
                    name="front"
                    placeholder="Front of card"
                    value={cardInfo.front}
                    onChange={formUpdate}
                    required
                    ></textarea>
                </div>
                <div>
                    <label hrmlFor="back">
                        Back
                    </label>
                    <textarea
                    className="form-control"
                    type="text"
                    id="back"
                    name="back"
                    placeholder="Back of card"
                    value={cardInfo.back}
                    onChange={formUpdate}
                    required
                    ></textarea>
                    <button onClick={handleCancel}>
                        Cancel
                    </button>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}


export default CardForm;