import styled from "styled-components"
import { useState } from "react"
import { search } from "~/features/api/productAPI"
import { useNavigate } from 'react-router-dom';
import { setProducts } from "~/features/slice/productSlice";
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = styled.div`
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #202124;
  display: flex;
  z-index: 3;
  height: 44px;
  background: white;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  width: auto;
  max-width: 480px;
  &:hover {
		box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223,225,229,0);
	};
  flex-grow: 1
`
const SearchBarWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 5px 8px 0 14px;
`

const SearchBarLeft = styled.div`
  font-size: 14px;
  font-family: arial, sans-serif;
  color: #202124;
  display: flex;
  align-items: center;
  padding-right: 13px;
  margin-top: -5px;
`

const SearchIconWrapper = styled.div`
  margin: auto;
`

const SearchIcon = styled.span`
  margin-top: 3px;
  color: #9aa0a6;
  height: 20px;
  line-height: 20px;
  width: 20px;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  line-height: 24px;
  position: relative;
  width: 24px;
`

const SearchBarIcon = styled.div`
  display: inline-block;
  fill: currentColor;
  height: 24px;
  line-height: 24px;
  position: relative;
  width: 24px;
`

const SearchBarCenter = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const SearchBarInputSpacer = styled.div`
  color: transparent;
  flex: 100%;
  white-space: pre;
  height: 34px;
  font-size: 16px;
`

const SearchBarInput = styled.input`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, .87);
  word-wrap: break-word;
  outline: none;
  display: flex;
  flex: 100%;
  margin-top: -37px;
  height: 34px;
  font-size: 16px;
  max-width: 100%;
  width: 100%;
`

const SearchBarRight = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-top: -5px;
  align-items: stretch;
  flex-direction: row
`

const SearchBarClearIcon = styled.div`
  margin-right: 12px
`

const VoiceSearch = styled.svg`
  flex: 1 0 auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 2.8em;
`
function SearchBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [key, setKey] = useState("")

  const handleChangeSearch = (event) => {
    setKey(event.target.value);
  }

  const handleClickSearch = () => {
    search(key)
      .then(response => {
        console.log(response.data)
        dispatch(setProducts(response.data))
        navigate("/search");
      })
  }

  return (
    <SearchBar>
      <SearchBarWrapper>
        <SearchBarLeft>
          <SearchIconWrapper>
            <VoiceSearch role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z">
                </path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z">
                </path>
                <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z">
                </path>
            </VoiceSearch>
          </SearchIconWrapper>
        </SearchBarLeft>
        
        <SearchBarCenter>
          <SearchBarInputSpacer></SearchBarInputSpacer>
          <SearchBarInput onChange = {handleChangeSearch} type="text" maxlength="2048" name="search" autocapitalize="off" autocomplete="off" title="Search" role="combobox" placeholder="Enter here ..."/>
        </SearchBarCenter>

        <SearchBarRight onClick={handleClickSearch}>
          <SearchIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
              </path>
            </svg>
          </SearchIcon>
        </SearchBarRight>
      </SearchBarWrapper>
    </SearchBar>
  )
}

export default SearchBox;
 