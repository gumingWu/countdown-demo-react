import { useState } from "react"

interface Props {
  count?: number
  callback: () => void
}

export default function CountDown(props: Props) {
  const [count, setCount] = useState(props.count || 10)

  const flag = setTimeout(() => {
    setCount(count-1)
  }, 1000)
  if(count === 0) {
    clearTimeout(flag)
  }

  return (
    <button disabled={count !== 0} onClick={props.callback}>
      {
        count === 0 ? '开抢啦！' : '倒计时：' + count
      }
    </button>
  )
}