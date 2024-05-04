import React from 'react';

interface LoadMoreBtnProps {
  onClickLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClickLoadMore }) => {
  return (
    <div>
      <button type='button' onClick={onClickLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;