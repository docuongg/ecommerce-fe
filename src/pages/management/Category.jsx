import styled from "styled-components";
import { EnhancedTable } from "~/components/components/table";

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

function Category() {
  return (  
    <div>
      <RowContainer>
        <ColContainer>
          <EnhancedTable/>
        </ColContainer>
      </RowContainer>
    </div>
  )
}

export default Category;