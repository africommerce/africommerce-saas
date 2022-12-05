import { useState } from 'react';
import { SwitchUI } from '../../admin/ui/Switch';
import { Select } from '../../wholesale/ui/Select';

// import { Select } from '../ui/Select';
import classes from './CreateProduct.module.css';

const CreateProduct = () => {
  const [selectOption, setSelectOptions] = useState(false);
  const [tags] = useState(['Iphone']);
  const [addMore] = useState([0]);
  //   setAddMore('kelvin');
  const addMoreHandler = () => {
    // setAddMore((prev) => prev.push(2));
    // console.log(addMore.length);
  };

  const inputHadler = (e) => {
    console.log(e.target.value);
    // setTags();
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.container} onClick={() => setSelectOptions(false)}>
      <div className={classes.head_wrapper}> Add Product</div>
      <form onSubmit={formSubmitHandler} className={classes.form_container}>
        <div className={classes.body}>
          <div className={classes.left_container}>
            <div className={classes.left_wrapper}>
              <div className={classes.productInformation}>
                <div className={classes.head_tite}> Product Information</div>
                <hr />
                <div className={classes.productInformation_body}>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Product Name <span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <input
                        type="text"
                        placeholder="Product Name"
                        autoComplete="true"
                      />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Category<span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <Select
                        data={[
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                        ]}
                        state={selectOption}
                      />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Brand <span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <Select
                        data={[
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                          '---Women Clothing & Fashion',
                        ]}
                        state={selectOption}
                      />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Unit <span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <input type="text" placeholder="Unit (e.g KG, Pc etc)" />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Minimum Purchase Qty <span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <input type="text" placeholder="1" />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Tags <span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <span className={classes.tags}>
                        {tags.map((tag) => (
                          <span className={classes.tag_wrapper}>
                            {' '}
                            <span className={classes.tag_text}>{tag}</span>{' '}
                            <span className={classes.tag_close}>x</span>
                          </span>
                        ))}

                        <input
                          type="text"
                          //   ref={tagInputRef}
                          placeholder="Type & Enter"
                          onKeyDown={(event) => {
                            event.preventDefault();
                            console.log(event.key);
                          }}
                          onChange={inputHadler}
                        />
                      </span>
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Barcode <span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <input type="text" placeholder="Barcode" />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>
                        Refundable <span>*</span>
                      </label>
                    </span>
                    <span className={classes.form_input}>
                      <SwitchUI />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.productInformation}>
              <div className={classes.head_tite}> Product Images</div>
              <hr />
              <div className={classes.productInformation_body}>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Gallery Images</label>
                  </span>
                  <span className={classes.form_input}>
                    <input type="file" />
                  </span>
                </span>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Thumbnail Image </label>
                  </span>
                  <span className={classes.form_input}>
                    <input type="file" />
                    {/* <UploadButtons>Choose File</UploadButtons> */}
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.productInformation}>
              <div className={classes.head_tite}> Product Videos</div>
              <hr />
              <div className={classes.productInformation_body}>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Video Provider</label>
                  </span>
                  <span className={classes.form_input}>
                    <select>
                      <option value="" key="" selected>
                        <span>Youtube</span>
                      </option>

                      <option value="" key="">
                        <span>DailyMotion</span>
                      </option>

                      <option value="" key="">
                        <span>Vimeo</span>
                      </option>
                    </select>
                  </span>
                </span>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Video Link </label>
                  </span>
                  <span className={classes.form_input}>
                    <input
                      type="text"
                      placeholder="Video Link"
                      autoComplete="true"
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.productInformation}>
              <div className={classes.head_tite}> Product price + stock</div>
              <hr />
              <div className={classes.productInformation_body}>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>
                      Unit price <span>*</span>
                    </label>
                  </span>
                  <span className={classes.form_input}>
                    <input type="number" placeholder="1" autoComplete="true" />
                  </span>
                </span>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Set Point </label>
                  </span>
                  <span className={classes.form_input}>
                    <input type="number" placeholder="0" autoComplete="true" />
                  </span>
                </span>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>
                      Quantity <span>*</span>{' '}
                    </label>
                  </span>
                  <span className={classes.form_input}>
                    <input type="number" placeholder="0" autoComplete="true" />
                  </span>
                </span>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>SKU </label>
                  </span>
                  <span className={classes.form_input}>
                    <input type="text" placeholder="SKU" autoComplete="true" />
                  </span>
                </span>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Wholesale Prices </label>
                  </span>
                  <span className={classes.form_input}>
                    <span className={classes.add_wrapper}>
                      {addMore.map((add) => (
                        <span>
                          <span>
                            <input type="text" placeholder="Min QTY" />
                          </span>
                          <span>
                            <input type="text" placeholder="Max QTY" />
                          </span>
                          <span>
                            <input type="text" placeholder="Price per pieces" />
                          </span>
                        </span>
                      ))}
                      <span>
                        {' '}
                        <button onClick={addMoreHandler}>Add More</button>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.productInformation}>
              <div className={classes.head_tite}> Product Description</div>
              <hr />
              <div className={classes.productInformation_body}>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Gallery Images</label>
                  </span>
                  <span className={classes.form_input}>
                    <textarea
                      type="text"
                      placeholder="Description"
                      autoComplete="true"
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.productInformation}>
              <div className={classes.head_tite}> PDF Specification</div>
              <hr />
              <div className={classes.productInformation_body}>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>PDF Specification</label>
                  </span>
                  <span className={classes.form_input}>
                    <input
                      type="file"
                      placeholder="Product Name"
                      autoComplete="true"
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className={classes.productInformation}>
              <div className={classes.head_tite}> SEO Meta Tags</div>
              <hr />
              <div className={classes.productInformation_body}>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <label>Meta Title</label>
                  </span>
                  <span className={classes.form_input}>
                    <input
                      type="text"
                      placeholder="Meta Title"
                      autoComplete="true"
                    />
                  </span>
                </span>
                <span className={classes.form_group}>
                  <span className={classes.form_label}>
                    <span>
                      <label>Description </label>
                    </span>
                  </span>
                  <span className={classes.form_input}>
                    <textarea
                      type="text"
                      placeholder="Description"
                      autoComplete="true"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={classes.right_container}>
            <div className={classes.right_wrapper}>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>
                  Shipping Configuration
                </div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>Free Shipping</span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>Flat Rate</span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>
                      Is Product Quantity Mulitiply
                    </span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>
                  Low Stock Quantity Warning
                </div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_form_group}>
                    <span className={classes.form_label}>
                      <label>Quantity</label>
                    </span>
                    <span className={classes.shipping_form_input}>
                      <input
                        type="number"
                        placeholder="0"
                        autoComplete="true"
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>
                  Stock Visibility State
                </div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>
                      Show Stock Quantity
                    </span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>
                      Show Stock With Text Only
                    </span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>Hide Stock</span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>Cash On Delivery</div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>Status</span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>Featured</div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>Status</span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>Todays Deal</div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_item}>
                    <span className={classes.shipping_left}>Status</span>
                    <span className={classes.shipping_right}>
                      <SwitchUI />
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>Flash Deal</div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_form_group}>
                    <span className={classes.form_label}>
                      <label>Add To Flash</label>
                    </span>
                    <span className={classes.shipping_form_input}>
                      <span style={{ width: '100%' }}>
                        <select className={classes.flash_select}>
                          <option value="" key="" selected>
                            Choose a Flash Title
                          </option>
                          <option value="" key="">
                            Winter Sale
                          </option>
                          <option value="" key="">
                            Falsh Sale
                          </option>
                          <option value="" key="">
                            Electronic Sale
                          </option>
                          <option value="" key="">
                            Flash Deal
                          </option>
                        </select>
                      </span>
                    </span>
                  </span>
                  <span className={classes.shipping_form_group}>
                    <span className={classes.form_label}>
                      <label>Discount</label>
                    </span>
                    <span className={classes.shipping_form_input}>
                      <input
                        type="number"
                        placeholder="0"
                        autoComplete="true"
                      />
                    </span>
                  </span>
                  <span className={classes.shipping_form_group}>
                    <span className={classes.form_label}>
                      <label>Discount Type</label>
                    </span>
                    <span className={classes.shipping_form_input}>
                      <select className={classes.flash_select}>
                        <option value="" key="" selected>
                          Choose Discount Type
                        </option>
                        <option value="" key="">
                          Flat
                        </option>
                        <option value="" key="">
                          Percentage
                        </option>
                      </select>
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>
                  Estimate Shipping Time
                </div>
                <hr />
                <div className={classes.shipping_content}>
                  <span className={classes.shipping_item}>
                    <span
                      style={{ width: '100%' }}
                      className={classes.shipping_form_group}
                    >
                      <span className={classes.shipping_form_label}>
                        <label>Shipping Days</label>
                      </span>
                      <span className={classes.shipping_form_input}>
                        <input
                          type="text"
                          placeholder="3"
                          autoComplete="true"
                        />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div className={classes.shipping_configuration}>
                <div className={classes.shipping_title}>Vat & TAX</div>
                <hr />
                <div className={classes.vat_content}>
                  <span className={classes.vat_item}>
                    <span
                      style={{ width: '100%' }}
                      className={classes.vat_form_group}
                    >
                      <span className={classes.vat_label}>
                        <label>Shipping Days</label>
                      </span>
                      <span className={classes.vat_input}>
                        <input
                          type="number"
                          placeholder="3"
                          autoComplete="true"
                        />
                        <select>
                          <option value="" key="">
                            Flat
                          </option>
                          <option value="" key="">
                            Percentage
                          </option>
                        </select>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
