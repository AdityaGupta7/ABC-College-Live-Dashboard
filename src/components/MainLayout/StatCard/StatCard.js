import React, { Component } from 'react';
import CardHeader from './CardHeader';
import Attributes from './Attributes';
import CardTable from './CardTable';
import { types } from '../../../utils/constants';
import { connect } from 'react-redux';
import { fetchHighlights, fetchBuyers, fetchCountries, fetchIncomes } from '../../../state/card/actions';

class StatCard extends Component {
    state = {
        sortBy: -1
    };

    componentDidMount() {
        //page load - call respective card API
        const { type } = this.props;
        this.callFetchAPI(type);

        //persist sort option
        const sortOption = localStorage.getItem(type);
        if (sortOption?.length > 0) {
            this.setState({
                sortBy: parseInt(sortOption)
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { socketData, type } = this.props;
        if (socketData && prevProps.socketData !== socketData) {
            //listener - socket data is not null (i.e., not initial reducer-state) and previous and current props are different
            if (socketData.FLAG === types.ALL || socketData.FLAG === type) {
                this.callFetchAPI(type);
            }
        }
    }

    callFetchAPI = (type) => {
        //call API based on card type
        switch (type) {
            case types.HIGHLIGHTS:
                this.props.fetchHighlights();
                break;
            case types.BUYERS:
                this.props.fetchBuyers();
                break;
            case types.COUNTRIES:
                this.props.fetchCountries();
                break;
            case types.INCOME:
                this.props.fetchIncomes();
                break;
            default:
                break;
        }
    }

    onSortChange = (e) => {
        const val = parseInt(e.target.value);
        this.setState({
            sortBy: val
        }, () => {
            //add/remove selection option to/from localStorage to persist it
            const { type } = this.props;
            if (val > 0) {
                localStorage.setItem(type, val);
            }
            else {
                localStorage.removeItem(type);
            }
        });
    }

    render() {
        const { sortBy } = this.state;
        const { type, maxWidth, setMaxWidth } = this.props;
        const lowerCaseType = type.toLowerCase();
        const cardData = this.props[lowerCaseType];
        const data = cardData?.[lowerCaseType];
        const dataSet = data?.dataSet;
        const tableHeadings = dataSet?.header;
        const tableRows = dataSet?.data;
        const statsData = data?.stats;
        const filterData = data?.filter;
        const emptyMessage = cardData?.emptyMessage;
        const error = cardData?.error;

        return (
            <article className={`card${maxWidth ? maxWidth === type ? " full-width" : " hide-card" : ""}`}>
                <div className="card-inner">
                    <CardHeader
                        title={lowerCaseType}
                        sortBy={sortBy}
                        onSortChange={this.onSortChange}
                        type={type}
                        maxWidth={maxWidth}
                        setMaxWidth={setMaxWidth}
                        hasIssue={error || emptyMessage}
                    />
                    <div className="card-body">
                        <Attributes
                            statsData={statsData}
                            type={type}
                        />
                        <CardTable
                            sortBy={sortBy}
                            filterData={filterData}
                            tableHeadings={tableHeadings}
                            tableRows={tableRows}
                            hasIssue={error || emptyMessage}
                        />
                    </div>
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => ({
    highlights: state?.cardReducer?.highlights,
    buyers: state?.cardReducer?.buyers,
    countries: state?.cardReducer?.countries,
    income: state?.cardReducer?.income,
});

const mapDispatchToProps = dispatch => ({
    fetchHighlights: () => fetchHighlights(dispatch),
    fetchBuyers: () => fetchBuyers(dispatch),
    fetchCountries: () => fetchCountries(dispatch),
    fetchIncomes: () => fetchIncomes(dispatch),
});

//include prop-types

export default connect(mapStateToProps, mapDispatchToProps)(StatCard);
