import React from 'react'
import { DataTable,
        TableBatchAction,
        TableBatchActions,
        TableToolbar,
        TableToolbarAction,
        TableToolbarContent,
        TableToolbarSearch,
        TableToolbarMenu,
        Table,
        TableBody,
        TableCell,
        TableContainer,
        TableHead,
        TableHeader,
        TableRow,
        TableSelectAll, TableSelectRow, 
        Button,
 } from '@carbon/react';
import { TrashCan, Save, Download, Add } from '@carbon/icons-react';
import { batchActionClick, rows, headers } from './shared';

export default function OpeningScreen() {
  return (
    <DataTable rows={rows} headers={headers}>
        {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getSelectionProps,
        getToolbarProps,
        getBatchActionProps,
        onInputChange,
        selectedRows,
        getTableProps,
        getTableContainerProps,
        selectRow
    }) => {
        const batchActionProps = {
        ...getBatchActionProps({
            onSelectAll: () => {
            rows.map(row => {
                if (!row.isSelected) {
                selectRow(row.id);
                }
            });
            }
        })
        };
        return <TableContainer title="DataTable" description="This is just a sample test to show the usage of the Data Table with multiple row selection in the carbon design system using React." {...getTableContainerProps()}>
            <TableToolbar {...getToolbarProps()}>
                <TableBatchActions {...batchActionProps}>
                <TableBatchAction tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1} renderIcon={TrashCan} onClick={batchActionClick(selectedRows)} disabled>
                    Delete
                </TableBatchAction>
                <TableBatchAction hasIconOnly iconDescription="Add" tooltipPosition="bottom" tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1} renderIcon={Add} onClick={batchActionClick(selectedRows)}>
                    Delete
                </TableBatchAction>
                <TableBatchAction hasIconOnly iconDescription="Save" tooltipPosition="bottom" tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1} renderIcon={Save} onClick={batchActionClick(selectedRows)}>
                    Save
                </TableBatchAction>
                <TableBatchAction tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1} renderIcon={Download} onClick={batchActionClick(selectedRows)}>
                    Download
                </TableBatchAction>
                </TableBatchActions>
                <TableToolbarContent aria-hidden={batchActionProps.shouldShowBatchActions}>
                <TableToolbarSearch tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0} onChange={onInputChange} />
                <TableToolbarMenu tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}>
                    <TableToolbarAction onClick={() => alert('Alert 1')}>
                    Action 1
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert('Alert 2')}>
                    Action 2
                    </TableToolbarAction>
                    <TableToolbarAction onClick={() => alert('Alert 3')}>
                    Action 3
                    </TableToolbarAction>
                </TableToolbarMenu>
                <Button tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0} onClick={console.log('Add new row')} kind="primary">
                    Add new
                </Button>
                </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()} aria-label="sample table">
                <TableHead>
                <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map((header, i) => <TableHeader key={i} {...getHeaderProps({
                header
                })}>
                        {header.header}
                    </TableHeader>)}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, i) => <TableRow key={i} {...getRowProps({
                row
            })}>
                    <TableSelectRow {...getSelectionProps({
                row
                })} />
                    {row.cells.map(cell => <TableCell key={cell.id}>{cell.value}</TableCell>)}
                    </TableRow>)}
                </TableBody>
            </Table>
            </TableContainer>;
    }}
    </DataTable>
  )
}
