import './TodoCount.less'

export default function TodoCount({ percentage }: {percentage: number}) {


  return (
    <span className='change-bar' >
      <span className='load' style={{width: `${percentage}%`}}/>
    </span>
  )
}
