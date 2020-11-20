package com.plotbooking.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.plotbooking.model.PlotInfo;

@Repository
public interface PlotRepository extends CrudRepository<PlotInfo, Integer> {
	public PlotInfo findByPlotNo(int plotNo);
}
