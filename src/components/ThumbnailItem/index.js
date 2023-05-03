// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {item, ImageChanged, isActive} = props
  const {id, thumbnailUrl, imageUrl, thumbnailAltText} = item

  const changeImage = () => {
    ImageChanged(id)
  }
  const classer = isActive ? 'show' : 'hidden'
  return (
    <li>
      <button onClick={changeImage}>
        <img className={classer} src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
