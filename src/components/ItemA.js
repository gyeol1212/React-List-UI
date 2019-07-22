import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DefaultItemComponent from './ItemDetail';

const ItemContainer = styled.div`
  width: ${props => `${props.width || '18rem'}`};
  height: ${props => `${props.height || '18rem'}`};
  box-sizing: border-box;
  display: inline-block;
  transform: ${props => (props.focusOn ? (props.isSelected ? 'scale(1.1)' : `scale(0.85)`) : null)};
  transition: ${props => props.focusOn && 'all 0.3s ease'};
  z-index: ${props => props.focusOn && props.isSelected && 99};
  position: relative;
  background-color: ${props => props.focusOn && props.isSelected && 'white'};
`;

const ItemA = props => {
  const {
    item,
    isSelected,
    focusOn,
    index,
    onClickItem,
    itemStyle,
    itemCssObject,
    itemClassName,
    itemComponent,
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
      className={itemClassName}
      focusOn={focusOn}
      isSelected={isSelected}>
      {/* <ItemDetail index={index} /> */}
      {itemComponent ? (
        // TODO : index 삭제
        React.cloneElement(itemComponent, {
          index,
          ...itemComponent.props,
          ...item,
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
  focusOn: PropTypes.bool,
  itemStyle: PropTypes.object,
  onClickItem: PropTypes.func,
  itemCssObject: PropTypes.object,
  itemClassName: PropTypes.string,
  itemComponent: PropTypes.element,
};

export default ItemA;
