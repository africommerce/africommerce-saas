import { Box, Divider, Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: inherit;
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
export default function ProductImages() {
  return (
    <Container>
      {' '}
      <Box sx={{ flexGrow: 1 }}>
        Product Information
        <Divider />
      </Box>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="product">Product Name</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            className="formInput"
            id="product"
            placeholder="Product Name"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="category">
            Category <span>*</span>
          </label>
        </div>
        <div className="inputs">
          <input
            type="text"
            className="formInput"
            id="category"
            placeholder="Select Category"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="brand">Brand</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            className="formInput"
            id="brand"
            placeholder="Select Brand"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="units">Unit</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            className="formInput"
            id="units"
            placeholder="Unit (e.g. KG, Pc etc)"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="weight">Weight (In Kg)</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            className="formInput"
            id="weight"
            placeholder="0.00"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="minQty">
            Minimum Purchase Qty <span>*</span>
          </label>
        </div>
        <div className="inputs">
          <input
            type="number"
            className="formInput"
            id="minQty"
            placeholder="1"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="tags">
            Tags <span>*</span>
          </label>
        </div>
        <div className="inputs">
          <input
            type="text"
            className="formInput"
            id="tags"
            placeholder="Tags"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="barcode">Barcode</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            className="formInput"
            id="barcode"
            placeholder="Barcode"
            width="100%"
            required
          />
        </div>
      </div>
      <div className="formControl">
        <div className="labels">
          <label htmlFor="Refundable">Refundable</label>
        </div>
        <div className="inputs">
          <div style={{}} className="formInput">
            <Switch />
          </div>
        </div>
      </div>
    </Container>
  );
}
