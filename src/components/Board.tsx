import styled from 'styled-components';
import { Square, SquareType } from './Square';

const StyledBoard = styled.div`
  background-color: #008000;
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  position: relative;
`;

export const Board = (props: {
  SquareTypes: SquareType[][],
  onClick: (x: number, y: number) => void,
}) => {
  const { SquareTypes, onClick } = props;

  const squares = (
    SquareTypes.map((line, y) => {
      return (
        <div>
          {
            line.map((row, x) => {
              return (
                <Square
                  color={row}
                  onClick={onClick}
                  x={x}
                  y={y}
                />
              )
            })
          }
        </div>
      )
    })
  );

  return (
    <StyledBoard>
      {squares}
    </StyledBoard>
  )
};