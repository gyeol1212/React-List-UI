import React from 'react';
import TypeA from './containers/TypeA';
import TypeB from './containers/TypeB';

const ListUI = props => {
  const {
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
  const type = props.type || 'A';
  // itemList Default []
  const itemList = props.itemList || [];
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
      ) : (
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
      )}
    </div>
  );
};

export default ListUI;
