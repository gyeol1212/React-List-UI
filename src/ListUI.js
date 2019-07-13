import React from 'react';
import PropTypes from 'prop-types';

import TypeA from './containers/TypeA';
import TypeB from './containers/TypeB';

const ListUI = props => {
  const {
    type,
    itemList,
    itemComponent,
    clickDisable,
    smoothScroll,
    overScroll,
    showResetButton,
    itemStyle,
    listStyle,
    col,
    containerCssObject,
    listCssObject,
    itemCssObject,
    selectingAreaCssObject,
    headerCssObject,
    resetButtonCssObject,
    endPointCssObject
  } = props;

  //type Default A
  // const type = props.type || 'A';
  // itemList Default []
  // const itemList = props.itemList || [];
  return (
    <div>
      {type === 'A' ? (
        <TypeA
          itemList={itemList}
          itemComponent={itemComponent}
          clickDisable={clickDisable}
          smoothScroll={smoothScroll}
          overScroll={overScroll}
          showResetButton={showResetButton}
          itemStyle={itemStyle}
          containerCssObject={containerCssObject}
          listCssObject={listCssObject}
          itemCssObject={itemCssObject}
          selectingAreaCssObject={selectingAreaCssObject}
          headerCssObject={headerCssObject}
          resetButtonCssObject={resetButtonCssObject}
          endPointCssObject={endPointCssObject}
        />
      ) : type === 'B' ? (
        <TypeB
          itemList={itemList}
          itemComponent={itemComponent}
          clickDisable={clickDisable}
          smoothScroll={smoothScroll}
          overScroll={overScroll}
          showResetButton={showResetButton}
          itemStyle={itemStyle}
          listStyle={listStyle}
          col={col}
          containerCssObject={containerCssObject}
          listCssObject={listCssObject}
          itemCssObject={itemCssObject}
          selectingAreaCssObject={selectingAreaCssObject}
          headerCssObject={headerCssObject}
          resetButtonCssObject={resetButtonCssObject}
          endPointCssObject={endPointCssObject}
        />
      ) : null}
    </div>
  );
};

ListUI.defaultProps = {
  // type: 'A',
  itemList: []
};

// eslint-disable-next-line react/no-typos
ListUI.propTypes = {
  type: PropTypes.oneOf(['A', 'B']).isRequired,
  itemList: PropTypes.arrayOf(Object),
  itemComponent: PropTypes.element,
  clickDisable: PropTypes.bool,
  smoothScroll: PropTypes.bool,
  overScroll: PropTypes.bool,
  showResetButton: PropTypes.bool,
  itemStyle: PropTypes.exact({
    height: PropTypes.string,
    width: PropTypes.string
  }),
  listStyle: PropTypes.exact({
    height: PropTypes.string
  }),
  col: PropTypes.number,
  containerCssObject: PropTypes.object,
  listCssObject: PropTypes.object,
  itemCssObject: PropTypes.object,
  selectingAreaCssObject: PropTypes.object,
  headerCssObject: PropTypes.object,
  resetButtonCssObject: PropTypes.object,
  endPointCssObject: PropTypes.object
};

export default ListUI;
