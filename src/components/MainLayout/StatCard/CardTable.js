import React from 'react';
import { sortFunc } from '../../../utils/helpers';

const CardTable = ({ filterData, tableHeadings, tableRows,
    sortBy, hasIssue }) => (
    <section className="info">
        {hasIssue ? <div className="no-screen">
            {/* no data found OR error fetching data */}
            <div className="no-screen-wrapper">
                <h3>{hasIssue}</h3>
            </div>
        </div> : <>
            <header>
                <p>{filterData?.label}</p>
                <p>{filterData?.value}%</p>
            </header>
            <div className="table-wrapper">
                <div className="table">
                    <div className="table-inner">
                        <table>
                            <thead>
                                {tableHeadings?.length > 0 ? <tr>
                                    {tableHeadings.map(header => (
                                        <th key={header}>{header}</th>
                                    ))}
                                </tr> : null}
                            </thead>
                            <tbody>
                                {/* data passes through sortFunc transformer function */}
                                {
                                    tableRows?.length > 0 ? sortFunc(sortBy, tableRows).map(item => (
                                        <tr key={item.label} style={{ color: item.color }}>
                                            <td>{item.label}</td>
                                            <td>{item.value}</td>
                                        </tr>
                                    )) : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>}
    </section>
);

export default CardTable;