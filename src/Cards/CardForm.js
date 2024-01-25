import React, { useEffect, useState } from "react";


function CardForm({ handleSubmit, handleCancel, card }) {
    const [ cardInfo, setCardInfo ] = useState();
    const initialFormState = ""
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
        setCardInfo(initialFormState)
        };                                
    
    if (!cardInfo) 
        {return (
            <form onSubmit={submit}>
                <div>
                    <p>
                        Front
                    </p>
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
                    <p>
                        Back
                    </p>
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
                        Done
                    </button>
                    <button type="submit">
                        Save
                    </button>
                </div>
            </form>
        );
    }else {
        return (
            <form onSubmit={submit}>   
      <div className='form-group'>
        <label htmlFor='front'>Front</label>
        <textarea
          className='form-control'
          type='text'
          id='front'
          name='front'
          placeholder='Front of Card'
          value={cardInfo.front}
          onChange={formUpdate} 
          required
        ></textarea>
      </div>
      <div className='form-group'>
        <label htmlFor='back'>Back</label>
        <textarea
          className='form-control'
          name='back'
          id='back'
          placeholder='Back of Card'
          value={cardInfo.back}
          onChange={formUpdate}
          required
        ></textarea>
        <button className='btn btn-secondary my-2' onClick={handleCancel}>
          Done
        </button>
        <button type='submit' className='btn btn-primary my-2'>
          Save
        </button>
      </div>
    </form>
        )
    }
    }

export default CardForm;