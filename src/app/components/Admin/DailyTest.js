<TableContainer
style={{
  border: "3px solid #f1f1f1",
  marginTop: 30,
  paddingLeft:10
}}
  component={Paper}>

  <h5
      style={{
      marginTop: 30,
      paddingLeft:10,
      borderLeft: "10px solid #4c8c40"
  }}
      className="container">DAILY TEST FOR PROVINCE/CITY - {SearchCityData.search.toUpperCase()}</h5>

      <div
      align="right"
      style={{
      marginBottom: 10
  }}>
      <TextField
          placeholder="search by City"
          value={SearchCityData.search}
          onChange={e => setCSearch({
          ...SearchCityData,
          search: e.target.value
      })}/>

  </div>
  <Table
      size="small"
      className="table table-striped table-bordered"
      style={{
      marginTop: 5,
      marginBottom: 15
  }}>

      <TableHead>
          <TableRow>
              <TableCell>No#</TableCell>
              <TableCell>CITY</TableCell>
              <TableCell>POSITIVE</TableCell>
              <TableCell>NEGATIVE</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>

          {(rowsPerPage > 0
              ? dailyTestCounts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : dailyTestCounts).sort((a, b) => a.dateOfTest.localeCompare(b.dateOfTest)).map((x, i) => (
              <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{x.dateOfTest}</TableCell>
                  <TableCell>{x.positiveTestCount}</TableCell>
                  <TableCell>{x.negativeTestCount}</TableCell>

              </TableRow>

          ))}
      </TableBody>

      <TableFooter>
          <TableRow>
              <TablePagination
                  rowsPerPageOptions={[
                  5,
                  10,
                  25, {
                      label: 'All',
                      value: -1
                  }
              ]}
                  colSpan={3}
                  count={dailyTestCounts.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                  inputProps: {
                      'aria-label': 'rows per page'
                  },
                  native: true
              }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}/>
          </TableRow>
      </TableFooter>
  </Table>

</TableContainer>
