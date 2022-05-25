import MemoBlock from "../MemoBlock/MemoBlock";
import "./Board.css";

const Board = ({ memoBlocks }) => {
    return (
        <main className="Board">
            {memoBlocks.map((memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
        </main>
    );
}

export default Board;