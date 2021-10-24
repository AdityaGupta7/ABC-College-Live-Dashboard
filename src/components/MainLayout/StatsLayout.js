import React, { Component } from 'react';
import StatCard from './StatCard';
import { getSocketData } from '../../state/socket/actions';
import { types } from '../../utils/constants';
import { hostUrl } from '../../utils/urls';
import { connect } from 'react-redux';

class StatsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxWidth: null
        };
        //can change the list to remove some cards from UI
        this.typesList = [types.HIGHLIGHTS, types.BUYERS, types.COUNTRIES, types.INCOME];
    }

    componentDidMount() {
        this.socket = window.io(`${hostUrl}/`, { transports: ['websocket'] });
        this.socket.on("REFRESH_DATA", data => {
            //send to reducer
            this.props.dispatch(getSocketData(data));
        });

        //persist resize action
        const resizeType = localStorage.getItem('resize-type');
        if (resizeType?.length > 0) {
            this.setState({
                maxWidth: resizeType
            });
        }
    }

    componentWillUnmount() {
        //disconnect socket connection on unmount
        this.socket.disconnect();
    }

    setMaxWidth = (type) => {
        this.setState({
            maxWidth: type
        }, () => {
            //add/remove selection choice to/from localStorage to persist it
            if (type) {
                localStorage.setItem('resize-type', type);
            }
            else {
                localStorage.removeItem('resize-type');
            }
        });
    }

    render() {
        const { maxWidth } = this.state;
        const { socketData } = this.props;
        console.log('socketData -> ', socketData);

        return (
            <main>
                {this.typesList.map(cardType => (
                    <StatCard
                        key={cardType}
                        type={cardType}
                        maxWidth={maxWidth}
                        setMaxWidth={this.setMaxWidth}
                        socketData={socketData}
                    />
                ))}
            </main>
        );
    }
}

const mapStateToProps = state => ({
    socketData: state?.socketReducer?.socketData
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(StatsLayout);