import {MdDelete} from 'react-icons/md'
import {
  PlaylistContainer,
  FirstContainer,
  SecondContainer,
  Img,
  Heading,
  PlaylistInfo,
  Para,
  Button,
} from './style'

const Playlist = props => {
  const {data, deleteRequest} = props
  const {imageUrl, name, genre, duration, id} = data
  const onClickToDeleteList = () => {
    deleteRequest(id)
  }
  return (
    <PlaylistContainer>
      <FirstContainer>
        <Img src={imageUrl} alt="track" />
        <PlaylistInfo>
          <Heading as="p">{name}</Heading>
          <Para>{genre}</Para>
        </PlaylistInfo>
      </FirstContainer>
      <SecondContainer>
        <p className="durationPara">{duration}</p>
        <Button type="button" data-testid="delete" onClick={onClickToDeleteList}>
          <MdDelete />
        </Button>
      </SecondContainer>
    </PlaylistContainer>
  )
}

export default Playlist
