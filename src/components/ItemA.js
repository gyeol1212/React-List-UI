import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DefaultItemComponent from './ItemDetail';

const ItemContainer = styled.div`
  width: ${props => `${props.width || '18rem'}`};
  height: ${props => `${props.height || '18rem'}`};
  box-sizing: border-box;
  display: inline-block;
`;

const ItemA = props => {
  const {
    item,
    isSelected,
    index,
    onClickItem,
    itemStyle,
    itemCssObject,
    itemComponent
  } = props;

  const divEl = useRef(null);

  useEffect(() => {
    // 이 component가 선택 되었을 때,
    if (isSelected) {
      // content 한 개의 width
      const contentWidth = divEl.current.offsetWidth;

      // 전체 carousel의 왼쪽 좌표
      const carouselLeft = divEl.current.parentNode.clientLeft;

      // carousel의 왼쪽 좌표 + ( content의 width X content 갯수 )
      divEl.current.parentNode.scrollLeft = carouselLeft + contentWidth * index;
    }
  }, [isSelected, index]);

  return (
    <ItemContainer
      ref={divEl}
      width={itemStyle && itemStyle.width}
      height={itemStyle && itemStyle.height}
      onClick={onClickItem}
      style={itemCssObject}
    >
      {/* <ItemDetail index={index} /> */}
      {itemComponent ? (
        // TODO : index 삭제
        React.cloneElement(itemComponent, {
          index,
          ...itemComponent.props,
          ...item
        })
      ) : (
        <DefaultItemComponent index={index} />
      )}
    </ItemContainer>
  );
};

ItemA.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  itemStyle: PropTypes.object,
  onClickItem: PropTypes.func,
  itemCssObject: PropTypes.object,
  itemComponent: PropTypes.element
};

export default ItemA;
