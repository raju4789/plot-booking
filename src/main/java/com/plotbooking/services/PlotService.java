package com.plotbooking.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.plotbooking.model.PlotInfo;
import com.plotbooking.repository.PlotRepository;

@Service
public class PlotService {

	@Autowired
	private PlotRepository plotRepository;

	public List<PlotInfo> getAllPlots() {

		List<PlotInfo> result = new ArrayList<PlotInfo>();
		plotRepository.findAll().forEach(result::add);

		return result;
	}
	
	public void upDatePlot(PlotInfo plotInfo) throws Exception {

		PlotInfo dbPlotInfo = plotRepository.findByPlotNo(plotInfo.getPlotNo());
		
		if(dbPlotInfo == null) {
			throw new Exception("No plot found with given plot number");
		}
		
		dbPlotInfo.setStatus(plotInfo.getStatus());
		dbPlotInfo.setOwner(plotInfo.getOwner());
		
		plotRepository.save(dbPlotInfo);
	}

}
