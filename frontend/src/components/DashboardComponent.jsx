import React from 'react';

import PlotMap from './PlotMap';
import BookingStatus from './BookingStatus';

import PlotsService from '../services/PlotsService';


const DashboardComponent = () => {
    const [showDashboard, setShowdashboard] = React.useState(true);
    const [plotInfo, setPlotsInfo] = React.useState([]);
    const [firstLoad, setFirstLoad] = React.useState(true);
    const [statusInfo, setStatusInfo] = React.useState({});

    if (firstLoad) {
        PlotsService.getPlotsInfo()
            .then(res => {
                if (res.status == 200) {
                    setPlotsInfo(res.data);
                    setFirstLoad(false);
                }

            })

    }

    const handleOk = async (status, plotno, owner) => {
        const userName = localStorage.getItem('userName');

        if (status === 'booked') {
            if (owner !== userName) {
                setShowdashboard(true);
                setFirstLoad(true);
                return;
            } else {
                status = 'available'
                owner = null
            }

        } else {
            status = 'booked'
        }

        const plotInfo = {
            status,
            owner,
            plotNo: plotno
        }

        const res = await PlotsService.updatePlotStatus(plotInfo);

        if (res.status === 200) {
            setShowdashboard(true);
            setFirstLoad(true);
        }

    };

    const handleCancel = () => {
        setShowdashboard(true);
        setFirstLoad(true);
    };

    const bookPlot = (plotno) => {
        const plot = plotInfo.find(plot => plot.plotNo === plotno);
        const userName = localStorage.getItem('userName');

        if (plot.status === 'booked') {
            if (plot.owner && plot.owner === userName) {
                setStatusInfo({ status: plot.status, plotno, owner: plot.owner, buttonText: 'Continue', msg: `Plot :${plotno} is already booked by you. Do you want to sell?` });
            } else {
                setStatusInfo({ status: plot.status, plotno, owner: plot.owner, buttonText: 'Continue', msg: `Plot :${plotno} is already booked by ${plot.owner}. Do you want to book another plot?` });
            }
        } else {
            setStatusInfo({ status: plot.status, plotno, buttonText: 'book', msg: `Plot :${plotno} is available. Do you want to book?`, owner: userName });
        }

        setShowdashboard(false);
    }

    return (
        <>
            {(showDashboard) && (plotInfo.length > 0) ? (
                <PlotMap plotInfo={plotInfo} bookPlot={bookPlot} />
            ) : <BookingStatus statusInfo={statusInfo} handleOk={handleOk} handleCancel={handleCancel} />}
        </>

    );
}


export default DashboardComponent;

