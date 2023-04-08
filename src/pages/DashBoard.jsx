import styled from "styled-components"
import { LineChart } from '~/components/components/Chart'
import { StatsBox } from '~/components/components/statistic'

const RowContainer = styled.div`
  display: flex;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 24px;
`

const ColContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  flex: 1;
`

function DashBoard() {
  return ( 
    <div>
      <RowContainer>
        <ColContainer>
          <StatsBox/>
        </ColContainer>
        <ColContainer>
          <StatsBox/>
        </ColContainer>        
        <ColContainer>
          <StatsBox/>
        </ColContainer>
      </RowContainer>

      <RowContainer>
        <ColContainer>
          <LineChart/>
        </ColContainer>
      </RowContainer>
    </div>
  );
}

export default DashBoard;