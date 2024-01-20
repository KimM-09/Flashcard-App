import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Decks/DeckList";
import DeckView from "../Decks/DeckView";
import CreateDeck from "../Decks/CreateDeck";
import DeckEdit from "../Decks/DeckEdit";
import Study from "../Decks/Study"
import AddACard from "../Cards/AddACard";
import EditACard from "../Cards/EditACard";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new" className="btn btn-secondary">Create Deck</Link>
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditACard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddACard />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
 