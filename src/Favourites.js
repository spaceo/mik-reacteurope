import React from 'react';
import update from 'react-addons-update';
import { compose, withState, withHandlers, renameProp } from 'recompose';

const Favourites = ({
  thumbnailUrl,
  name,
  updateName,
  favouriteText,
  updateFavouriteText,
  addListEntry,
  favourites
}) => (
  <div>
    <img src={thumbnailUrl} alt="Thumbnail" height="100" />
    <div>
      <input type="text" value={name} onChange={updateName} />
    </div>
    <form onSubmit={addListEntry}>
      <input
        type="text"
        value={favouriteText}
        onChange={updateFavouriteText}
        placeholder="add new item here …"
      />
      <button type="submit">Add</button>
    </form>
    {favourites.map((favourite, index) => (
      <div key={`${favourite}-${index}`}>{favourite}</div>
    ))}
  </div>
);

const enhance = compose(
  renameProp('imageUrl', 'thumbnailUrl'),
  withState('favourites', 'setFavourites', []),
  withState('favouriteText', 'setFavouriteText', ''),
  withState('name', 'setName', props => props.name),
  withHandlers({
    updateFavouriteText: props => event => {
      props.setFavouriteText(event.target.value)
    },
    addListEntry: props => event => {
      props.setFavourites(update(props.favourites, {$push: [props.favouriteText]}));
      props.setFavouriteText('');
      event.preventDefault();
    },
    updateName: props => event => {
      props.setName(event.target.value)
    },
  }),
);

export default enhance(Favourites);
