import CreatePost from '../components/CreatePost'
import PostDetails from '../components/PostDetails'
import Posts from '../components/Posts'

const Home = () => {
  const title ="Home"
  const style = {width:"fit-content", marginTop:"30px"}
  return (
    <div className='min-h-screen pb-9'>
      <h1 style={style} className='h1 btn'>{title}</h1>
      <Posts/>
      <PostDetails/>
      <CreatePost/>
    </div>
  )
}

export default Home
