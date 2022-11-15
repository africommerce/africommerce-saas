import React from 'react';
import styled from 'styled-components';
import AutocompleteSelect from '../admin/ui/AutoCompleteSelect';
import SelectUI from '../admin/ui/SelectUI';
const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  margin-top: 1rem;

  flex-wrap: wrap;
  .productForm {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 1rem;
    .formControl {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      gap: 1rem;
      .labels {
        display: flex;
        flex: 2;
      }
      .inputs {
        display: flex;
        flex: 7;
        width: 100%;
      }
      label {
        display: flex;
        span {
          display: flex;
          color: red;
        }
      }
      select {
        display: flex;
        padding: 1rem;
        outline: none;
        border-radius: 5px;
        border: 1px solid gray;
        width: 100%;
        max-width: 80%;
        min-width: 100px;
        color: gray;
        font-weight: bold;
        transition: all 300ms ease;

        &:focus {
          border: 1px solid red;
        }
      }
      input {
        display: flex;
        padding: 1rem;
        outline: none;
        border-radius: 5px;
        border: 1px solid gray;
        width: 100%;
        max-width: 80%;
        min-width: 100px;
        color: gray;
        font-weight: bold;
        transition: all 300ms ease;

        &:focus {
          border: 1px solid red;
        }
      }
    }
  }
`;
export default function CreateProductForm() {
  return (
    <Container>
      <form className="productForm">
        <div className="formControl">
          <div className="labels">
            <label htmlFor="productName">
              Product Name <span>*</span>
            </label>
          </div>
          <div className="inputs">
            <input
              type="text"
              className="formInput"
              id="productName"
              placeholder="Product Name"
              width="100%"
              required
            />
          </div>
        </div>

        <div className="formControl">
          <div className="labels">
            <label htmlFor="productName">
              Categories <span>*</span>
            </label>
          </div>
          <div
            className="inputs"
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <AutocompleteSelect
              options={[
                { title: 'The Shawshank Redemption' },
                { title: 'The Godfather' },
                { title: 'The Godfather: Part II' },
                { title: 'The Dark Knight' },
                { title: '12 Angry Men' },
                { title: "Schindler's List" },
                { title: 'Pulp Fiction' },
              ]}
              label=""
            />
          </div>
        </div>
      </form>
    </Container>
  );
}
