# Design a table component which should take columns definitions as input and exposes functions to add, remove and update table rows.
# Column Definition should consist of label, width and type of cell to be displayed. Cell type can be text, input, checkbox.
# Table row data should be added with unique rowId and column data in the order of column definitions.
# If you want any further help contact to developer sunny.sen1234@gmail.com

var table = new MyTable(options, containerElement); Where ​options​is an object containing following fields
colDefs​: An array of objects Example: [
                      {
                           label: “Text Columns”,
                           width: ‘40%’,
                           type: ‘text’
}, {
}, {
}
... ]
data​: An array of row objects Example: [
                      {
                           id: “uniqueRowId”,
                           colData: [“Value1”, “value2”, true]
                      },
... ]
label: “Input Column”
width: ‘60%’
type: ‘input’
label: “Checkbox Column”
width: ‘30px’
type: ‘checkbox’
This table component should have following methods
     table.addRows(<list of rows same as data>);
     table.deleteRows(<list of row ids to be deleted>);
     table.updateRows(<list of rows to be updated>);
Cell components:
     Based on the type of columns cell should display different
elements. For example in case of input type column it should display
<input type=”text”> element with the value provided. For checkbox it
should display checkbox input.

## Install
- `npm install`

## Run
- In development: `npm start`.
- Static build: `npm run build`.

