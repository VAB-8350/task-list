import './Switch.less'

interface props {
  completed: boolean
  onComplete: () => void
}

export default function Switch({completed, onComplete}: props) {

  return (
    <button className={`box ${completed ? 'active': ''}`} onClick={onComplete} >
      <span className='point'/>
    </button>
  )
}
