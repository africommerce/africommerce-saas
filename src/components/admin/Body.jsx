import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

// conflict debug
import styled from 'styled-components';
// import { AdminRoutes } from '../../pages/admin/AdminRoutes';
// import { SideNav } from './SideNav';
import { TopNav } from './TopNav';

const Container = styled.div`
  display: flex;
  margin: 0;
  flex: 10;
  flex-direction: column;
`;
// SALES PAGE

// AllOders

  function createData(name, Num, Customer, Seller, Amount, Delivery, method, status, Refund, Option) {
    return {
      name,
      Num,
      Customer,
      Seller,
      Amount,
      Delivery,
      method,
      status,
      Refund,
      Option,
    };
  }

  const rows = [
    createData('20220912-10085522	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$999.000', 'Delivered', 'Cash On Delivery', 'Paid', 'No Refund'),
    createData('20220906-10185640 new	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$48.450	', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220906-10155759 new	', 1, 'Paul K. Jensen	', 'Adidas', '$76.000', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220829-07250551 new	', 1, 'Paul K. Jensen	', 'LOUIS VUITTON	', '$120.000', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220828-13023343 new	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$514.000', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220828-12334652	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$190.000', 'Delivered', 'Wallet', 'Paid', 'No Refund'),
    createData('20220828-12322996 new	', 1, 'Paul K. Jensen	', 'Adidas', '$64.000', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220726-08275357 new	', 1, 'Paul K. Jensen	', 'Filon Asset Store	', '$113.300', 'Delivered', 'Cash On Delivery', 'Paid', 'No Refund'),
    createData('20220726-08040637	', 1, 'Paul K. Jensen	', 'Filon Asset Store	', '$23.800', 'Delivered', 'Cash On Delivery', 'Paid', 'No Refund'),
    createData('20220612-09093535 new	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$72.000', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220605-10102737 new	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$450.000', 'Delivered', 'Cash On Delivery', 'Paid', 'No Refund'),
    createData('20220602-13204496	', 1, 'Paul K. Jensen	', 'Adidas', '$64.000', 'Delivered', 'Cash On Delivery', 'Paid', 'No Refund'),
    createData('20220602-13132071 new	', 1, 'Paul K. Jensen	', 'LOUIS VUITTON	', '$80.000	', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220602-13120531 new	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$120.000	', 'Pending', 'Cash On Delivery', 'Unpaid', 'No Refund'),
    createData('20220428-06353357 new	', 1, 'Paul K. Jensen	', 'Inhouse Order	', '$36.720	', 'Picked Up', 'Cash On Delivery', 'Unpaid', 'No Refund'),
  
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    {
      id: 'Order Code:',
      numeric: false,
      disablePadding: true,
      label: 'Order Code:',
    },
    {
      id: 'Num. of Products',
      numeric: true,
      disablePadding: false,
      label: 'Num. of Products',
    },
    {
      id: 'Customer',
      numeric: true,
      disablePadding: false,
      label: 'Customer',
    },
    {
      id: 'Seller',
      numeric: true,
      disablePadding: false,
      label: 'Seller',
    },
    {
      id: 'Amount',
      numeric: true,
      disablePadding: false,
      label: 'Amount',
    },
    {
      id: 'Delivery Status',
      numeric: true,
      disablePadding: false,
      label: 'Delivery Status',
    },
    {
      id: 'Payment method	',
      numeric: true,
      disablePadding: false,
      label: 'Payment method	',
    },
    {
      id: 'Payment Status	',
      numeric: true,
      disablePadding: false,
      label: 'Payment Status	',
    },
    {
      id: 'Refund',
      numeric: true,
      disablePadding: false,
      label: 'Refund',
    },
    {
      id: 'Options',
      numeric: true,
      disablePadding: false,
      label: 'Options',
    },
  ];

  function EnhancedTableHead(props) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

    function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rows.map((n) => n.name);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.Num}</TableCell>
                        <TableCell align="right">{row.Customer}</TableCell>
                        <TableCell align="right">{row.Seller}</TableCell>
                        <TableCell align="right">{row.Amount}</TableCell>
                        <TableCell align="right">{row.Delivery}</TableCell>
                        <TableCell align="right">{row.method}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.Refund}</TableCell>
                        <TableCell align="right">{row.Option}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    );
  }

// END OF SALES PAGE
export const Body = () => {
  return (
    <>
  
      <Container>
        <div className="nav">
          {/*<SideNav />*/}
          <div className="nav__wrapper">
            <div className="NavMenu">
              <TopNav />
            </div>
            <div className="admin__body">
              {/* <AdminRoutes /> */}
              <EnhancedTable/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
