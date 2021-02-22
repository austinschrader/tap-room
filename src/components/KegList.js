import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <>
      <hr />
      {props.kegList.map((keg) => (
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </>
  );
}

KegList.propsTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default KegList;
