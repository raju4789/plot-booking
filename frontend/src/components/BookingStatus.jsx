import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function BookingStatus({statusInfo, handleOk, handleCancel}) {

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Plot Booking Status</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {statusInfo.msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCancel()} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleOk(statusInfo.status, statusInfo.plotno, statusInfo.owner)} color="primary" autoFocus>
           {statusInfo.buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
