package com.plotbooking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table
@Entity
public class PlotInfo {
	
	@Id
	@Column(name = "plot_no")
	private int plotNo;
	private String status;
	private String owner;
	
	
	public PlotInfo() {
		super();
	}

	public PlotInfo(int plotNo, String status, String owner) {
		super();
		this.plotNo = plotNo;
		this.status = status;
		this.owner = owner;
	}

	public int getPlotNo() {
		return plotNo;
	}

	public void setPlotNo(int plotNo) {
		this.plotNo = plotNo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	@Override
	public String toString() {
		return "PlotInfo [plotNo=" + plotNo + ", status=" + status + ", owner=" + owner + "]";
	}
	
	

}
