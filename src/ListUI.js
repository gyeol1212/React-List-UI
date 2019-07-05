import React from 'react';
import TypeA from './containers/TypeA';
import TypeB from './containers/TypeB';

const ListUI = props => {
  const { type, clickDisable, smoothScroll, itemStyle, listStyle, col } = props;
  return (
    <div>
      {type === 'A' ? (
        <TypeA
          clickDisable={clickDisable}
          smoothScroll={smoothScroll}
          itemStyle={itemStyle}
        />
      ) : (
        <TypeB
          clickDisable={clickDisable}
          smoothScroll={smoothScroll}
          itemStyle={itemStyle}
          listStyle={listStyle}
          col={col}
        />
      )}
    </div>
  );
};

export default ListUI;
