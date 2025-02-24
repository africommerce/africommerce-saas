      <div className={classes.top__chart}>
        <div className={classes.counter__chart_wrapper}>
          <div className={classes.customer}>
            <span className={classes.total}>Total</span>
            <span className={classes.customer}>Customer</span>
            <span className={classes.value}> 2</span>
          </div>
          <div className={classes.order}>
            <span className={classes.total}>Total</span>
            <span className={classes.customer}>Order</span>
            <span className={classes.value}> 66</span>
          </div>
          <div className={classes.product_cat}>
            <span className={classes.total}>Total</span>
            <span className={classes.customer}>Product Category</span>
            <span className={classes.value}> 253</span>
          </div>
          <div className={classes.product_brand}>
            {' '}
            <span className={classes.total}>Total</span>
            <span className={classes.customer}>Product Brand</span>
            <span className={classes.value}> 100</span>
          </div>
        </div>
        <div className={classes.product__chart_wrapper}>
          <div className={classes.product}>
            <div className={classes.title}>
              <span>Products</span>
            </div>
            <div className={classes.chart}>
              {' '}
              <PieChart />
            </div>
          </div>
          <div className={classes.sellers}>
            <div className={classes.title}>
              <span style={{ color: 'black' }}>Sellers</span>
            </div>
            <div className={classes.chart}>
              {' '}
              <PieChart />{' '}
            </div>
            {/* <div className={classes.chart_names}>
              <span>
                <span className={classes.published}></span>{' '}
                <span>Total Publish Products</span>
              </span>
              <span>
                <span className={classes.sellers}></span>{' '}
                <span>Total Sellers Products</span>
              </span>
              <span>
                <span className={classes.admin}></span>{' '}
                <span>Total Admin Products</span>
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className={classes.middle__chart}>
        {' '}
        <div className={classes.product_sale__chart}>
          <div className={classes.title}>Category wise product sale</div>
          <BarChart />
        </div>
        <div className={classes.product_stock}>
          <div className={classes.title}>Category wise product stock</div>
          <BarChart />
        </div>
      </div>
      <div className={classes.bottom__chart}>
        {' '}
        <div className={classes.carousel_container}>
          <AdminProducts/>
        </div>
      </div>