export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handLeClick = () => {
      updateBoard(index)
    }
    return (
      <div onClick={handLeClick} className={className}>
        {children}
      </div>
    )
  }