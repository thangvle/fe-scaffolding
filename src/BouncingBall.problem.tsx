function Ball({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 99999,
        ...style,
      }}
    />
  )
}

const THRESHOLD = 500
export function BouncingBallProblem() {
  const handleChangeDirection = () => {}

  return (
    <div>
      <p>Bouncing ball problem</p>
      <button onClick={handleChangeDirection}>Change direction</button>
      <Ball
        style={{
          transform: `translateY(0px)`,
        }}
      />
    </div>
  )
}
