import css from '../LoadMoreBtn/LoadMoreBtn.module.css'

const LoadMoreBtn = ({onClickLoadMore}) => {

  return (
    <div>
      <button type='button' onClick={onClickLoadMore}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn