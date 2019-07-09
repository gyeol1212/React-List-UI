import React from 'react';
import TypeA from './containers/TypeA';
import TypeB from './containers/TypeB';

const ListUI = props => {
  const {
    // TODO : type Default A
    type,
    clickDisable,
    smoothScroll,
    overScroll,
    showResetButton,
    itemStyle,
    listStyle,
    col
  } = props;
  return (
    <div>
      {type === 'A' ? (
        <TypeA
          clickDisable={clickDisable}
          smoothScroll={smoothScroll}
          overScroll={overScroll}
          showResetButton={showResetButton}
          itemStyle={itemStyle}
        />
      ) : (
        <TypeB
          clickDisable={clickDisable}
          smoothScroll={smoothScroll}
          overScroll={overScroll}
          showResetButton={showResetButton}
          itemStyle={itemStyle}
          listStyle={listStyle}
          col={col}
        />
      )}
    </div>
  );
};

export default ListUI;
